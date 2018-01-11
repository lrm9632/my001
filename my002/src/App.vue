<template>
  <div id="app">
    <div class="navTitle">this is navigation title</div>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div class="footerBar">
      <router-link class="rou" :to="{ name:'child01', params: {aa: 123} }">
        <div class="roul">Go to Child01</div>
      </router-link>
      <router-link class="rou" :to="{ name:'HelloWorld', params: {aa: 123} }">
        <div class="roul">Go to HelloWorld</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,div{margin:0; padding:0;}  
.navTitle{height:50px; background:#344d66; color:#fff; display:flex; align-items:center; justify-content:center;}
.footerBar{height:50px; width:100%; position:fixed; bottom:0; background:#2c3e50; color:#fff;display:flex; align-items:center; justify-content:center;}
.roul{width:50vw; float:left; background:#494b4d; color:#fff;}
</style>
