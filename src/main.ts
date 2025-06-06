import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from '@/App.vue';
import home from '@/views/Home.vue';
import About from '@/views/About.vue';
import fof from '@/views/404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'Home', path: '/', component: home },
    { name: 'Over ons', path: '/over-ons', component: About },
    // and finally the default route, when none of the above matches:
    { name: 'Pagina niet gevonden', path: '/:pathMatch(.*)*', component: fof },
  ],
  scrollBehavior: (_to, _from, savedPosition) => {
    return { top: savedPosition?.top ?? 0 };
  },
});

const app = createApp(App);

app.use(router);

router.afterEach((to, _from, _failure) => {
  if (to.name) {
    document.title = 'Dispuut Ebrius Vespertina - ' + to.name.toString();
  }
});

app.mount('#app');
