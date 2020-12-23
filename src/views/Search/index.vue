<template>
  <div>
    <p>Search</p>
    <p>{{keyword}}</p>
    <p>{{keyword2}}</p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword','keyword2']
}
</script>

<style lang="less" scoped>

</style>
