<template>
    <div>
      <ul>
        <li class="li"  v-for="(item,key,index) in appDate" :key="index">
          <div class="Li_left">
            <router-link :to="{name:'AuthorXiang',query:{id: item.author.loginname}}" class="img">
              <img :src="item.author.avatar_url" alt=""/>
            </router-link>
            <div class="div1"><span>{{item.reply_count}}</span> /<span>{{item.visit_count}}</span></div>
            <div class="meta" v-if="item.top">置顶</div>
            <div class="meta" v-else-if="item.good">精华</div>
            <div class="meta meta2" v-else-if="item.tab == 'share'">分享</div>
            <div class="meta meta2" v-else-if="item.tab == 'ask'">问答</div>
            <div class="meta meta2" v-else-if="item.tab == 'job'">招聘</div>
            <div class="meta meta2" v-else-if="item.tab == 'dev'">客户</div>
            <router-link :to="{name:'ChildXiang',query:{id:item.id}}" class="name">{{item.title}}</router-link>
          </div>
          <div class="Li_right">{{item.last_reply_at|filDate}}</div>
        </li>
      </ul>
      <div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['appDate'],
  name: 'child1',
  created () {
    console.log(this.$router)
  },
  data () {
    return {
    }
  },
  components: {
  },
  watch: {
    $route (val) {
      console.log(val)
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
    /*background: red;*/
  }
  .li{
    height: 50px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    .Li_left{
      display: flex;
      height: 50px;
      align-items: center;
      margin-left: 1%;
      width: 90%;
      .div1{
        margin: 0 0 0 10px;
        width: 70px;
        span:nth-child(1){
          font-size: 14px;
          font-weight: bold;
          color: #909090;
        }
        span:nth-child(2){
          font-size: 12px;
          color: #ccc;
        }
      }

      .div1{
        line-height: 35px;
      }
      .name{
        display: block;
        line-height: 35px;
        font-size: 14px;
        color: #000;
        width: 75%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
    .Li_right{
      margin-right: 1%;
      display: flex;
      height: 50px;
      align-items: center;
      font-size: 13px;
      color: #909090;
    }
  }
  .li:hover{
    background: #d3d3d3;
  }
  .listX{
    height: 50px;
  }
</style>
