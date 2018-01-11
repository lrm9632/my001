import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
import HelloWorld from '../components/HelloWorld'
import Child01 from '../components/new_file'

Vue.use(Router)
// Vue.use(axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/Child01',
    	name:'child01',
    	component:Child01
    }
  ]
})
