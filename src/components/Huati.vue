<template>
  <div>
    <div id="body_left">
      <div class="title">主页</div>
      <div class="select">
        选择板块:
        <select>
          <option>请选择</option>
          <option>分享</option>
          <option>问答</option>
          <option>招聘</option>
          <option>客户端测试</option>
        </select>
      </div>
      <div class="text">
        <div>
          <input type="text" placeholder="标题字数10字以上" v-model="text1"/>
        </div>
      </div>
      <div class="area">
        <div class="areaA">这里有一堆东西……</div>
        <textarea  v-model="text2">
        </textarea>
      </div>
    </div>
    <div id="body_right">
      <app-temp titleTex="Markdown 语法参考" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
    </div>
    <div class="but">
      <button @click="fs">发送</button>
    </div>
  </div>
</template>
<script>
import appTemp from './child/temple'
export default {
  name: 'huati',
  data () {
    return {
      text1: null,
      text2: null,
      tleList: [
        {name: '### 单行的标题'},
        {name: '**粗体**'},
        {name: '`console.log(行内代码)`'},
        {name: '```js\n code \n``` 标记代码块'},
        {name: '![文字说明](图片链接)'},
        {name: 'Markdown 文档'}
      ]
    }
  },
  created () {
    if (this.$route.query.id) {
      this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$route.query.id + '').then((res) => {
        console.log(res.data.data.content)
        this.text1 = res.data.data.title
        let tex2 = res.data.data.content
        console.log(tex2)
        this.text2 = tex2.slice(72, tex2.length - 34)
      })
    } else {
      console.log(' 这是发布')
    }
  },
  methods: {
    fs () {
      if (this.$route.query.id) {
        this.$http.post('https://cnodejs.org/api/v1/topics/update', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
          // b5c65aea-d319-4c73-98f6-23ce06f76730
          topic_id: this.$route.query.id,
          title: this.text1,
          tab: 'dev',
          content: this.text2
        }).then((res) => {
          this.$router.push({path: '/huifu', query: {id: this.$route.query.id}})
        })
      } else {
        this.$http.post('https://cnodejs.org/api/v1/topics', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
          title: this.text1,
          tab: 'dev',
          content: this.text2
        }).then((res) => {
          console.log(res)
          this.$router.push({path: '/huifu', query: {id: res.data.topic_id}})
        })
      }
    }
  },
  components: {
    appTemp
  }
}
</script>

<style scoped lang="scss">
  .select,.text,.cart{
    width: 98%;
    margin: 10px auto;
  }
  .select{
    font-size: 14px;
    select{
      height: 30px;
      width: 200px;
      margin-left: 10px;
      border: 1px solid deepskyblue;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      outline: none;
    }
  }
  .text{
    div{
      input{
        text-indent: 1em;
        width: 100%;
        height: 30px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
      }
    }
  }
</style>
