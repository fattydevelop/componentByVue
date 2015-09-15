<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <h1 class="red">{{msg}}</h1>
   <a v-link="{ path: '/foo' }">Go to Foo</a>

</template>
<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello worrrrrld!'
      }
    }
  }
</script>