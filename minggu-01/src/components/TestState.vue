<template>
    <h1>{{ store.message }}</h1>
</template>

<script>
import store from '../store';

export default { 
    data() {
        return {
            store
        }
    }
}
</script>