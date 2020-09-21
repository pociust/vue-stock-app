import Home from './components/pages/Home.vue';
import Portfolio from './components/pages/Portfolio.vue';

export const routes = [
  { 
    path: '', 
    components: {
      default: Home,
    }
  },
  {
   path: '/portfolio',
   components: {
     default: Portfolio,
   } 
  } 
]