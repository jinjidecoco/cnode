<template>
	<div class='header'>
		<a href="" class='logo'>
			<img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
		</a>
		<div class='search-bar'>
			<input type="text" placeholder="搜索" class='search'>
		</div>
		<div class='subNav'>
		    <ul >
				   <li v-for='tab in tabs'>
				   	<router-link  :to="{}">
				   	 {{tab.title}}
				   	</router-link>
				   </li>
		   </ul>
		</div>

	</div>
</template>
<script>
	export default{
	   name:'headBar',
	   data(){
		   	return{
		   	    tabs:[
			   	  {title:'首页'},
			   	  {title:'新手入门'},
			   	  {title:'APi'},
			   	  {title:'关于'},
			   	  {title:'注册'},
			   	  {title:'登录'}
		   	    ]	
		   	}
	    }
    }
</script>
<style lang='less'>
	.header{
		min-height:6.8rem;
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
			margin-top: 0.8rem;
			.search{
			width:55%;		
			border-radius:0.6rem;
			border:1px solid #fff;
			padding:0.2rem 0.75rem;
		   }
		}
		.subNav ul {
			margin-top: 0.5rem;
			display:flex;
			justify-content: center;
			font-size:14px;
			li{
				margin-left:0.5rem;
			    padding:0.25rem 0.25rem;
			    a{
			    	color:#ccc;
			    }
			}
		}

	}
</style>
