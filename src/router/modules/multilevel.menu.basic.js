import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'
// still under construction

export default {
    path: '/multilevel_menu_basic',
    component: Layout,
    redirect: '/multilevel_menu_basic/overview',
    name: 'multilevelMenuBasic',
    meta: {
        title: '功能菜单',
        icon: 'sidebar-menu',
        auth: ['permission.basic']
    },
    children: [
        {
            path: 'overview',
            name: 'InformationChartOverview',
            component: () => import('@/views/index'),
            redirect: '',
            meta: {
                title: '信息总览',
                sidebar: false,
                breadcrumb: false
            }
        },
        {
            path: 'account',
            name: 'Account',
            component: EmptyLayout,
            redirect: '/account_management/personal/setting',
            meta: {
                title: '账户管理'
            },
            children: [
                {
                    path: 'information',
                    name: 'Information',
                    component: () => import('@/views/basic_functions/account_management/personal/setting'),
                    meta: {
                        title: '账户信息',
                        sidebar: true,
                        breadcrumb: true
                    }
                },
                {
                    path: 'editing',
                    name: 'Editing',
                    component: () => import('@/views/basic_functions/account_management/personal/edit.password'),
                    meta: {
                        title: '信息修改',
                        sidebar: false,
                        breadcrumb: true
                    }
                }
            ]
        },
        {
            path: 'function_manage',
            name: 'Function',
            component: EmptyLayout,
            redirect: '/function_manage/basic',
            meta: {
                title: '日记管理'
            },
            children: [
                {
                    path: 'basic',
                    name: 'Basic',
                    component: () => import('@/views/basic_functions/function_manage/basic'),
                    meta: {
                        title: '基础设置',
                        sidebar: true,
                        breadcrumb: true
                    }
                },
                {
                    path: 'editor',
                    name: 'Editor',
                    component: () => import('@/views/basic_functions/function_manage/editor'),
                    meta: {
                        title: '日记创建',
                        sidebar: false,
                        breadcrumb: true
                    }
                },
                {
                    path: 'gallery',
                    name: 'Gallery',
                    component: () => import('@/views/basic_functions/function_manage/gallery'),
                    meta: {
                        title: '日记浏览',
                        sidebar: false,
                        breadcrumb: true
                    }
                }
            ]
        },
        {
            path: 'authentic_management',
            name: 'Authentic',
            component: EmptyLayout,
            redirect: '/authentic_management/basic',
            meta: {
                title: '站内通知管理',
                sidebar: true,
                breadcrumb: true
            },
            children: [
                {
                    path: 'graphic',
                    name: 'Graphic',
                    component: () => import('@/views/basic_functions/authentic_management/basic'),
                    meta: {
                        title: '基础权限管理',
                        sidebar: true,
                        breadcrumb: true
                    }
                }
            ]
        }
    ]
}
