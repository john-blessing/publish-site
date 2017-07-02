<template>
  <div class="hello">
    <header>
      <router-link to={"/home"}>首页</router-link>
      <router-link to={"/about"}>关于我们</router-link>
      <router-link to={"/contact"}>联系我们</router-link>
    </header>
    <router-view></router-view>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
