<template>
  <div id="app">
    <keep-alive>
  	   <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
    name: 'app',
    data(){
       return {}
    },
    ready:function(){
    }
}
</script>

<style lang='less'>
  @import './assets/css/reset.less';
  // @import './assets/css/common.less';

#app { 
  font-family: "Helvetica Neue","Luxi Sans",'Avenir', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
    background: #ccc;
}
a{
	color:#333;
}
</style>
