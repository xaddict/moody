<template>
    <div>
		<h1>Moody 🥹</h1>
		<router-link :to="{name:'home'}">Home</router-link>
		<router-link :to="{name:'history'}">History</router-link>
		<router-link :to="{name:'about'}">About</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>
