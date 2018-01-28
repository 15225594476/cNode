<template>
  <div>
    <div id="body_left">
      <div id="top">
        <div class="top_header"><div class="meta">置顶</div><h2>{{title}}</h2></div>
        <ul class="top_ul">
          <li>发布于9天前</li>
          <li>作者:{{name}}</li>
          <li>{{visit}}次浏览</li>
          <li>来自</li>
        </ul>
        <app-but :dz="dian" @appBj="bbj" :appScang="this.$router.currentRoute.query.id" :appCollect="collet"></app-but>
      </div>
      <div id="body-2">
        <div v-html='att'></div>
      </div>
      <!-- 评论-->
      <div id="top_footer">
        <p></p>
        <div class="Reply">
          <p>{{length}}条留言</p>
          <app-ping :appTall="all"></app-ping>
          <app-ares @appPi="hff2"></app-ares>
        </div>
      </div>
    </div>
    <div id="body_right">
      <app-author :appImg="img" :appTex="jifen" :aName="aname"></app-author>
      <app-inform></app-inform>
    </div>
  </div>
</template>

<script>
import appAuthor from './Author'
import appInform from './Inform'
import appPing from './Pinglun'
import appAres from './textares'
import appBut from './but'
export default {
  name: 'child-xiang',
  data () {
    return {
      att: null,
      title: null,
      name: null,
      visit: null,
      length: null,
      all: null,
      img: null,
      jifen: null,
      aname: null,
      data: null,
      collet: null,
      dian: null
    }
  },
  components: {
    appAuthor,
    appInform,
    appPing,
    appAres,
    appBut
  },
  created () {
    this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$router.currentRoute.query.id + '', {
      params: {
        accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7'
      }
    }).then(function (res) {
      this.att = res.data.data.content
      this.title = res.data.data.title
      this.name = res.data.data.author.loginname
      this.visit = res.data.data.visit_count
      this.length = res.data.data.replies.length
      this.all = res.data.data.replies
      this.img = res.data.data.author.avatar_url
      this.aname = res.data.data.author.loginname
      this.collet = res.data.data.is_collect
      console.log(res)
      this.$http.get('https://cnodejs.org/api/v1/user/' + res.data.data.author.loginname + '').then(function (res) {
        this.jifen = res.data.data.score
        console.log(res.data.data)
      }.bind(this))
    }.bind(this))
  },
  methods: {
    // 头部回复
    hff2 (val) {
      console.log(this.$route.query.id)
      this.$http.post('https://cnodejs.org/api/v1/topic/' + this.$route.query.id + '/replies', {
        accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
        content: val
      }).then((res) => {
        this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$router.currentRoute.query.id + '').then(function (res) {
          this.all = res.data.data.replies
        }.bind(this))
      })
    },
    // 编辑
    bbj () {
      console.log(this.title)
      this.$http.post('https://cnodejs.org/api/v1/topics/update', {
        accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
        // b5c65aea-d319-4c73-98f6-23ce06f76730
        topic_id: this.$route.query.id,
        title: this.title,
        tab: 'dev',
        content: this.att
      }).then((res) => {
        this.$router.push({path: '/huati', query: {id: res.data.topic_id, name1: this.title, name2: this.att}})
      })
    }
    //  点赞
  }
}
</script>

<style scoped lang="scss">
  #top{
    /*height: 90px;*/
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
  }
  h2{
    border: none;
  }
  .top_header{
    margin-top: 20px;
    display: flex;
    align-items:center;
  }
  .top_ul{
    display: flex;
    margin-top:8px;
    li{
      /*width: 50px;*/
      font-size: 12px;
      color: #909090;
      margin-left: 20px;
    }
  }
  #body-2{
    overflow: hidden;
  }
  #top_footer{
    p:nth-of-type(1){
      height: 20px;
      background: #E1E1E1;
    }
    /* 回复*/
    .Reply{
      *{
        font-size: 14px;
      }
      p:nth-of-type(1){
        height: 38px;
        line-height: 38px;
        text-indent: 1em;
        background: #F6F6F6;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
    }
  }
</style>
