<template>
  <div class="hello">
    <a>Type your name: </a>
    <input type="text" v-model="name1"/>
    <h1>hello {{ name1 + ' youre looking great'}}</h1> <!--moustaches can contain javascript which is cool-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      name1: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
