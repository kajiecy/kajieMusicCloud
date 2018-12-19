import Main from '@/views/layout/Home.vue';


// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/find',
    component: Main,
    children: [
        {path: 'home', name: 'home',meta:{icon:'icon-zuo',title:'欢迎界面'}, component: () => import('@/views/Welcome.vue')},
        {path: 'find', name: 'find',meta:{icon:'icon-maikefeng',title:'发现'}, component: () => import('@/views/homepages/HomeFind.vue')},
        {path: 'video', name: 'video',meta:{icon:'icon-zuo',title:'视频'}, component: () => import('@/views/homepages/HomeVideo.vue')},
        {path: 'myPage', name: 'myPage',meta:{icon:'icon-yun',title:'我的音乐'}, component: () => import('@/views/homepages/HomeMyPage.vue')},
        {path: 'firends', name: 'firends',meta:{icon:'icon-zuo',title:'朋友'}, component: () => import('@/views/homepages/HomeFirends.vue')},
        {path: 'account', name: 'account',meta:{icon:'icon-zuo',title:'账号'}, component: () => import('@/views/homepages/HomeAccount.vue')},
        {path: 'singlistpage', name: 'singListPage',meta:{icon:'icon-zuo',title:'歌单'}, component: () => import('@/views/singlistpages/SingListPage.vue')},

        {path: 'testPage', name: 'testPage',meta:{icon:'icon-zuo',title:'测试界面'}, component: () => import('@/views/TestPage.vue')},

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'Welcome',
                name: 'Welcome',
                meta:{
                    icon: 'el-icon-date',
                    title: '排序算法展示'
                },
                component: () => import('@/views/Welcome.vue')
            }
        ]
    },
    {path: '/nianzhi', name: 'nianzhi',meta:{icon:'icon-zuo',title:'歌单'}, component: () => import('@/views/laboratory/nianzhi.vue')},
    {path: '/positionSticky', name: 'positionSticky',meta:{icon:'icon-zuo',title:'歌单'}, component: () => import('@/views/laboratory/positionSticky.vue')},
    {path: '/stackBlurDemo', name: 'stackBlurDemo',meta:{icon:'icon-zuo',title:'测试高斯模糊'}, component: () => import('@/views/laboratory/stackBlurDemo.vue')},
    {path: '/transformTest', name: 'transformTest',meta:{icon:'icon-zuo',title:'测试高斯模糊'}, component: () => import('@/views/laboratory/transformTest.vue')},

];
export const undefindRouter = {
    path: '/404',
    name: '404',
    meta: {
        title: '404 没有找到界面'
    },
    component: () => import('@/views/common/undefindPage.vue')
};
export const nullRouter = {
    path: '*',
    name:'null',
    redirect: '/404'
};
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    ...appRouter,
    undefindRouter,
    nullRouter
];
