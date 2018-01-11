<template>
	<div class="child01">
		<h1>{{msg}}</h1>
		<h2>this is child01</h2>
		<h3>{{this.$route.params.aa}}</h3>
		<h4>this is gg :{{gg}}</h4>
		<div v-html="dex"></div>
	</div>
</template>

<script>
	
	export default{
		name:"Child01",
		data(){
			return{
				msg:"this is child01",
				gg:"",
				dex:''
			}
		},
		methods: {
			loadData() {
				console.log(this.$route.params.aa);
				this.gg = this.$route.params.aa;
			},
			getData(){
				console.log('66666')
				// this.$http.get('https://mpe.hanyu020.com/Api/Chat/getGroupMembers',{
				// 	params:{
				// 		key:'1eb3681197eb8d62e7757c52239d8779',
				// 		pro_id:100007,
				// 		store:1,
				// 		group_id:36282022559745,
				// 		sex:''
				// 	}
				// }).then(function(res){
				// 	console.log(res)
				// })
				this.$http.get('https://cn.vuejs.org/')
					.then((response)=>{
						console.log(response);
						this.dex = response;
					})
					.catch(function(err){
						console.log(err);
					})
			}
		},
		created() {
			this.loadData();
			this.getData();
		}
	}
</script>

<style>
</style>