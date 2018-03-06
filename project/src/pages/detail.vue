<template>
	<div class='detail'>
        <headBar></headBar>
        <div class='content'>
         	<h2 class='topicTitle'>
         		 {{topic.title}}
         	</h2>
	         <section class='markdown-body detail-content' v-html="topic.content">
	         </section>
        </div>
        <loading v-show='show'>	</loading>	
      
	</div>
</template>

<script>
import headBar from '../components/head.vue'
import loading from '../components/loading.vue'
  export default{
  	name:'detail',
  	components:{
  		headBar,loading
  	},
    data(){
  		return{
  			id:'',
  			topic:{},
  			show:false
  		}
  	},
  	mounted:function(){
       this.show=true;
  	  let id= this.$route.params.id;
  	  this.$http.get('https://cnodejs.org/api/v1/topic/'+ id,)

  	  .then(function(res){
        this.topic=res.data.data;
        this.show=false;
  	  }.bind(this))

  	  .catch(function(error){
  	   	console.log(error);
  	  })
  	          // this.loading=false;

  	},

  	methods:function(){
  		

  	}
  }	
</script>
<style lang='less'>
  .content{
  	margin-top:1.0rem;
  	background: #fff;
  	padding:0.5rem;
  	h2{
  		font-size:24px;
  		line-height: 1.5;
  		font-weight:500;
  		margin:1rem 0 1rem;
  		border-bottom: 1px solid #eee;

  	}
  }
  .detail-content{
  	img{
  		max-width:100%;
  		vertical-align: middle;
  		height:auto;
  	}
  	p{
  		font-size:15px;
  		margin:0.5rem 0;
  		line-height: 1.5;
  	}


  }
  .markdown-body{
    font-size: 14px;
    margin-top: 0.25rem;
    // padding-left: 20px;
  }

</style>