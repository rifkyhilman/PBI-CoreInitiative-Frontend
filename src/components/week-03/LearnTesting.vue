<template>
    <div class="container">
        <h1>Counter : </h1>
        <span data-test="number">{{ number }}</span>
        <button data-test="add_number" @click="addNumber">Add</button>
        <button data-test="substract_number" @click="substractNumber">Substract</button>
        <button data-test="reset_number" @click="resetNumber">Reset</button>
    </div>
</template>

<script>
export default {
    name: "LearnTesting",
    data() {
        return{
            number : 0
        }
    },
    methods: {
        addNumber(){
            this.number ++
        },
        substractNumber(){
            this.number --
        },
        resetNumber(){
            this.number = 0
        }
    }
}
</script>

<style>

</style>