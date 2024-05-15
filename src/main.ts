import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from '@/App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/', component: () => import('@/views/Home.vue')},
        // and finally the default route, when none of the above matches:
        { name: 'Pagina niet gevonden', path: '/:pathMatch(.*)*', component: () => import('@/views/FourOFour.vue') },
    ],
    scrollBehavior: (to, from, savedPosition) => {
      return { top: savedPosition?.top ?? 0 };
    },
})

const app = createApp(App);

app.use(router);

router.afterEach((to, from, falure) => {
  if (to.name) {
    document.title = 'Dispuut Ebrius Vespertina - ' + to.name.toString();
  }
});

app.mount('#app');
