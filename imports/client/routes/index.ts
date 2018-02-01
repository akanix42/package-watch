import VueRouter from 'vue-router';

import defaultRoutes from './default';

const router = new VueRouter({
  routes: [
    ...defaultRoutes as any,
  ]
});

export default router;
