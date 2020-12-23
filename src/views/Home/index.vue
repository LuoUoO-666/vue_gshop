<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Rank></Rank>
      <TodayRecommend></TodayRecommend>
      <Like></Like>
      <Floor></Floor>
      <Floor></Floor>
      <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TypeNav from '@/components/TyoeNav'
import Rank from './Rank'
import TodayRecommend from './TodayRecommend'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'


export default {
  name: "Home",
  components:{
      TypeNav,
      ListContainer,
      Rank,
      TodayRecommend,
      Like,
      Floor,
      Brand
  }
};
</script>

<style lang="less" scoped>

</style>
