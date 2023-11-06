<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ComponentSatu />
  <ComponentDua />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentSatu from './components/ComponentSatu.vue';
import ComponentDua from './components/ComponentDua.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ComponentSatu,
    ComponentDua
}
}

console.log(HelloWorld.props);
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
