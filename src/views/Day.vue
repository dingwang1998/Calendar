<template>
  <div class="container">
      <day-card
        :data = "dayData"
      ></day-card>
      <day-list
        :data = "dayData"
      ></day-list>
  </div>
</template>

<script>

import DayCard from '@/components/DayPage/Card'
import DayList from '@/components/DayPage/List'

import getData from '../http/index.js'
import { onMounted, computed} from 'vue'
import { useStore } from 'vuex'
import { getNowDate }from '@/utils/tabUtils'
export default {
    name:'DayPage',
    components:{
      DayCard,
      DayList
    },
    setup(){
      let store = useStore(),
          state = store.state;

      onMounted(() => {
        getData(store, 'day',getNowDate('day'));
      });
      return {
        dayData:computed(()=>state.dayData)
      }
    }
}
</script>

<style>

</style>