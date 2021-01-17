<template>
  <div>
    <router-view class="mainpage_main"></router-view>

    <mt-tabbar v-model="selected" class="main_page_tabbar">
      <mt-tab-item id="recommend">
        <img slot="icon" src="@/assets/icon/index.png">
        推荐
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img slot="icon" src="@/assets/icon/class.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="@/assets/icon/cart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="person">
        <img slot="icon" src="@/assets/icon/me.png">
        个人
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {
  },
  data() {
    return {
      selected: 'index',
    };
  },
  created: function () {
    var current_route = this.$route.path.slice(1)
    this.selected = current_route
  },
  watch: {
    "selected": {
      handler (val, oldval) {
        var current_route = this.$route.path.split('\\')[0]
        console.log("First route", current_route)
        if (val == oldval || val == current_route) {
          return 
        }
        this.$router.push('/' + val)
      },
      deep:true
    }
  },
  methods: {
    dummy: function (index, event) {
      console.log(index + "--" + event);
    }
  },
};
</script>

<style>
.mainpage_main {
  right: 0;
  top: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  height: 92%;
}
.main_page_tabbar {
  right: 0;
  bottom: 0;
  left: 0;
  height: 8%;
  position: fixed;
}
</style>