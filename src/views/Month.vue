<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list :data="monthData" />
    </div>
  </div>
</template>

<script>
import getData from '../http/index.js'

import CardList from  '@/components/MonthPage'
import ErrorTip from '../components/ErrorTip/index'

import { getNowDate }from '@/utils/tabUtils'
import { onMounted,computed} from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
      CardList,
      ErrorTip
    },
    setup(){
      let store = useStore(),
          state = store.state;
      onMounted(()=>{
         getData(store, 'month', getNowDate('month'))
      })
      return {
          monthData: computed(()=>state.monthData),
          errorCode: computed(() => state.errorCode)
      }
    }
}
</script>

<style>

</style>