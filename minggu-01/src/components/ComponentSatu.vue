<template>
    <div class="container">
        <h1>ini adalah Component satu Parrent</h1>
        <ComponentDua :Nama="Nama"/>
        <div v-for="Nama in Namas" :key="Nama.id">
            <h1>{{ Nama.title }}</h1>
        </div>
    </div>
</template>

<script>
import ComponentDua from './ComponentDua.vue';

export default {
    name: "ComponentSatu",
    components: {
        ComponentDua,
    },
    data() {
        return {
            Nama : "Rifki"
        }
    },
    props: {
        Namas: Array
    }
}
</script>

<style scoped>
    .container {
        background-color: green;
        color: white;
        padding: 100px;
    }
</style>
