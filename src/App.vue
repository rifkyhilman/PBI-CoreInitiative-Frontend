<template>
  <div id="app">
   <LearnSlot>
      <LearnProps :title="titles" />
    </LearnSlot>
  </div>
</template>

<script>
import LearnProps from './components/week-01/LearnProps.vue';
import LearnSlot from './components/week-01/LearnSlot.vue';



export default {
  name: 'App',
  components: {
    LearnSlot,
    LearnProps
},
  data() {
    return {
      titles: ["Week - 01", "Week - 02"],
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

</style>
