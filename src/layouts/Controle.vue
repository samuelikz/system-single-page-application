<template>
  <q-layout view="hHh Lpr fFf" class="flex flex-center"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutControle',

  data () {
    return {}
  }
}
</script>

<style lang="stylus">
  .q-layout{
    background: url(https://source.unsplash.com/1600x900/?nature,water);
    width: 100vw;
    height 100vh;
  }
</style>
