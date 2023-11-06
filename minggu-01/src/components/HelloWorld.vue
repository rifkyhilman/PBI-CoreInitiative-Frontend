<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="testing">
      <h2>{{ title }}</h2>
      <li v-for="food in foods" v-bind:key="food">
        {{ food }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      title: "ini adalah Dynamic data !",
      foods: ["bakso", "ketoprak", "sate padang", "ayam geprek"]
    };
  },
};
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

.testing {
  background-color: black;
  color: white;
  padding: 100px;
}
</style>
