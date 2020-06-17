<template>
  <div id="main">
      <Nav />  <!--Uses a component-->
      <div id="contents">
      <HelloWorld v-if="currentPage=='main'"/>
      <!--App 1, hover over text-->
      <HoverText v-if="currentPage=='hoverText'" />
      <!--App 2, if statement-->
      <IfStatement v-if="currentPage=='ifStatement'"/>
      <!--App 3, printing an array using for loop-->
      <PrintArray v-if="currentPage=='printArray'"/>
      <!--App  4, reverse a message-->
      <ReverseMessage v-if="currentPage=='revMessage'"/>
      <!--App 5 counter app-->
      <counterapp v-if="currentPage=='counterApp'"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import HoverText from './components/HoverText.vue'
import PrintArray from './components/PrintArray.vue'
import IfStatement from './components/IfStatement.vue'
import ReverseMessage from './components/ReverseMessage.vue'
import counterapp from './components/counterapp.vue'

export default {
  name: 'App',
  data: function(){
    return {
      name1: '',
    }
  },
  computed: {
    currentPage(){ 
      return this.$store.state.currentPage
    }
  },
  components: {
    Nav,
    HelloWorld,
    HoverText,
    PrintArray,
    IfStatement,
    ReverseMessage,
    counterapp
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
}
#contents {
  padding: 5%;
}
</style>