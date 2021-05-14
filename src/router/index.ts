import { createRouter, createWebHistory } from 'vue-router';

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/home.vue')
      }
    ]
  }
];

const router = createRouter({
  // createWebHistory 第一个参数为以前路由的base
  history: createWebHistory(),
  routes
});

export default router;
