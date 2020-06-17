<template>
  <div id="navbar">
      <ul class="flex-container">
        <li><button type="button" v-on:click = "changePage('main')">Home</button></li>  
        <li><button type="button" v-on:click = "changePage('hoverText')">Hover</button></li>   
        <li><button type="button" v-on:click = "changePage('counterApp')">Counter</button></li>
        <li><button type="button" v-on:click = "changePage('revMessage')">Reverse</button></li>
        <li><button type="button" v-on:click = "changePage('printArray')">Print array</button></li>
        <li><button type="button" v-on:click = "changePage('ifStatement')">If statement</button></li>
       </ul>
       <!-- <span @mouseover = "hover = true" @mouseleave = " hover = false"> -->
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    changePage(data){
      this.$store.commit('changeCurrentPage', data);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-container {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  justify-content: center;
}

li {
  float: left;
}

li button {
  display: block;
  padding: 10px 10px;
  margin: 10px;
  text-align: center;
  background-color: white; 
  text-decoration: none;
  color: black;
  border-width: 0px 0px 1px 0px;
}

li button:hover {
  font-size: 15px;
  color: red;
  border-color: red;
}
</style>
