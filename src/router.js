import Home from './components/pages/Home.vue';
import NavBar from './components/NavigationBar.vue';

export const routes = [
  { path: '', components: {
    default: Home,
    'NavBar': NavBar
  } } 
]