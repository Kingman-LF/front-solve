/**
 * 基础路由
 */
export const constantRouterMap = [
    {
        path: '/login',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/login/index'),
        hidden:true
    },
    {
        path: '/',
        component: () => import('@/views/index'),
        // redirect: '/home',
        // children: [
        //     {
        //         path: 'home',
        //         component: () => import('@/views/home/index'),
        //         name: 'home',
        //         meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        //     }
        // ]
    },
    {
        path: '/home',
        component: () => import('@/views/home/index'),
    },
    //新--破五多
    {
        path: '/jiufen',
        name: 'jiufen',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/jiufen/index'),
    },
    // 新-投诉
    {
        path: '/tousu',
        name: 'tousu',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/tousu/index'),
    },
    //新-事故
    {
        path: '/shigu',
        name: 'shigu',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/shigu/index'),
    },
    //新--风险
    {
        path: '/fengxian',
        name: 'fengxian',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/fengxian/index'),
    },
    // 新-破五多首页
    {
        path: '/shouye',
        name: 'shouye',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/shouye/index'),
    },
    {
        path: '/largeData',
        name: 'largeData',
        meta: {
            fullScreen:true,
            competence: ['administrator']
        },
        component: () => import('@/views/largeData/index'),
    },
]
