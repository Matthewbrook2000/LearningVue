<template>
  <div class="hover">
    <span v-bind:title="message">
        Hover your mouse here
    </span> 
  </div>
</template>

<script>
export default {
  name: 'HoverText',
  
  data: function(){
    return {
      message: 'Thanks for hovering',
    }
  }
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
a {
  color: #42b983;
}
</style>
