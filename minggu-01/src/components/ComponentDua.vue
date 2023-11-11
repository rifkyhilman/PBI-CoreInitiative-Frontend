<template>
    <div class="container1">
        <h1>ini adalah Component Dua Child</h1>
        <h2>Saya bernama {{ Nama }} </h2>
    </div>
</template>

<script>
export default {
    name: "ComponentDua",
    props: {
        Nama: String,
    },
    methods: {
        searchImg() {
            console.log("masuk fungsi ini !")
        }
    }
}
</script>

<style scoped>
    .container1 {
        background-color: red;
        color: white;
        padding: 100px;
    }
</style>
