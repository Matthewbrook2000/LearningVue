<template>
  <div class="ConterApp">
      <p> {{ count }} </p>
    <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CounterApp',

    computed: {
        count: function() {
           return this.$store.state.count    //for getting reactive variables
        }
    },
    methods: {
        increment () {
            this.$store.commit('incrementCount')
        },
        decrement () {
            this.$store.commit('decrementCount')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>