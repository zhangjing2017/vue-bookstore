
import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';


/*使用vueResource模块，使用后每个this都是$http的一个实例*/
import VueResource from 'vue-resource';
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  ...App
});
