import VueRouter from 'vue-router'
import home from '../components/pages/home'
import register from '../components/pages/register'
import login from '../components/pages/login'
import tinymce from '../components/public/tinymce'

 export default new VueRouter({
    mode:'history',
    routes:[
      { path:'/',
        redirect:'/home'
    },
    {
        path:'/tinymce',
        component:tinymce
    },
        {
            path:'/home',
            name:'home',
           
            components:{
                default:home
            }
           
        },

        {
            path:'/register',
            name:'register',
            components:{
                default:register
            } 
        },
        {
            path:'/login',
            name:'login',
            components:{
                default:login
            } 
        }
    ]
 })