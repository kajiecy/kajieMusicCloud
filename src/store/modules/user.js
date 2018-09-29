
const user = {
    state: {
        userInfo:{},
        userMenuData:[],
    },
    mutations: {
        //更新userInfo的信息
        upUserInfo(state,userInfo){
            state.userInfo = userInfo;
        },
        //整个更新 UserMenu对象
        changeUserMenuData(state,userMenuData){
            state.userMenuData = userMenuData;
        },
        //向store 中 userMenu List中 push一条记录
        pushUserMenuList(state,item){
            state.userMenuData.push(item);
        },
        //根据id改变 userMenu 中的title
        changeTitleById(state,param){
            state.userMenuData.forEach((item)=>{
                if(item.id === param.id){
                    item.title=param.title;
                }
            })
        },
        //用于删除
        delMenuListById(state,id){
            let delIndex = null;
            state.userMenuData.forEach((item,index)=>{
                if(item.id === id){
                    delIndex = index;
                }
            })
            if(delIndex!=null){
                state.userMenuData.splice(delIndex,1);
            }
        }

    }
};

export default user;
