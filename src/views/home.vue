<template>
  <div>2xxx{{ userInfo }}</div>
</template>

<script lang="ts">
// import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup: () => {
    const store = useStore();
    return { userInfo: store.state.userInfo };
  }
};
</script>

<style></style>
