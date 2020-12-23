import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

export default [
  {
    path:'',
    component:Home
  },
  {
    path:'/login',
    component:Login,
    meta: { isHideFooter:true }
  },
  {
    path:'/register',
    component:Register,
    meta: { isHideFooter:true }
  },
  {
    path:'/search/:keyword?',
    component:Search,
    name:'search',
    props: (route) => ({keyword: route.params.keyword, keyword2: route.query.keyword2}) 
  }
]