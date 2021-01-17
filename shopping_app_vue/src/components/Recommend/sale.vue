<template>

<div class="sale_main">
    <div class="sale_big">
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

    </div>
    <div class="sale_class">
        <ul class="sale_types">
            <li class="sale_types_item" v-for="(item, index) in types" :key="index" >
                <div>
                    <img :src="item.src" alt="" class="sale_types_img" >
                    <span class="sale_types_text">
                        {{item.name}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Sale",
    components: {},
    data () {
        return {
            types: [
                {name: '分类', src: require('@/assets/icon/type.jpg')},
                {name: '签到', src: require('@/assets/icon/sign.jpg')},
                {name: '拼团', src: require('@/assets/icon/tuan.jpg')},
                {name: '特惠', src: require('@/assets/icon/box.jpg')},
                {name: '白条', src: require('@/assets/icon/money.jpg')},
            ],
            hour: 9,
            min: 13,
            sec: 13
        }
    },
    created: function () {
    },
    watch: {
    },
    methods: {
    },
};
</script>

<style>
.sale_main {
    height: 100%;
    /* width: 100%; */
    background-color: rosybrown;
}
.sale_class {
    width: 100%;
    height: 12%;
    background-color: royalblue;
}
.sale_types {
    list-style: none;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    padding: 0;
    background-color: green;
}
.sale_types_item {
    display: inline;
    width: 20%;
    height: 100%;
    text-align: left;
    background-color: sandybrown;
}
.sale_types_img {
    height: 80%;
    width: 25%;
    background-color: red;
}
.sale_types_text {
    width: 15%;
    height: 15%;
    background-color: red;
}
</style>
