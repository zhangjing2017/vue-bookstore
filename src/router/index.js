import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List';
import Detail from '@/components/Detail';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      component: Add
    },
    {
     path:'/list',
      component:List
    },
    {
      path:'/detail/:id',//  /detail/1  this.$route.params.id
      component:Detail,
      name:'detail'
    }
  ]
})
