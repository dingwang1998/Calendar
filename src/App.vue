<template>
  <div id="app">
    <my-header>{{HeaderTitle}}</my-header>
    <search-input
      :placeholder="placeholder"
      :maxlength ="maxlength"
    ></search-input>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab></tab>
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import Tab from '@/components/Tab'
import SearchInput from '@/components/SearchInput'

import { computed, watch } from 'vue'
import { useStore } from 'vuex';
import { useRouter} from 'vue-router'

export default {
  components:{
    MyHeader,
    Tab,
    SearchInput
  },
  setup (){
      const store = useStore(),
            state = store.state,
            router = useRouter();
      router.push('/')
      watch(()=>{
          return router.currentRoute.value.name
      },(value)=>{
         store.commit('setHeaderTitle', value);
         store.commit('setField',value);
      })

      return computed(()=>state).value
  }
}
</script>

