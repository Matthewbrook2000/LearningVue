<template>
  <div class="RevMessage">
    <div id="revmsg">
      <input type="text" v-model="revMessage"/>
      <p>{{ revMessage }}</p>
      <button v-on:click="reverseMsg">Reverse Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevMessage',
  
  data: function(){
    return {
      revMessage: ' ',
    }
  },
  methods: {
    reverseMsg: function () {
      this.revMessage = this.revMessage.split('').reverse().join('')
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