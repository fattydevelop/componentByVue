<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <vheader></vheader>
  <h1 class="red">{{msg}}</h1>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello 中文!'
      }
    },
    components:{
        vheader:require('./components/v-header.vue')
    }
  }
</script>