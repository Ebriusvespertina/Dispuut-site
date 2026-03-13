let contentDataPromise;

const ACTIVITY_START_MONTH = 8;
const SUMMER_BREAK_MONTHS = new Set([6, 7]);

function getActivityStartYear(now = new Date()) {
  return now.getFullYear() - 5;
}

function getThirdThursdayDateUTC(year, monthIndex) {
  const firstDayOfMonth = new Date(Date.UTC(year, monthIndex, 1));
  const firstDayWeekday = firstDayOfMonth.getUTCDay();
  const offsetToThursday = (4 - firstDayWeekday + 7) % 7;
  const firstThursdayDate = 1 + offsetToThursday;
  const thirdThursdayDate = firstThursdayDate + 14;

  return new Date(Date.UTC(year, monthIndex, thirdThursdayDate, 23, 59, 59));
}

function getCompletedScheduledActivities(now = new Date()) {
  const nowUTC = new Date(now.toISOString());
  const startYear = getActivityStartYear(nowUTC);
  let count = 0;

  for (let year = startYear; year <= nowUTC.getUTCFullYear(); year += 1) {
    for (let month = 0; month < 12; month += 1) {
      if (year === startYear && month < ACTIVITY_START_MONTH) {
        continue;
      }

      if (SUMMER_BREAK_MONTHS.has(month)) {
        continue;
      }

      const eventDate = getThirdThursdayDateUTC(year, month);
      if (eventDate <= nowUTC) {
        count += 1;
      }
    }
  }

  return count;
}

async function loadContentData() {
  if (!contentDataPromise) {
    contentDataPromise = (async () => {
      const [yeargroups, membersDoc, statsDoc] = await Promise.all([
        queryCollection("yeargroups").order("year", "ASC").all(),
        queryCollection("members").first(),
        queryCollection("siteStats").first(),
      ]);

      return {
        yeargroups: yeargroups || [],
        members: membersDoc?.members || [],
        stats: statsDoc || { totalActivities: 0, totalBakken: 0 },
      };
    })();
  }

  return contentDataPromise;
}

const getFullName = (member) =>
  [member.firstName, member.tussenvoegsel, member.lastName]
    .filter(Boolean)
    .join(" ");

export const useDevData = () => {
  const getYearGroups = async () => {
    const { yeargroups, members } = await loadContentData();

    const membersByYear = members.reduce((acc, member) => {
      const key = String(member.year);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(member);
      return acc;
    }, {});

    return Object.fromEntries(
      yeargroups.map((group) => {
        const key = String(group.year);
        const groupMembers = membersByYear[key] || [];

        return [
          key,
          {
            ...group,
            members: groupMembers,
            memberCount: groupMembers.length,
          },
        ];
      }),
    );
  };

  const getYearGroup = async (year) => {
    const yearGroups = await getYearGroups();
    return yearGroups[String(year)] || null;
  };

  const getMemberCount = async () => {
    const { members } = await loadContentData();
    return members.length;
  };

  const getStats = async () => {
    const [memberCount, yearGroups] = await Promise.all([
      getMemberCount(),
      getYearGroups(),
    ]);

    const completedActivities = getCompletedScheduledActivities();

    return {
      totalMembers: memberCount,
      yearGroups: Object.keys(yearGroups).length,
      totalActivities: completedActivities,
      // Activiteiten * 25 personen * 4 bakken per activiteit + 370 liter voor KMK per jaar (4 bakken per liter)
      totalBakken:
        completedActivities * 25 * 4 +
        Math.ceil((completedActivities / 12) * 370 * 4),
    };
  };

  const getBakkenLeaderboard = async () => {
    const { members } = await loadContentData();

    return members
      .filter(
        (member) =>
          typeof member.bakTime === "number" &&
          Number.isFinite(member.bakTime) &&
          member.bakTime > 0,
      )
      .map((member) => ({
        name: getFullName(member),
        year: member.year,
        time: member.bakTime,
      }))
      .sort((a, b) => a.time - b.time);
  };

  return {
    getStats,
    getYearGroups,
    getYearGroup,
    getBakkenLeaderboard,
    getMemberCount,
  };
};
