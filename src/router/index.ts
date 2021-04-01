import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Band from '../views/Band.vue';
import Page from '../components/structure/page.vue';
import PageSlider from '../components/navigation/page-slider.vue';
import SourceSlider from '../components/navigation/source-slider.vue';
import Source from '../components/structure/source.vue';

const routes: Array<RouteRecordRaw> = [
  {

    path: '/band/:bandId/',
    name: 'Band',
    props: true,
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
        path: 'page/:pageId/source/:type/:ressourceId',
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
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
