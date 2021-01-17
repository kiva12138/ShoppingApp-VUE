<template>

<div class="sale_main">
    <mt-swipe class="sale_big">
        <mt-swipe-item class="sale_big_item" v-for="(item, index) in bigshow" :key="index" >
            <div class="sale_big_item_div" >
                <img :src="item.src" alt="" class="sale_big_img"
                    @click="handleBigClick(index)">
            </div>
        </mt-swipe-item>
    </mt-swipe>

    <div class="sale_class">
        <ul class="sale_types">
            <li class="sale_types_item" v-for="(item, index) in types" :key="index" >
                <div class="sale_types_item_div" >
                    <img :src="item.src" alt="" class="sale_types_img"
                        @click="handleTypeClick(index)">
                    <span class="sale_types_text">
                        {{item.name}}
                    </span>
                </div>
            </li>
        </ul>
    </div>

    <Activity />
    <ItemList />
    
</div>
</template>

<script>
import ItemList from '@/components/Detail/ItemsList.vue'
import Activity from '@/components/Detail/Activity.vue'

export default {
    name: "Sale",
    components: {
        ItemList,
        Activity,
    },
    data () {
        return {
            types: [
                {name: '分类', src: require('@/assets/icon/type.jpg')},
                {name: '签到', src: require('@/assets/icon/sign.jpg')},
                {name: '拼团', src: require('@/assets/icon/tuan.jpg')},
                {name: '特惠', src: require('@/assets/icon/box.jpg')},
                {name: '白条', src: require('@/assets/icon/money.jpg')},
            ],
            bigshow: [
                {name: 'Big1', src: require('@/assets/images/big1.png')},
                {name: 'Big2', src: require('@/assets/images/big2.jpg')},
                {name: 'Big3', src: require('@/assets/images/big3.jpg')},
            ]
        }
    },
    created: function () {
    },
    watch: {
    },
    methods: {
        handleTypeClick: function (index) {
            console.log(index, this.types[index].name)
        },
        handleBigClick: function (index) {
            console.log(index, this.bigshow[index].name)
        }
    },
};
</script>

<style>
.sale_main {
    /* height: 70%; */
    /* top: 40%; */
    /* width: 100%; */
    background-color: rosybrown;
}
.sale_big {
    height: 150px;
    margin: 5px;
}
.sale_big_img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto
}
.sale_class {
    width: 100%;
    height: 12%;
}
.sale_types {
    list-style: none;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    padding: 0;
}
.sale_types_item {
    display: inline-block;
    width: 20%;
    height: 100%;
    text-align: left;
}
.sale_types_item_div {
    text-align: center;
    display: block;
    margin: 0;
    padding: 0;
}
.sale_types_img {
    /* height: 80%;
    width: 25%; */
    max-width: 80%;
    max-height: 80%;
    margin:0 auto;
    padding: 0;
    display:block;
}
.sale_types_text {
    /* width: 15%;
    height: 15%; */
    font-size: 80%;
    display:block;
}
</style>
