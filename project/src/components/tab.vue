<template>
	<div class='tab'>
		<ul>
			<li v-for="(tab,index) in tabs" @click='change(index)'
			:class="{active:cur==index}" >
			<!-- 	<router-link :to="{path:'/home/?tab='+ tab.prop}">
					{{tab.name}}
				</router-link> -->
				<router-link :to="{name:'home',query:{tab:tab.prop}}">
					{{tab.name}}
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'tab',
		data(){
			return {
				 cur:0,
				 tabs:[
				 {name:'全部',prop:'all' },
				 {name:'精华',prop:'good'},
				 {name:'分享',prop:'share'},
				 {name:'问答',prop:'ask'},
				 {name:'招聘',prop:'job'}
				]
			}
		},
		methods:{
			change:function(index){
                this.cur=index;
				// this.$emit('change',this.cur =index)
				// console.log(index);
			}
		}

	}
</script>
<style lang='less'>
  .tab {
  	position:fixed;
  	top:4.5rem;
  	width:100%;
  	// margin-top:0.5rem;
  	background: #f6f6f6;
  	ul{
  	   display:flex;
  	   justify-content: center;
  	   align-items: center;
  	   padding:0.5rem 0;
  	   li{
  		padding:0 0.15rem;
  		margin:0 0.5rem;
  			&.active{
  				border:1px solid #80bd01;
  		        border-radius:3px;
  				background:#80bd01;
  				a{
                 color:#fff;
  				}
  			}
  		   a{
  			 font-size:18px;
  			 color:#80bd01;
  		    }
  	   }
  	}
  }
	
</style>