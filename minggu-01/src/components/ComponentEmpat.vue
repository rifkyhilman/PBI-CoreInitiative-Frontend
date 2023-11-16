<template>
    <header>
      <h1>Header</h1>
    </header>
    <slot />
    <footer>
       <h1>footer</h1>
    </footer>
</template>

<script>
export default {
   name: "ComponentEmpat" 
}
</script>

<style>
    header {
        margin: 0;
        padding: 30px;
        color: white;
        background-color: black;
    }

    footer {
        margin: 0;
        padding: 30px;
        color: white;
        background-color: black;
    }
</style>