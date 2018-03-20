<template>
	<div class='header'>
		<div class='page-cover' :class="{cover:isCover}" 
		@click='hideSideBar'>
		</div>
		<div class='side-bar':class="{show:isShow}">
			<div class='user-name'>
				<i class='icon-yonghu icon iconfont f26'></i>
			     用户名 : 小飒飒
		    </div>
		    <ul>
				<li v-for='list in lists'>
					<router-link :to="{}">
						<i class='icon-shouye1 icon iconfont f24'></i>
						{{list.title}}
					</router-link>	
					<i class='icon-gengduo3 icon iconfont' style='float:right'></i>	
				</li>
			</ul>
		</div>
		<header>
			<a href="" class='logo'>
				<span style='float:left;color:#fff; font-size:22px'
				@click='showSideBar' class='icon-gengduo2 icon iconfont'></span>
				<img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
			</a>
			<div class='search-bar'>
				<input type="text" placeholder="搜索" class='search'>
			</div>
<!-- 		<div class='subNav'>
		    <ul >
				   <li v-for='tab in tabs'>
				   	<router-link  :to="{}">
				   	 {{tab.title}}
				   	</router-link>
				   </li>
		   </ul>
		</div> -->
		</header>
	</div>
</template>
<script>
	export default{
	    name:'headBar',
	    data(){
		   	return{
		   		isShow:false,
		   		isCover:false,
		   	    lists:[
				   	  {title:'首页'},
				   	  {title:'新手入门'},
				   	  {title:'APi'},
				   	  {title:'关于'},
				   	  {title:'注册'},
				   	  {title:'登录'}
		   	    ]	
		   	}
	    },
	    methods:{
	    	showSideBar:function(e){
	    		e.preventDefault();
	    		this.isShow=true;
	    		this.isCover=true;
	    	},
	    	hideSideBar:function(e){
	    		e.preventDefault();
	    		this.isShow=false;
	    		this.isCover=false;
	    	}
	    }
    }
</script>
<style lang='less'>
    .page-cover{
    	display: none;
    	position:fixed;
    	top:0;
    	left:0;
    	right:0;
    	bottom:0;
    	background: #fcfcfc ;
    	opacity: 0.8;
    	z-index:5;
    	&.cover{
    		display: block;
    	}
    }
    .side-bar{
    	position:fixed;
    	left:-10.0rem;
    	right:0;
    	top:0;
    	bottom:0;
    	width:10.0rem;
    	color:#fff;
    	background: #444;
    	transition:all .5s ease;
    	z-index:6;
    	&.show{
    		transform: translateX(200px);
    	}
    	ul li{
    		padding:0.8rem 0.75rem;
    		margin-bottom:0.05rem;
    		opacity: 0.9;
    		border-bottom:1px solid #666;
    		box-shadow: 0 1px 0 #333;
    		a{
    			color:#fff;
    		}
    	}
    	.user-name{
    		margin-top:0.5rem;
    		padding:1rem 0.75rem;
    		border-bottom:1px solid #666;
    		box-shadow: 0 1px 0 #333;
    	}
    }
	header{
		position:fixed;
		width:100%;
		min-height:4.0rem;
		background:#444;
		padding:0.25rem 0.5rem;
		text-align:center;
		.logo{
			line-height: 1.7rem;
			height:1.7rem;
			img{
			    width:6.0rem; 
			    vertical-align: middle;
			}
		}
		.search-bar{
			margin-top: 0.5rem;
			.search{
			width:55%;		
			border-radius:0.6rem;
			border:1px solid #fff;
			padding:0.2rem 0.75rem;
		   }
		}
		// .subNav ul {
		// 	margin-top: 0.5rem;
		// 	display:flex;
		// 	justify-content: center;
		// 	font-size:14px;
		// 	li{
		// 		margin-left:0.5rem;
		// 	    padding:0.25rem 0.25rem;
		// 	    a{
		// 	    	color:#ccc;
		// 	    }
		// 	}
		// }

	}
</style>
