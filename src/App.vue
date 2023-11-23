<template>
  <div id="app">
    <LearnSlot>
      <LearnProps :title="titles" />
      <LearnDocker :title="titles"/>
      <LearnTesting />
    </LearnSlot>
  </div>
</template>

<script>
import LearnProps from './components/week-01/LearnProps.vue';
import LearnSlot from './components/week-01/LearnSlot.vue';
import LearnDocker from './components/week-02/LearnDocker.vue';
import LearnTesting from './components/week-03/LearnTesting.vue';

export default {
  name: 'App',
  components: {
    LearnSlot,
    LearnProps,
    LearnDocker,
    LearnTesting
},
  data() {
    return {
      titles: ["Minggu - 01", "Minggu - 02"],
    }
  }
}

</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .title {
    text-align: center;
  }
</style>