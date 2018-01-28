 <template>
    <!--<app-header></app-header>-->
    <div>
      <div id="body_left">
        <app-header v-show="hp"></app-header>
        <p class="title"  v-show="hp2">主页 / {{this.$route.query.name}} 收藏的话题</p>
        <app-child1 :appDate="data"></app-child1>
        <app-fen @appPt="attPd"></app-fen>
      </div>
      <div id="body_right">
          <app-myload v-show="tfbox"></app-myload>
        <app-author :appImg=img :appTex=jifen :aName = name v-show="tfbox2"></app-author>
        <div class="huati" v-show="tfbox2">
            <router-link :to="{path:'/huati'}" exact class="hua">发布话题</router-link>
        </div>
        <app-inform></app-inform>
        <app-temp titleTex="无人回复的话题" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
        <app-temp titleTex="积分榜   TOP 100 >>" :tleList="tleList" :Text="true" :Text2="false"></app-temp>
        <app-temp titleTex="友情社区" :tleList="tleList" :Text="false" :Text2="true"></app-temp>
      </div>
    </div>
 </template>
<script>
import appChild1 from '@/components/child/child1'
import appHeader from '@/components/child/childHeader'
import appInform from '@/components/child/Inform'
import appMyload from '@/components/child/myLoad'
import appTemp from '@/components/child/temple'
import appFen from './child/Fenye'
import appAuthor from '@/components/child/Author'
import axios from 'axios'
export default {
  data () {
    return {
      data: [],
      a: '2018-01-17T06:17:32.882Z',
      index: null,
      name: null,
      jifen: null,
      img: null,
      tfbox: false,
      tfbox2: true,
      hp: true,
      hp2: false,
      tleList: [
        {name: '这里没有接口1', img: '//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png'},
        {name: '这里没有接口2', img: '//o4j806krb.qnssl.com/public/images/golangtc-logo.png'},
        {name: '这里没有接口3', img: '//o4j806krb.qnssl.com/public/images/phphub-logo.png'},
        {name: '这里没有接口4', img: '//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK'}
      ]
    }
  },
  // 实例化
  components: {
    appChild1,
    appHeader,
    appInform,
    appMyload,
    appTemp,
    appFen,
    appAuthor
  },
  methods: {
    attPd (val) {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: val,
          tab: this.$router.currentRoute.query.tab,
          limit: '41'
        }
      }).then(function (res) {
        this.data = res.data.data
        console.log(this.date)
      }.bind(this))
    }
  },
  // 钩子函数创建模板之后
  created () {
    if (this.$route.query.name) {
      axios.get('https://cnodejs.org/api/v1/topic_collect/' + this.$route.query.name).then((res) => {
        this.data = res.data.data
        this.hp = false
        this.hp2 = true
      })
    } else {
      this.hp = true
      this.hp2 = false
      // 重定向
      let appThis = this
      axios.all([Hatp(), Hatp2()])
        .then(axios.spread(function (acct, perms) {
          // 两个请求现在都执行完成
          console.log(acct)
          appThis.data = acct.data.data
          console.log(perms)
          appThis.img = perms.data.data.avatar_url
          appThis.name = perms.data.data.loginname
          appThis.jifen = perms.data.data.score
        }))
      // 判断是否登陆
      // if (this.$route.query.name) {
      //   this.tfbox = false
      //   this.tfbox2 = true
      // } else {
      //   console.log('没有这个值')
      // }
    }
    let thisName = this.$route.query.tab
    function Hatp () {
      return axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          tab: thisName,
          limit: '41'
        }
      })
    }
    function Hatp2 () {
      return axios.get('https://cnodejs.org/api/v1/user/' + 15225594476 + '')
    }
  },
  // 监听
  watch: {
    $route (val) {
      let tab = val.query.tab
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          tab: tab,
          limit: '41'
        }
      }).then(function (res) {
        this.data = res.data.data
      }.bind(this))
    },
    attPd (vale) {
      console.log(1111)
    }
  }

}

</script>

<style scoped lang="scss">
  .huati{
    width: 100%;
    background: #fff;
    margin: 10px 0;
    height: 60px;
    overflow: hidden;
    a{
      display: block;
      text-align: center;
      width: 100px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      line-height: 35px;
      color:#fff;
      background: #80BD01;
      margin: 10px
    }
  }
</style>
