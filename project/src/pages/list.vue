<template>
	<div class='lists'>
		 <headBar></headBar>
         <tab ></tab>
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
	</div>
</template>	
<script>

import headBar from '../components/head.vue'
import tab from '../components/tab.vue'
import loading from '../components/loading.vue'
import utils from '../assets/js/utils.js'


	export default{	
	    name:'list',
	    components:{
         headBar,tab,loading
        },
        data(){
	  	    return{
	  	    	 // index:0,
	  	    	 items:[],
	  	    	 tab:'all',
	  	    	 show:false,
	  	    	 scroll: true,
	  	    	 limit:20,
	  	    	 page:1,
		  	}
	    },
	    beforeRouteEnter (to, from, next) {
	    	if(to.name!=='detail'){
	    		sessionStorage.removeItem('tabName');
                sessionStorage.removeItem('pos');
                sessionStorage.removeItem('content');
	    	}
            next();
        },
		beforeRouteLeave (to,from,next) {
			if(to.name==='detail'){
		          sessionStorage.setItem('pos',document.body.scrollTop || 
		          	document.documentElement.scrollTop);
		          sessionStorage.setItem('tabName',this.tab);  
		          sessionStorage.setItem('content',JSON.stringify(this.items));  
		    }
		    next();
		    window.removeEventListener('scroll',this.getScrollData,false);
		},
        created:function(){
	    
	    },
	    mounted(){
	    	if (this.$route.query && this.$route.query.tab) {
                this.tab = this.$route.query.tab;
            }
	        window.addEventListener('scroll',
	    	    utils.throttle(this.getScrollData,400,1000));
   
	    	if(sessionStorage.getItem('pos')&& sessionStorage.getItem('tabName')==this.tab){  
	    		       this.tab=sessionStorage.getItem('tabName');
	    		       this.items=JSON.parse(sessionStorage.getItem('content'));
		          	 // this.$nextTick( ()=> document.body.scrollTop || document.documentElement.scrollTop;
	    	}else{
	    	    this.fetchData(); 
	    	}

	    },
	    methods:{
	    	fetchData:function(){
	    	    this.show=true;
	            this.$http
	            .get('https://cnodejs.org/api/v1/topics',
			    	    {
				    	 	params:{
				    	 		tab:this.tab,
				    	 		page:this.page,
				    	 		limit: 20
				    	 	}
			    	    })
	    	    .then(function(res){
	    	 	    this.scroll = true;
	    	 	    this.show = false;
	                if(res && res.data.data){

		    	 	  if(this.page<=1){
	                    this.items = res.data.data;
	                  }else{
	                  	this.items=this.items.concat(res.data.data);
	                  }

	                }  
	    	    }.bind(this))

	    	    .catch(function(error){
	    	 	   console.log(error);
	    	    })
	    	},
	    	getScrollData(){
	    		if(this.scroll){
		    		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop

		    		var clientHeight= document.body.clientHeight;

		    		var contentHeight =Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);

		    		var bottomHeight= contentHeight -clientHeight-scrollTop;

		    	    if (bottomHeight<200){  
			    	    	// this.scroll = false;
			    	    	this.page += 1;
			    	    	this.fetchData();
	                }	
                }
	    	},
	    	// mapping(){
	    	// 	console.log(this.tab);
	    	// 	switch(this.tab){
	    	// 	    case "all":
		    // 		     this.index =0;
		    // 		     break;
		    // 		case 'good':
		    // 		     this.index =1;
		    // 		     break;
		    // 		case 'share':
		    // 		     this.index =2;
		    // 		     break;
		    // 		case 'ask':
		    // 		     this.index =3;
		    // 		     break;
		    // 		case 'job':
		    // 		     this.index =4;  
		    // 		     break;        
	    	// 	}
	    	// }

	    },
	    watch: {
          '$route':function(to, from) {
             //监控在当前组件中路由发生变化时执行的函数，如果/user/1 切换到 /user/2时就会执行此方法
          	if(to.query && to.query.tab){
          	    this.scroll = false;
          		this.tab=to.query.tab
          		this.page=1;

          	}
          	//改变tab时，从第一页开始取。
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

