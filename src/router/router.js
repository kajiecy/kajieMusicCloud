import Main from '@/views/layout/Home.vue';




// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {path: 'home', name: 'home', component: () => import('@/views/Welcome.vue')},
        {path: 'find', name: 'find', component: () => import('@/views/homepages/HomeFind.vue')},
        {path: 'video', name: 'video', component: () => import('@/views/homepages/HomeVideo.vue')},
        {path: 'myPage', name: 'myPage', component: () => import('@/views/homepages/HomeMyPage.vue')},
        {path: 'firends', name: 'firends', component: () => import('@/views/homepages/HomeFirends.vue')},
        {path: 'account', name: 'account', component: () => import('@/views/homepages/HomeAccount.vue')},
        {path: 'testPage', name: 'testPage', component: () => import('@/views/TestPage.vue')},
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
                    title: '排序算法展示',
                },
                component: () => import('@/views/Welcome.vue')
            }
        ]
    },

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
