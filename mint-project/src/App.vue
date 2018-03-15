<template>
  <div id="app">
    <h1>欢迎来到Vue大世界</h1>
    <router-link to="/first">Go to first</router-link>
    <router-link to="/second">Go to second</router-link></br>

    <router-link to="/first/one">Go to 1</router-link>
    <router-link to="/first/two">Go to 2</router-link>

   <router-view/>
    <!-- 路由匹配到的组件将渲染在这里 -->

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app a {
  color:#555;font-size:26px;
}


</style>
