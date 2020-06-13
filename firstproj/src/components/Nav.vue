<template>
  <div id="navbar">
      <ul>
        <li><a href="home" v-onclick="">Home</a></li>  
        <li><a href="app1">App 1</a></li>   
        <li><a href="app2">App 2</a></li>  
        <li><a href="app3">App 3</a></li>
        <li><a href="app4">App 4</a></li>    
       </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
}

li {
  display: inline;
  float: left;

}

li a {
  display: block;
  padding: 14px 16px;
  text-align: center;
  background-color: white; 
  text-decoration: none;
  color: black;
}

li a:hover {
  background-color: #f0f0f0;
}
</style>
