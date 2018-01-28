<template>
  <div>
    <div id="body_left">
      <div>
        <div class="title">主页 / </div>
        <div class="inp">
          <div>
            <input type="text" placeholder="accessToken账号" v-model="strName" />
          </div>
          <a @click="load()">登陆</a>
        </div>
      </div>
    </div>
    <div id="body_right">
      <app-temp titleTex="关于" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
    </div>
  </div>
</template>

<script>
import appTemp from './child/temple'
export default {
  name: 'signin',
  components: {
    appTemp
  },
  data () {
    return {
      strName: null,
      tleList: [
        {name: 'CNode：Node.js专业中文社区'},
        {name: '在这里你可以:'},
        {name: '· 向别人提出你遇到的问题'},
        {name: '      · 帮助遇到问题的人'},
        {name: '      · 分享自己的知识'},
        {name: '      · 和其它人一起进步'}
      ]
    }
  },
  methods: {
    load () {
      if (this.strName === null) {
        alert('文本框不能为空')
      } else {
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7'
          // '29f4c9a1-2b49-4ec0-b5fc-2abfb4f3635f'
        }).then(function (res) {
          console.log(res.data.loginname)
          if (res) {
            this.$emit('Ioot', res.data.loginname)
            this.$router.push({path: '/', query: {name: res.data.loginname}})
          } else {
            alert('accesstoken不正确')
          }
        }.bind(this))
      }
      // this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped lang="scss">
  .inp{
    width: 100%;
    div{
      width: 70%;
      height: 60px;
      margin: 50px auto;
      input{
        width: 100%;
        height: 60px;
        border: 1px solid #ccc;
      }
    }
    a{
      display: block;
      background: #5BC0DE;
      border: none;
      line-height: 50px;
      text-align: center;
      width: 150px;
      color: #fff;
      margin: 10px auto;
    }
  }
</style>
