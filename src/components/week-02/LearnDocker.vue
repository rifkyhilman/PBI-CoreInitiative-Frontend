<template>
    <div class="container">
        <div class="title">
            <h1>{{ title[1] }}</h1>
        </div>

        <div class="docker-container">
            <h1>Docker</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "LearnDocker",
    props: {
        title: Array
    }
}
</script>

<style scoped>
 
 .docker-container {
    margin-top: 50px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 50px;
 }

</style>