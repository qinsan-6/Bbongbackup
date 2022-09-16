import { createRouter ,createWebHistory,RouteRecordRaw} from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue'
import IndexComponent from '@/components/IndexComponent.vue'
const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name:'root',
        redirect:'/index',
        children:[
            {
                path: '/login',
                name:'login',
                component: LoginComponent
            },
            {
                path: '/index',
                name:'index',
                component: IndexComponent,
                children:[
                   {
                    path: '/about',
                    name:'about',
                    component: ()=>import('../components/aboutPages/AboutView.vue')
                   },
                   {
                    path: '/image',
                    name:'image',
                    component: ()=>import('../components/aboutPages/ImageView.vue')
                   },
                   {
                    path: '/evaluate',
                    name:'evaluate',
                    component: ()=>import('../components/aboutPages/EvaluateView.vue')
                   }
                ]
            }
        ]
    },
   
   
]
const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router