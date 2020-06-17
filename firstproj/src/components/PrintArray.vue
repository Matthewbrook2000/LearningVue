<template>
  <div class="print">
    <input type="text" v-model="addList"/>
    <button v-on:click="addRow">Add item</button>
    <h2>hello {{ addList }}</h2>
    <ol>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PrintArray',
  
  data: function(){
    return {
      addList: '',
      todos: [
        { id: 1 , text: 'finish this vue app' },
        { id: 2 , text: 'Make a cool website' }
      ]
    }
  },
  methods: {
      addRow(){
          this.todos.push({id: 3 , text: this.addList});
      }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>