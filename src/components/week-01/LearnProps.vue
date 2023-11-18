<template>
    <div class="container">
        <div class="title">
            <h1>{{ title[0] }}</h1>
        </div>

        <div class="propss-container">
            <div v-for="paragraf in paragrafs" :key="paragraf.title" class="porpss-blog">
                <h2>{{ paragraf.title }}</h2>
                <p>{{ paragraf.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LearnProps",
    data() {
        return {
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
    },
    props: {
        title : Array
    }
}
</script>

<style scoped>
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