<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav';
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex';

export default {
    components: { 
      TypeNav ,
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    computed:{
      ...mapState([])
    }
}
</script>

<style>

</style>