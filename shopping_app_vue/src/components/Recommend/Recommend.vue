<template>
    <div class="recommed_main">
        <Search class="recommend_search"/>

        <div class="recommend_content">
            <mt-navbar v-model="selected">
                <mt-tab-item
                    v-for="(item, index) in navs" 
                    v-bind:key=index
                    :id=index>
                    {{item}} {{index}}
                </mt-tab-item>
            </mt-navbar>
        </div>

        <router-view />
    </div>
</template>

<script>
import Search from "@/components/Detail/Search.vue";

export default {
    data() {
        return {
            navs: ["特卖", "数码", "首饰", "服饰", "工具", "食品", "图书", "药品"],
            routes: ["sale", "digital", "jewl", "clothes", "tools", "food", "books", "medicine"],
            selected: 0,
        };
    },
    components: {
        Search,
    },
    created: function () {
        self.selected = 0
        this.$router.push('/recommend/sale')
    },
    watch: {
        "selected": {
            handler (val) {
                // console.log(this.routes[val])
                // return
                // var current_route = this.$route.path.slice(1)
                // console.log(current_route)
                // if (val == oldval || val == current_route) {
                //     return 
                // }
                var new_route = '/recommend/' + this.routes[val]
                console.log(new_route)
                this.$router.push(new_route)
            },
            deep:true
        }
    },
    methods: {
    },
};
</script>

<style>
.recommed_main {
    height: 100%;
}
.recommend_search {
    height: 8%;
    overflow: hidden;
}
.recommend_content {
    height: 92%;
    overflow: auto;
}
</style>