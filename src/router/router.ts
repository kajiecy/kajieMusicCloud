// @ts-ignore
import Main from '@/views/layout/Home.vue';


// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/find',
    component: Main,
    children: [
        // @ts-ignore
        {path: 'home', name: 'home',meta:{icon:'icon-zuo',title:'欢迎界面',footShow:true}, component: () => import('@/views/Welcome.vue')},
        // @ts-ignore
        {path: 'find', name: 'find',meta:{icon:'icon-maikefeng',titleType:'find',title:'发现',footShow:true}, component: () => import('@/views/homepages/HomeFind.vue')},
        // @ts-ignore
        {path: 'video', name: 'video',meta:{icon:'icon-zuo',title:'视频',footShow:true}, component: () => import('@/views/homepages/HomeVideo.vue')},
        // @ts-ignore
        {path: 'myPage', name: 'myPage',meta:{icon:'icon-yun',title:'我的音乐',footShow:true}, component: () => import('@/views/homepages/HomeMyPage.vue')},
        // @ts-ignore
        {path: 'firends', name: 'firends',meta:{icon:'icon-zuo',title:'朋友',footShow:true}, component: () => import('@/views/homepages/HomeFirends.vue')},
        // @ts-ignore
        {path: 'account', name: 'account',meta:{icon:'icon-zuo',title:'账号',footShow:true}, component: () => import('@/views/homepages/HomeAccount.vue')},
        // @ts-ignore
        {path: 'singlistpage', name: 'singListPage',meta:{icon:'icon-zuo',title:'歌单',transparent:true,footShow:true}, component: () => import('@/views/singlistpages/SingListPage.vue')},
        // @ts-ignore
        {path: 'singPlayer', name: 'singPlayer',meta:{icon:'icon-zuo',title:'播放页',titleType:'player',transparent:false,footShow:false}, component: () => import('@/views/singlistpages/SingPlayer.vue')},
        // @ts-ignore
        {path: 'testPage', name: 'testPage',meta:{icon:'icon-zuo',title:'测试界面',footShow:true}, component: () => import('@/views/TestPage.vue')},
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
                // @ts-ignore
                component: () => import('@/views/Welcome.vue')
            }
        ]
    },
    // @ts-ignore
    {path: '/nianzhi', name: 'nianzhi',meta:{icon:'icon-zuo',title:'歌单'}, component: () => import('@/views/laboratory/nianzhi.vue')},
    // @ts-ignore
    {path: '/positionSticky', name: 'positionSticky',meta:{icon:'icon-zuo',title:'歌单'}, component: () => import('@/views/laboratory/positionSticky.vue')},
    // @ts-ignore
    {path: '/stackBlurDemo', name: 'stackBlurDemo',meta:{icon:'icon-zuo',title:'测试高斯模糊'}, component: () => import('@/views/laboratory/stackBlurDemo.vue')},
    // @ts-ignore
    {path: '/transformTest', name: 'transformTest',meta:{icon:'icon-zuo',title:'测试高斯模糊'}, component: () => import('@/views/laboratory/transformTest.vue')},

];
export const undefindRouter = {
    path: '/404',
    name: '404',
    meta: {
        title: '404 没有找到界面'
    },
    // @ts-ignore
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
