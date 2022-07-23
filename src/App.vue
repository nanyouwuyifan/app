<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
        return{
            isShow: true
        }
    },
  components: {
   Header,
   Footer
  },
   mounted() {
    //App的根组件挂载完毕,发一次请求即可.
    this.$store.dispatch("getCategory");
  },
  methods: {
  
  }
}
</script>

<style>
#app {

}
</style>
