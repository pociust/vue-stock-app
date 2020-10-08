import Home from '@/components/pages/Home.vue';
import Portfolio from '@/components/pages/portfolio/Portfolio.vue';
import Stocks from '@/components/pages/stocks/Stocks.vue';

export const routes = [
  {
    path: '',
    components: { default: Home },
  },
  {
    path: '/portfolio',
    components: { default: Portfolio },
  },
  {
    path: '/stocks',
    components: { default: Stocks },
  },
];