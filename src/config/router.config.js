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
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
                name: 'home',
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
        ]
    },
]
