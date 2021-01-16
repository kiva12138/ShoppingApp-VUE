<template>
    <div>
        <p>Hello This is main page</p>
        <router-view></router-view>
        <router-view></router-view>
        
        <router-link to="/recommend">Recommend</router-link>
        <router-link to="/classify">Classify</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/person">Person</router-link>
        <NavBar />
    </div>

</template>

<script>
import NavBar from '@/components/HeaderFooter/Navbar.vue'

export default {
    name: 'MainPage',
    components: {
        NavBar
    }
}
</script>

<style>

</style>