<template>
  <div class="home">
    <div class="welcome">欢迎访问胖胖的书架</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      scroll: null
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    height: 100%;
    width: 100%;
    .welcome {
      text-align: center;
      font-family: "Microsoft YaHei", sans-serif;
      font-size: 24px;
      font-weight: bold;
      padding: 10px 0;
    }
  }
</style>
