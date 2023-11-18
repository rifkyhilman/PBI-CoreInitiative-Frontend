<template>
  <div id="app">
    <NotificationPage />
  </div>
</template>

<script>
// import LearnProps from './components/week-01/LearnProps.vue';
// import LearnSlot from './components/week-01/LearnSlot.vue';
import NotificationPage from './components/week-02/NotificationPage.vue';

export default {
  name: 'App',
  components: {
    NotificationPage
  },
  data() {
    return {
      titles: ["Week - 01", "Week - 02"],
    }
  }
}

</script>
