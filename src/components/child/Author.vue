<template>
  <div id="author">
    <div class="title">作者</div>
    <router-link :to="{name:'AuthorXiang',query:{id: aName}}" class="tou">
      <img :src="appImg" alt=""/><span>{{aName}}</span>
    </router-link>
    <p>积分:{{appTex}}</p>
    <p>“ 狼叔说：少抱怨，多思考，未来更美好 ”</p>
  </div>
</template>
<script>
export default {
  name: 'author',
  props: ['appImg', 'appTex', 'aName']
}
</script>

<style scoped lang="scss">
    #author{
      width: 100%;
      padding-bottom: 15px;
      background: #fff;
      .tou{
          height: 45px;
          display: block;
        padding: 10px;
        img{
          width: 50px;
          height: 100% ;
          float: left;
        }
        span{
          color: #778087;
          line-height: 50px;
          text-indent: 0.5em;
          display: block;
          float: left;
        }
      }
      p{
        margin-top: 10px;
        font-size: 12px;
        text-indent: 0.2em;
      }
    }
</style>
