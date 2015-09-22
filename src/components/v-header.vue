
<style lang="less">
@import '../main.less';
  .header {
    color: @headerColor;
    width:100%;
    min-width:720px;
    background-color: @headerBgColor;
    height: 100px;
    .logo{
      position:absolute;
      width:50%;
      height:100px;
      left:50px;
      line-height:100px;
      background-color:@logoBgColor;
      img{
        float:left;
        height:80px;
        margin-top:10px;
        padding-right:10px;
      }
      .titleText{
        float:left;
        font-size:22px;
      }
    }
    .userInfo{
      position:absolute;
      right:30px;
      top:65px;
    }
  }
</style>

<template>
  <div class="header">
    <div class="logo">
      <img v-attr="src:logoSrc"/>
      <div class="titleText">{{headerTitle}}</div>
    </div>

    <div class="userInfo">
      <div>{{userName}}</div>
      <div>{{userIdentity}}</div>
    </div>
  </div>

</template>

<script>
  module.exports = {
    data: function () {
      return {

      }
    },
    props:['logoSrc','headerTitle','userName','userIdentity']
  }
</script>