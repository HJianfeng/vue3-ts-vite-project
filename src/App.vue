<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {}
});
/*
第一步 npm init @vitejs/app 选择 vue， ts
第二步 安装 eslint prettierrc
第三步 安装 vuex 4.0.0 vue-router   yarn add vue-router@next vuex@next

*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
