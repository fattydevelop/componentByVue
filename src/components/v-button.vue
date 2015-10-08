<style>

</style>

<template>
      <button type="button" class="btn btn-primary">{{type}}</button>
      </ul>
</template>

<script>
    module.exports = {
        data:function(){
            return {
                isGroup:true,
                type:'success',
                text:'Success'
            }
        }
    }
</script>