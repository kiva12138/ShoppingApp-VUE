<template>
    <div class="activity_main">
        <div class="activity_title">限时抢购</div>
        <div style="vertical-align: top; height: 100%;">
            <div class="activity_img">
                <img :src="item.src" alt="" class="activity_item_img"
                    @click="handleItemClick()"/>
            </div>
            <div>Hewllo</div>
            <div class="activity_info">
                <span :src="item.name" alt="" class="activity_item_name"
                    @click="handleItemClick()"/>
                <span :src="item.time" alt="" class="activity_item_time"
                    @click="handleItemClick()"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search",
    components: {},
    data() {
        return {
            item: {
                name: "限时秒杀商品",
                price: 88.8,
                time: "截止01月21日",
                src: require('@/assets/images/detail1.jpg')
            }
        };
    },
    created: function () {
    },
    watch: {
    },
    methods: {
        handleItemClick: function () {
            console.log("Clicked")
        }
    },
};
</script>

<style>
.activity_main {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 100px;
    overflow: hidden;
    vertical-align: top;
}
.activity_title {
    text-align: left;
    margin-left: 10px;
    color: black;
}
.activity_img {
    display: inline-block;
    width: 40%;
    height: 100%;
}
.activity_item_img {
    max-width: 90%;
    margin-left: 10px;
}
.activity_info {
    display: inline-block;
    height: 60px;
    width: 60%;
}
.activity_item_name {
    height: 50%;
    width: 100%;
}
.activity_item_time {
    height: 50%;
    width: 100%;
}
</style>