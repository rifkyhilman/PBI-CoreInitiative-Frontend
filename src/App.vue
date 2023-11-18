<template>
  <div id="app">
    <Week01>
      <div class="title">
        <h1>{{ title[0] }}</h1>
      </div>

      <div class="propss-container">
        <div v-for="paragraf in paragrafs" :key="paragraf.title" class="porpss-blog">
          <h2>{{ paragraf.title }}</h2>
          <p>{{ paragraf.content }}</p>
        </div>
      </div>
    </Week01>
  </div>
</template>

<script>
import Week01 from './components/Week-01.vue';


export default {
  name: 'App',
  components: {
    Week01
  },
  data() {
    return {
      title: ["Week - 01", "Week - 02"],
      paragrafs : [
        {
          title: "Paragraf 01",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        },
        {
          title: "Paragraf 02",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        },
        {
          title: "Paragraf 03",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        },
      ]
    }
  }
}

</script>

<style>

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .title {
    text-align: center;
  }

  .propss-container {
    margin-top: 50px;
    background-color: black;
    color: white;
    padding: 20px;
  }

</style>
