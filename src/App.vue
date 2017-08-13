<template>
  <div id="app">
    <transition name = 'fade'>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  @import "./assets/css/page.css";
  @import "./assets/css/style.css";
  @import "./assets/css/index.css";

  .fade-enter, .fade-leave-active{
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
