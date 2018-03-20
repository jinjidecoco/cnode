<template>
	<div class='lists'>
    <loading v-show='show'></loading>
	<section >
		<ul class='items'>
				<li v-for='item in items'>
					<router-link :to="{name:'detail',params:{id:item.id} }">
						<img :src='item.author.avatar_url' alt="">
						<a href="" class='article-title'>
							{{item.title}}
							<span class='count'>
							  <b>{{item.reply_count}}</b>/<span class='visit'>{{item.visit_count}}</span>
							</span>
						</a>
						
				    </router-link>	
				</li>
		</ul>
	</section>
<!-- 	  		<span>{{this.$route}}</span>
 -->
	</div>
</template>	
<script>
import loading from './loading.vue'
	export default{	
	    name:'list',
	    components:{
         loading
        },
        data(){
	  	    return{
	  	    	 items:[],
	  	    	 tab:'all',
	  	    	 show:false,
	  	    	 scroll: true,
	  	    	 limit:50,
	  	    	 page:1,
		  	}
	    },
	    created:function(){
	       this.fetchData(); 
	    
	    },
	    mounted(){
	    	   window.addEventListener('scroll', this.getScrollData)
	
	    },
	    methods:{
	    	fetchData:function(){
	    	    this.show=true;
	    	    this.$http.get('https://cnodejs.org/api/v1/topics',{
	    	 	params:{
	    	 		tab:this.tab,
	    	 		page:this.page,
	    	 		limit: 20
	    	 	}
	    	 	
	    	 })
	    	 .then(function(res){
	    	 	    this.scroll = true;
	    	 	    this.show = false;
	    	 	  if(this.page<=1){
                    this.items = res.data.data;
                  }else{
                  	this.items=this.items.concat(res.data.data);
                  }
	    	 }.bind(this))
	    	 .catch(function(error){
	    	 	console.log(error);
	    	 })
	    	},
	    	getScrollData(){
	    		if(this.scroll){
		    		let totalheight = parseInt(window.innerHeight) + parseInt(window.scrollY);
		    	    if (document.body.clientHeight <= totalheight + 1000) {
		    	    	console.log('我要加载了')
		    	    	this.scroll = false;
		    	    	this.page += 1;
		    	    	// this.show=true;
		    	    	this.fetchData();
	                }	
                }
	    	}
	    },
	    watch: {
          '$route':function(to, from) {//监控在当前组件中路由发生变化时执行的函数，如果/user/1 切换到 /user/2时就会执行此方法
          	if(to.query && to.query.tab){
          		this.tab=to.query.tab
          	}
            this.fetchData();
          }
        }
    }
</script>
<style lang='less'>
.lists{
	background: #fff;
	padding-top:6.65rem;
  li{
    padding:0.5rem 0.75rem 0.5rem 1.0rem;
    border-bottom:1px solid #e6e6ea8f;
    img{
    	width:1.5rem;
    	height:1.5rem;
    	margin-right:0.4rem;
    	vertical-align: middle
    }
    .article-title{
    	// margin-left:0.25rem;
    	display:inline-block;
    	font-size:16px;
    	max-width: 86%;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	overflow: hidden;
    	vertical-align: middle;
    }
    .count{
    	font-size:12px;
    	display: block;
    	b{
    		color:#9e78c0;
    	}
    	.visit{
    		color:#b4b4b4;
    		font-weight:500;
    	}
    }
  }
}
	
</style>

