<template>
    <div id="myLoad">
      <p>CNode：Node.js专业中文社区</p>
      <p>您可以 <a href="#">登录</a> 或 <a href="#">注册</a> , 也可以</p>
      <p>
        <router-link :to="{path:'/signin'}" href="#">通过 GitHub 登陆</router-link>
      </p>
    </div>
</template>
<script>
export default {
  name: 'my-load'
}
</script>

<style scoped lang="scss">
    #myLoad{
      height: 120px;
      background: #fff;
      p{
        padding: 8px;
        font-size: 14px;
      }
      p:nth-of-type(2){
        font-size: 13px;
        color: #333;
        a{
          color: #77A2B9;
        }
      }
      p:nth-of-type(3){
        a{
          display: block;
          background: #5BC0DE;
          border: none;
          line-height: 35px;
          text-align: center;
          width: 150px;
          color: #fff;
        }
      }
    }
</style>
