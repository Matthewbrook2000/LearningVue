<template>
  <div id="main">
    <Nav />  <!--Uses a component-->
    <a>Type your name: </a>
    <input type="text" v-model="name"/>
    <h1>hello {{ name + ' youre looking great'}}</h1> <!--moustaches can contain javascript which is cool-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--App 1, hover over text-->
    <div id="hover">
      <span v-bind:title="message">
        Hover your mouse here
      </span>
    </div>
    <!--App 2, if statement-->
    <div id="ifstatement">
        <span v-if="seen">
          You can see this cause an if statement
        </span>
    </div>
    <!--App 3, printing an array using for loop-->
    <div id="todo">
      <ol>
        <li v-for="todo in todos" v-bind:key="todo">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <!--App  4, reverse a message-->
    <div id="revmsg">
      <p>{{ revMessage }}</p>
      <button v-on:click="reverseMsg">Reverse Message</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  data: function(){
    return {
      name: '',
      message: 'Thanks for hovering',
      revMessage: 'Watch me flip',
      seen: true,
      todos: [
        { text: 'finish this vue app' },
        { text: 'Make a cool website' }
      ]
    }
  },
  methods: {
    reverseMsg: function () {
      this.revMessage = this.revMessage.split('').reverse().join('')
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