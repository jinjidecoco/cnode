<template>
	<div class='load-container'>
		<div class="loading"></div>
	</div>
</template>
<script>
	export default{
		name:'loading',
		data(){
			return{

			}
		}
	}
</script>
<style lang='less'>
 .load-container{
 	// display:flex;
  //   align-items:center;
  //   justify-content:center;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-40px;
    margin-top: -40px;
 	width:80px;
 	height:80px;
 	.loading{
 		width:30px;
 		height:30px;
 		border:5px solid #f3f3f3;
 		border-top:5px solid #0dc5c1;
 		border-radius: 50%;
 		animation: loading 1.2s infinite linear;
 	}
 	@keyframes loading {
 		from {transform: rotate(0deg);}
 		to{transform: rotate(360deg);}
 	}
 }
	
</style>