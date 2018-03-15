<template>

  <div class="hello">
<!-- 
  <mt-search  v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1111</mt-swipe-item>
      <mt-swipe-item>2222</mt-swipe-item>
      <mt-swipe-item>3333</mt-swipe-item>
    </mt-swipe>
   <footer> 
    <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          <img slot="icon" src="../assets/100x100.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../assets/100x100.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../assets/100x100.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../assets/100x100.png">
          我的
        </mt-tab-item>
    </mt-tabbar>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // msg: 'Welcome to Vue',
      selected:0,
      value:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe{
  height:200px;
  background:#ccc;
  opacity: 0.8;
}

.mint-swipe-items-wrap>div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.mint-swipe-items-wrap>div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none;
}
* {
    box-sizing: border-box;
}
div {
    display: block;
}
.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
