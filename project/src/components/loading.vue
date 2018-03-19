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
    margin-left:-2.0rem;
    margin-top: -2.0rem;
 	width:4.0rem;
 	height:4.0rem;
 	.loading{
 		margin:0.75rem auto;
 		width:1.5rem;
 		height:1.5rem;
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