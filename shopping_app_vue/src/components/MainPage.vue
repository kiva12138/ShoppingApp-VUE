<template>
    <div>
        <router-view class="mainpage_main"></router-view>
        <router-view></router-view>
        
        <router-link to="/recommend">Recommend</router-link>
        <router-link to="/classify">Classify</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/person">Person</router-link>
        <NavBar class="mainpage_nav"/>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                我的
            </mt-tab-item>
            </mt-tabbar>
    </div>

</template>

<script>
import NavBar from '@/components/HeaderFooter/Navbar.vue'

export default {
    name: 'MainPage',
    components: {
        NavBar,
        
    },
    data() {
        return {
            disabled: false,
            selected: 2,
        };
    },
    methods: {
        tabSwitch:function(index, event){
            console.log(index+'--'+event);
        },
        clickHandler(e) {
            // alert("我点击了按钮");
            console.log(e, "我点击了按钮");
            this.disabled = true;
            setTimeout(() => {
                this.disabled = false;
            }, 2000);
        }
    }
}
</script>

<style>
/* .mainpage_nav {

} */
</style>