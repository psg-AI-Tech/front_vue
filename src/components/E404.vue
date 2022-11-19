<template>
  <div class="unkownPage"></div>
</template>

<script>
export default {
  name: 'E404',
  data () {
    return {
      msg: 'e404'
    }
  }
}
</script>

<style scoped >
.unkownPage {
  width: 100%;
  height: 100%;
  background: url('../assets/img/404.jpg');
  /* background: url("../../assets/img/404.jpg"); */
  background-size: cover;
}
</style>
