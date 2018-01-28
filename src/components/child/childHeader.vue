<template>
  <div>
    <div class="left_rou">
      <router-link   to="/?tab=all" exact>全部</router-link>
      <router-link   :to="{path:'/?tab=good'}" exact>精华</router-link>
      <router-link   :to="{path:'/?tab=share'}" exact>分享</router-link>
      <router-link  :to="{path:'/?tab=ask'}" exact>问答</router-link>
      <router-link  :to="{path:'/?tab=job'}" exact>招聘</router-link>
      <router-link  :to="{path:'/?tab=dev'}" exact>客户端测试</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'childHeader'
}
</script>
<style scoped lang="scss">
  /*左边最大*/
  /*路由*/
  .left_rou{
    width: 100%;
    line-height: 50px;
    background: #F6F6F6;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px ;
    display: flex;
  a{
    margin-left: 15px;
    font-size: 14px;
    color: green;
  }
  }
  .router-link-active{
    color: red !important;
  }
</style>
