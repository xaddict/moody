import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import '@/styles/index.scss'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/Home.vue'),
	},
	{
		path: '/history',
		name: 'history',
		component: () => import('@/pages/History.vue'),
	},
	{
		path: '/history/:date',
		name: 'mood',
		component: () => import('@/pages/Mood.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/pages/About.vue'),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from) => {
	if (to.matched.length === 0) {
		return { name: 'home' }
	}
})


const app = createApp(App);
app.use(router);
app.mount('#app');
