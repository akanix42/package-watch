import Landing from '../pages/Landing/Landing.vue';
import DefaultLayout from '../layouts/Default.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Landing,
      }
    ],
  },

];

export default routes;
