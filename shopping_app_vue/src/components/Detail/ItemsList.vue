<template>
    <div class="items_list_main">
        <div v-for='(item, index) in items' v-bind:key="index" class="item_list_item">
            <img :src="item.src" alt="" class="item_list_item_img"
                @click="handleItemClick(index)">
            <span class="item_list_item_price">
                ￥{{item.price}}
            </span>
            <span class="item_list_item_text">
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search",
    components: {},
    data() {
        return {
            items: [
                {"name": "Test1Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
                {"name": "Test1", price: 99.9, src: require('@/assets/images/detail1.jpg')},
            ]
        };
    },
    created: function () {
    },
    watch: {
    },
    methods: {
        handleItemClick: function (index) {
            console.log(index, this.items[index].name)
        }
    },
};
</script>

<style>
.item_list_item {
    display: inline-block;
    width: 50%;
    margin: 0;
    height: 210px;
    /* background-color: red; */
    text-align: center;
    overflow: hidden;
}
.item_list_item_img {
    /* height: 80%;
    width: 25%; */
    max-width: 90%;
    max-height: 80%;
    margin:0 auto;
    padding: 5px;
    display:block;
}
.item_list_item_text {
    /* width: 15%;
    height: 15%; */
    font-size: 80%;
    display:block;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
}
.item_list_item_price {
    font-size: 100%;
    color: red;
    text-align: left;
    margin-left: 20px;;
    display:block;
}
</style>