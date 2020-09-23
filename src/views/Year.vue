<template>
  <div class="container">
        <div v-if="!errorCode">
          <card-list :data="yearData" />
        </div>
  </div>
</template>

<script>
import getData from '../http/index.js'
import CardList from  '../components/YearPage/index'
import { getNowDate }from '@/utils/tabUtils'
import { onMounted, computed} from 'vue'

import { useStore } from 'vuex'
export default {
  components:{
    CardList
  },
  setup(){
    let store = useStore(),
        state = store.state;
    
    onMounted(()=>{
      getData(store, 'year', getNowDate('year'))
    })
    return {
      yearData: computed(()=>state.yearData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style>

</style>