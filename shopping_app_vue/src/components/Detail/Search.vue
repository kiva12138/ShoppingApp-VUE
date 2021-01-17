<template>
    <div class="search_main">
        <mt-search
            v-model="search_value"
            cancel-text="取消"
            @keyup.enter.native="do_search"
            placeholder="搜索你想要的商品">
        </mt-search>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    name: "Search",
    components: {},
    data() {
        return {
            search_value: ""
        };
    },
    created: function () {
    },
    watch: {
    },
    methods: {
        do_search: function () {
            console.log(this.search_value)
            Toast({
                message: '正在搜索',
                position: 'middle',
                duration: 1000,
            });
        }
    },
};
</script>

<style>

</style>