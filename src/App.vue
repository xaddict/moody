<template>
    <div>
		<h1>My App</h1>
		<router-link :to="{name:'home'}">Home</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>
