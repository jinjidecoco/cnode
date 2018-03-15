<template>
	<div class='demo'>
 <!--    <mt-button type="primary" @click.native='add'>+</mt-button>
    <mt-button type="primary" @click.native='reduce'>-</mt-button> -->

		<p style='font-size:30px'>
			{{count}} 
		</p>
		<p>
			{{$store.state.count}}
		</p>

    <mt-button type="primary" @click.native="add(5)">+</mt-button>
    
       <!-- 两种不同的调用方式 -->
    <mt-button type="primary" @click.native="$store.commit('reduce',{a:3})">-</mt-button> </br>


    <mt-button type="primary" @click.native="addNew">+</mt-button>

    <mt-button type="primary" @click.native="increase">-
    </mt-button>







	</div>
</template>
<script>
   import {mapState,mapMutations,mapGetters,mapActions} from 'Vuex';
	export default({
		name:'Demo',
		data(){
			return{
					// count:10
			}
		},
		// 方法一：
		// computed:{
		// 	count:function(){
		// 		console.log(this);
		// 		return this.$store.state.count+3
		// 	}
		// }

	    // computed:mapState({
	    // 	count:function(state){
	    // 		return state.count+3;
	    // 	}
	    // })
	    computed:{
	    	...mapState(["count"]),
	    	// ...mapGetters(["count"])
	    },

	    // methods:mapMutations(
	    // 	['add','reduce']
	    // )

	    methods:{
	    	...mapMutations(['add','reduce']),
	    	...mapActions(['addNew','increase'])
	    	// ...mapActions([])
	    }

		// methods:{
		// 	add(){
		// 		this.count++;
		// 	},
		// 	reduce(){
		// 		this.count--;
		// 	}
		// }
	})
</script>