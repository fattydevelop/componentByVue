<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <vheader logo-src={{logoSrc}} header-title={{headerTitle}} user-name={{userName}} user-identity={{userIdentity}}></vheader>
  <vleft></vleft>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        logoSrc:'http://www.easyicon.net/api/resizeApi.php?id=1126395&size=128',
        headerTitle:'vue&bootstrap',
        userName:'哈哈哈哈',
        userIdentity:'管理员',
        msg: 'Hello 中文!'
      }
    },
    components:{
        vheader:require('./components/v-header.vue'),
        vleft:require('./components/v-left.vue')
    }
  }
</script>