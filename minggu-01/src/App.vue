<template>
  <ComponentEmpat>
    <img alt="Vue logo" src="./assets/logo.png">
    <TestState />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComponentSatu :Namas = daftars />
    <h1>{{ person }}</h1>
    <componentTiga @sendDataFromChild="getDataFromChild" />
  </ComponentEmpat>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentSatu from './components/ComponentSatu.vue';
import ComponentTiga from './components/ComponentTiga.vue';
import ComponentEmpat from './components/ComponentEmpat.vue';
import TestState from './components/TestState.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ComponentSatu,
    ComponentTiga,
    ComponentEmpat,
    TestState
}, 
  data() {
    return {
      daftars : [
        {id: 1, title: "masuk pak eko"},
        {id: 2, title: "masuk pak Jawir"},
        {id: 3, title: "masuk pak Sumantoo"}
      ],
      person: "Name"
    }
  },
  methods: {
    getDataFromChild(data) {
      this.person = data
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
