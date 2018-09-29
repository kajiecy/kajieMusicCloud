import {appRouter} from '@/router/router';


const app = {
    state: {
        isCollapse:false,
        logoImgUrl:'http://qiniu.kajie88.com/siteLOGO.PNG',
        logoImgSmallUrl:'http://qiniu.kajie88.com/siteLOGO-small.PNG',
        menuList:[],
        breadcrumbArr:[{title:'首页',name:'home'}],
        rootURL:'http://localhost:8080/',
        interfaceURL: {
            readExcelTest:'test/readExcel',
            receiveExcel:'test/receiveExcel',

            login:'/user/login',
            getUserList:'/user/getUserList',
            addUser:'/user/addUser',
            delUser:'/user/delUser',
            getUserMoreInfoList:'/user/getUserMoreInfoList',

        }
    },
    getters:{
        getMenuList(){
            //this getter is conevt appRouter to menuList
            //the  format of menuList is:
            let menuList = [];
            // console.log("appRouter's data is",appRouter)
            for(let router of appRouter){
                let subMenu = {}

                if(router.children!=null&&router.children.length>1){
                    subMenu.icon = router.meta.icon;
                    subMenu.title = router.meta.title;
                    subMenu.index = router.name==null?"":router.name;
                    subMenu.subs = [];
                    for(let subRoute of router.children){
                        subMenu.subs.push({
                            index: subRoute.name,
                            title: subRoute.meta.title
                        })
                    }

                }else {
                    subMenu.icon = router.children[0].meta.icon;
                    subMenu.title = router.children[0].meta.title;
                    subMenu.index = router.children[0].name;
                }
                menuList.push(subMenu)
            }
            // console.log("menuList's data is",menuList)
            return menuList;
        },
        getWholeUrl:(state) => (interName) => {
            return state.rootURL+state.interfaceURL[interName];
        }
    },
    mutations: {
        changeCollapse (state) {
            // 变更状态
            state.isCollapse=!state.isCollapse;
        },
        updateBreadcrumbArr(state,routerMatched){
            //路由每次变动修改面包屑
            let newBreadcrumb = [{title:'首页',name:'home'}];
            for(let item of routerMatched){
                if(item.meta.title!=null){
                    newBreadcrumb.push({title:item.meta.title,name:item.name,query:item.query})
                }
            }
            state.breadcrumbArr = newBreadcrumb;
        }
    }
};

export default app;
