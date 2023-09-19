import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SquadLayout from '../components/SquadLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SignUp.vue'),
  },
  {
    path: '/StudySign',
    name: 'Studysign',
    component: () => import('@/views/StudySign.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/MentorBoard',
    name: 'MentorBoard',
    component: () => import('@/views/board/MentorBoard.vue'),
  },
  {
    path: '/MenteeBoard',
    name: 'MenteeBoard',
    component: () => import('@/views/board/MenteeBoard.vue'),
  },
  {
    path: '/BulletinBoard',
    name: 'BulletinBoard',
    component: () => import('@/views/board/BulletinBoard.vue'),
  },
  {
    path: '/BoardWrite',
    name: 'BoardWrite',
    component: () => import('@/views/board/BoardWrite.vue'),
  },
  {
    path: '/SquadLayout',
    name: 'SquadLayout',
    component: () => import('@/components/SquadLayout.vue'),
  },
  {
  path: '/SquadHome',
  name: 'SquadHome',
    component: () => import('@/views/squad/SquadHome.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/SquadMission',
  name: 'SquadMission',
    component: () => import('@/views/squad/SquadMission.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/SquadBoardWrite',
  name: 'SquadBoardWrite',
    component: () => import('@/views/squad/SquadBoardWrite.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/SquadBoardDetail',
  name: 'SquadBoardDetail',
    component: () => import('@/views/squad/SquadBoardDetail.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/SquadBoard',
  name: 'SquadBoard',
    component: () => import('@/views/squad/SquadBoard.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/SquadSummarize',
  name: 'SquadSummarize',
    component: () => import('@/views/squad/SquadSummarize.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
  path: '/MyPage',
  name: 'MyPage',
    component: () => import('@/views/MyPage.vue'),
    meta: {
      layout: SquadLayout, // Specify the custom layout component for this route
    },
  },
  {
    path: '/squad/recruit/:squadId',
    name: 'singleRecruitSquad',
    component: () => import('@/components/SingleRecruitSquad.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
