// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/parts/browse/',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'BrowseTorsos',
          path: 'torso',
          component: RobotTorsos,
        },
        {
          name: 'BrowseBases',
          path: 'base',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartsInfo,
      props: true,
    },
  ],
});
