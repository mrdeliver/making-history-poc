import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Band from '../views/Band.vue';
import Page from '../components/structure/page.vue';
import PageSlider from '../components/navigation/page-slider.vue';
import SourceSlider from '../components/navigation/source-slider.vue';
import Source from '../components/structure/source.vue';
import Worksheet from '../components/structure/worksheet.vue';
import WorksheetSlider from '../components/navigation/worksheet-slider.vue';
import Subject from '../views/Subject.vue';

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
      {
        path: 'page/:pageId/worksheet/:worksheetId',
        name: 'Worksheet',
        props: true,
        components: {
          default: Worksheet,
          slider: WorksheetSlider,
        },
      },
    ],
  },
  {
    path: '/subjects/:subjectId/',
    name: 'Subjects',
    props: true,
    component: Subject,
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
