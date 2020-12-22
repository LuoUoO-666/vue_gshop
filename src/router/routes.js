import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/search/:keyword',
    component:Search,
    name:'search'
  },
  {
    path:'register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  }
]