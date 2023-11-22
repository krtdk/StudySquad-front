import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Vue from "q";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/user/Login.vue'),
    },
    {
        path: '/join',
        name: 'Join',
        component: () => import('@/views/user/Join.vue'),
    },
    {
        path: '/mypage',
        name: 'MyPage',
        component: () => import('@/views/user/MyPage.vue'),
    },
    {
        path: '/squad/recruit/:squadId',
        name: 'singleRecruitSquad',
        component: () => import('@/components/squad/recruit/SingleRecruitSquad.vue'),
        props: true,
    },
    {
        path: '/squads',
        name: 'RecruitSquadListBoard',
        component: () => import('@/components/squad/recruit/RecruitSquadListBoard.vue'),
        props: true,
    },
    {
        path: '/squad/write',
        name: 'createMission',
        component: () => import('@/views/squad/CreateSquad.vue'),
    },
    {
        path: '/squad/:squadId/end',
        name: 'endSquad',
        component: () => import('@/views/squad/EndSquad.vue'),
        props: true,
        children: [
            {
                path: '',
                alias: 'home',
                name: 'endSquadHome',
                component: () => import('@/components/squad/end/home/EndSquadHome.vue')
            },
            {
                path: '/squad/:squadId/end/mission',
                name: 'endSquadMission',
                component: () => import('@/components/squad/end/mission/EndSquadMission.vue')
            },
            {
                path: '/squad/:squadId/end/squadboard',
                name: 'endSquadBoard',
                component: () => import('@/components/squad/end/squadboard/EndSquadBoard.vue')
            },
            {
                path: '/squad/:squadId/end/squadboard/:squadBoardId',
                name: 'singleEndSquadBoard',
                component: () => import('@/components/squad/end/squadboard/SingleEndSquadBoard.vue')
            },
            {
                path: '/squad/:squadId/end/summarize',
                name: 'EndSquadSummarize',
                component: () => import('@/components/squad/end/summarize/EndSquadSummarize.vue')
            }
        ],
    },
    {
        path: '/squad/:squadId',
        name: 'squad',
        component: () => import('@/views/squad/ProcessSquad.vue'),
        props: true,
        children: [
            {
                path: '',
                alias: 'home',
                name: 'squadHome',
                component: () => import('@/components/squad/process/home/ProcessSquadHome.vue'),
            },
            {
                path: '/squad/:squadId/mission',
                name: 'squadMission',
                component: () => import('@/components/squad/process/mission/ProcessSquadMission.vue')
            },
            {
                path: '/squad/:squadId/mission/create',
                name: 'missionCreate',
                component: () => import('@/components/squad/process/mission/CreateMission.vue')
            },
            {
                path: '/squad/:squadId/squadboard',
                name: 'squadBoard',
                component: () => import('@/components/squad/process/squadboard/ProcessSquadBoard.vue')
            },
            {
                path: '/squad/:squadId/squadboard/:squadBoardId',
                name: 'singleSquadBoard',
                component: () => import('@/components/squad/process/squadboard/SingleSquadBoard.vue')
            },
            {
                path: '/squad/:squadId/squadboard/create',
                name: 'squadBoardCreate',
                component: () => import('@/components/squad/process/squadboard/CreateSquadBoard.vue')
            },
            {
                path: '/squad/:squadId/summarize',
                name: 'squadSummarize',
                component: () => import('@/components/squad/process/summarize/ProcessSquadSummarize.vue')
            },
            {
                path: '/squad/:squadId/summarize/create',
                name: 'createSquadSummarize',
                component: () => import('@/components/squad/process/summarize/CreateBoard.vue')
            }
        ],
    },
    {
        path: '/boards',
        name: 'boardList',
        component: () => import('@/views/board/BoardList.vue'),
    },
    {
        path: '/boards/:boardId',
        name: 'singleBoard',
        component: () => import('@/views/board/SingleBoard.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {top: 0}
    },
});

router.afterEach((to) => {
    const title = to.meta.title === undefined ? 'studysquad' : to.meta.title;
    Vue.nextTick(() => {
        document.title = title;
    })
});

export default router
