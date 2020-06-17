<template>
  <div class="IfStatement">
    <span v-if="seen">
          You can see this cause an if statement
    </span>
  </div>
</template>

<script>
export default {
  name: 'IfStatement',
  
  data: function(){
    return {
      seen: true,
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