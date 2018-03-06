<template>
  <div class="home">
    <headBar></headBar>
    <tab ></tab>
    <list></list>  
       <!--  <keep-alive>
            <router-view></router-view>
        </keep-alive> -->

  </div>
</template>

<script>
import headBar from '../components/head.vue'
import tab from '../components/tab.vue'
import list from '../components/list.vue'

export default {
  name: 'Home',
  components:{
  headBar,tab,list

  },
  data() {
    return{
      // show:true
  

    }
  },
  created:function(){
    // this.show=false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
h1, h2 {
  font-weight: normal;
}

</style>
