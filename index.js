import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import '@/styles/index.scss'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/Home.vue'),
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
