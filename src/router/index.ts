import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Band from '../views/Band.vue';
import Page from '../components/structure/page.vue';
import PageSlider from '../components/navigation/page-slider.vue';
import SourceSlider from '../components/navigation/source-slider.vue';
import Source from '../components/structure/source.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Band,
    children: [
      {
        path: 'page/:pageId/',
        name: 'Page',
        props: true,
        components: {
          default: Page,
          slider: PageSlider,
        },
      },
      {
        path: 'page/:pageId/source/:sourceId/',
        name: 'Source',
        props: true,
        components: {
          default: Source,
          slider: SourceSlider,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
