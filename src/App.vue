<template>
  <div id="app">
    <LearnSlot>
      <LearnProps :title="titles" />
      <LearnDocker :title="titles"/>
    </LearnSlot>
  </div>
</template>

<script>
import LearnProps from './components/week-01/LearnProps.vue';
import LearnSlot from './components/week-01/LearnSlot.vue';
import LearnDocker from './components/week-02/LearnDocker.vue';

export default {
  name: 'App',
  components: {
    LearnSlot,
    LearnProps,
    LearnDocker
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
    margin: 0;
    padding: 0;
  }

  .title {
    text-align: center;
  }
</style>