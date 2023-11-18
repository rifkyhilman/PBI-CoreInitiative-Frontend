<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="book in myBooks" :key="book.title">
          <h1> {{ book.title }} </h1>
          <p> {{ book.author }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      myBooks: [
        {
          title  : "Makan Malam",
          author : "Rifki"
        },
        {
          title  : "Makan Siang",
          author : "Hilman"
        },
        {
          title  : "Makan Pagi",
          author : "Bestrad"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
