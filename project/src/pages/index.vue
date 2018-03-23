<template>
  <div class="home">
    <headBar></headBar>
    <tab></tab>
  </div>
</template>
<script>
// import list from '../components/list.vue'

import headBar from '../components/head.vue'
import tab from '../components/tab.vue'

export default {
  name: 'home',
  components: {
    headBar,
    tab
  },
  data() {
    return {
      // show:true


    }
  },
  created: function() {
    // this.show=false;
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
h1,
h2 {
  font-weight: normal;
}

</style>
