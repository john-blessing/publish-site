<template>
  <div class="hello">
    <aside>
      <div><router-link to="">企业介绍</router-link></div>
      <div><router-link to="">企业概况</router-link></div>
      <div><router-link to="">企业文化</router-link></div>
    </aside>
    <router-view></router-view>
    123
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // 在这里进行请求得到数据并付给msg， vue会自然把数据显示出来

    // api.post('api/get_list').then(res => {
    //   this.msg = res.data.msg;
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    aside{
        display: inline-block;
        margin-left: -220px;
    }

</style>
