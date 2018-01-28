<template>
  <div>
    <div id="body_left">
      <div class="header">
        <div class="header_header">
          <h1 v-html="data.title"></h1>
          <div class="header_a">
            <ul>
              <li>发布于 {{data.last_reply_at| filDate}}</li>
              <li>作者 {{name}}</li>
              <li>{{data.visit_count}}次浏览</li>
              <li>来自 客户端测试</li>
            </ul>
            <app-but @appBj="bj" @appSc="Scc" :appScang="this.$route.query.id"></app-but>
            <div class="title1" v-html="data.content"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="title" style="text-indent: 1em">添加回复</div>
        <div class="Tiul">
          <app-ping :appTall="ping"></app-ping>
        </div>
        <app-ares @appPi =hff></app-ares>
      </div>
    </div>
    <div id="body_right">
      <app-author :appImg="img" :appTex="jifen" :aName="name"></app-author>
      <app-inform></app-inform>
    </div>
  </div>
</template>

<script>
import appAuthor from './child/Author'
import appInform from './child/Inform'
import appPing from './child/Pinglun'
import appAres from './child/textares'
import appBut from './child/but'
export default {
  name: 'hui-fu',
  components: {
    appAuthor,
    appInform,
    appPing,
    appAres,
    appBut
  },
  data () {
    return {
      data: [],
      name: null,
      img: null,
      jifen: null,
      ping: null
    }
  },
  created () {
    this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$route.query.id).then((res) => {
      this.data = res.data.data
      this.name = res.data.data.author.loginname
      this.img = res.data.data.author.avatar_url
      this.ping = res.data.data.replies
      this.$http.get('https://cnodejs.org/api/v1/user/' + res.data.data.author.loginname).then((res) => {
        console.log(res)
        this.jifen = res.data.data.score
      })
    })
  },
  methods: {
    // 编辑
    bj () {
      this.$http.post('https://cnodejs.org/api/v1/topics/update', {
        accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
        // b5c65aea-d319-4c73-98f6-23ce06f76730
        topic_id: this.$route.query.id,
        title: this.data.title,
        tab: 'dev',
        content: this.data.content
      }).then((res) => {
        this.$router.push({path: '/huati', query: {id: res.data.topic_id}})
      })
    },
    // 回复
    hff (val) {
      // console.log(this.tex)
      console.log(this.$route.query.id)
      this.$http.post('https://cnodejs.org/api/v1/topic/' + this.$route.query.id + '/replies', {
        accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
        content: val
      }).then((res) => {
        this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$route.query.id).then((res) => {
          this.ping = res.data.data.replies
        })
      })
    },
    //  删除
    Scc () {
      confirm('你确定要删除吗？')
      if (confirm) {
        alert('你竟然点了确定')
        this.$http.post('https://cnodejs.org/api/v1/topic_collect/de_collect', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
          topic_id: this.$route.query.id
        }).then((res) => {
          console.log('错了')
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .header{
      width: 100%;
      background: #fff;
      .header_header{
        padding: 10px;
        .header_a{
          ul{
            display: flex;
            margin: 15px 0;
            li{
              font-size: 12px;
              color: #909090;
              margin-left: 20px;
            }
          }
        }
      }
      .title1{
        border-top: 1px solid #ccc;
        line-height: 50px;
        margin-top: 15px;
        word-wrap:break-word
      }
    }
  .Tiul{
    width: 98%;
    margin: 0 auto;
    ul{
      li{

      }
    }
  }
</style>
