<template>
  <div class="container">
    <header>
      <h1>Header</h1>
    </header>
    <slot />
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LearnSlot"
}
</script>


<style scoped>
  header {
      margin-bottom: 50px;
      padding: 30px;
      color: white;
      background-color: black;
  }

  footer {
      margin-top: 50px;
      padding: 30px;
      color: white;
      background-color: black;
  }
</style>
