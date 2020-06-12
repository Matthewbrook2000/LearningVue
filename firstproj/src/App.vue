<template>
  <div id="main">
    <Nav />
    <a>Type your name: </a>
    <input type="text" v-model="name"/>
    <h1>hello {{ name }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  data: function(){
    return {
      name: ''
    }
  },
  components: {
    Nav,
    HelloWorld
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>