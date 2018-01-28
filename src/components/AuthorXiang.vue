<template>
  <div class="hello">
    <div id="body_left">
      <div>
        <div class="title">主页\</div>
        <div class="bbody">
          <div class="apheader">
            <img :src="img" alt=""/><span>{{aname}}</span>
          </div>
          <div class="jj">积分:{{jifen}}</div>
          <p class="jj"><router-link :to="{path: '/',query:{name: aname}}">不知道有几个话题</router-link></p>
          <p class="jj">创建时间: {{create |filDate }}</p>
        </div>
      </div>
      <div id="buzhidao">
        <div class="title">最近创建的话题</div>
        <app-child1 :appDate="arr"></app-child1>
      </div>
      <div id="buzhidao2">
        <div class="title">最近参与的话题</div>
        <app-child1 :appDate="att"></app-child1>
      </div>
    </div>
    <!--右边-->
    <div id="body_right">
      <app-author :appImg="img" :appTex="jifen" :aName="aname"></app-author>
      <app-inform></app-inform>
      <app-temp titleTex="无人回复的话题" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
      <app-temp titleTex="积分榜   TOP 100 >>" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
      <app-temp titleTex="友情社区" :tleList="tleList" :Text="false" :Text2="true"></app-temp>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import appChild1 from '@/components/child/child1'
import appInform from '@/components/child/Inform'
import appMyload from '@/components/child/myLoad'
import appTemp from '@/components/child/temple'
import appAuthor from '@/components/child/Author'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: null,
      img: null,
      jifen: null,
      aname: null,
      att: null,
      arr: null,
      create: null,
      tleList: [
        {name: '这里没有接口1', img: '/static/img/ruby-china-20150529.39dbc92.png'},
        {name: '这里没有接口2', img: '/static/img/golangtc-logo.9beb6e8.png'},
        {name: '这里没有接口3', img: '/static/img/phphub-logo.684020e.png'},
        {name: '这里没有接口4', img: '/static/img/FjLUc7IJ2--DqS706etPQ1EGajxK.c9233ae.png'}
      ]
    }
  },
  // 实例化
  components: {
    appChild1,
    appInform,
    appMyload,
    appTemp,
    appAuthor
  },
  created () {
    axios.get('https://cnodejs.org/api/v1/user/' + this.$route.query.id + '').then(function (res) {
      this.img = res.data.data.avatar_url
      this.jifen = res.data.data.score
      this.aname = res.data.data.loginname
      this.att = res.data.data.recent_replies
      this.arr = res.data.data.recent_topics
      this.create = res.data.data.create_at
      console.log(res.data.data)
    }.bind(this))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   /*主页那一块*/
  .bbody{
    width: 98%;
    margin: 0 auto;
  }
  .apheader{
    display: flex;
    align-items: center;
    img{
      width: 50px;
      height: 50px;
    }
    span{
      font-size: 14px;
      color: #333;
      margin-left: 10px;
    }
  }
  .jj{
    font-size: 14px;
    text-indent: 0.5em;
    margin-top: 8px;
    color: #909090;
  }
  #buzhidao,#buzhidao2{
    margin-top: 15px;
  }
</style>
