import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state ={
	count:20
}

// mutation 必须同步执行
const mutations={
	add(state,n){
		state.count +=n
	},
	reduce(state,obj){
		state.count -=obj.a
	}
}

const getters ={
	count(){
		state.count +=50
	}
}

const actions ={
	addNew(context){
		context.commit('add',20)
		setTimeout(()=>{
			context.commit('reduce',{a:20})
		},3000)
		console.log('我是同步的')
	},
 //    increase(context){
	// 	context.commit('reduce',{a:2})
	// },
	increase({commit}){
		commit('reduce',{a:1})
	}
}

export default new Vuex.Store({
   state,
   mutations,
   getters,
   actions
})