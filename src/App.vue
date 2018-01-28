<template>
  <div id="app">
    <div id="header">
      <div class="header_body">
        <div class="header_body_left">
          <!--logo-->
          <a href="#"><img src="./assets/iamge/cnodejs_light.svg"/></a>
          <!--input-->
          <div class="inp">
            <img src="./assets/iamge/search.e53b380a.hashed.png"/>
            <input type="text"/>
          </div>
        </div>
        <div class="header_body_right">
          <router-link :to="{path: '/'}">首页</router-link>
          <router-link :to="{path:'/header'}">新手入门</router-link>
          <router-link :to="{path:'/HelloWorld'}">API</router-link>
          <router-link to="">关于</router-link>
          <router-link to="">注册</router-link>
          <router-link to="">登陆</router-link>
        </div>
      </div>
    </div>
    <div id="body">
      <router-view/>
    </div>
    <div id="footer">
      <div class="footer">
        <p class="p1">
          <a href="https://cnodejs.org/rss">RSS</a> | <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
        </p>
        <p class="p2">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p class="p3">服务器赞助商为  ucloud ，存储赞助商为  七牛云存储 ，由  alinode 提供应用性能服务</p>
        <p class="p4">新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com">DigitalOcean(https://www.digitalocean.com/)</a></p>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/scss/scscsc.scss'
export default {
  name: 'App',
  created () {
  }
}
</script>
<style lang="scss">
  .router-link-active{
    color: red;
  }
// 底部
#footer{
  width: 100%;
  height: 200px;
  background: #fff;
  margin-top: 15px;
  .footer{
    width: 90%;
    height: 200px;
    background: #fff;
    margin: 0 auto;
    p{
      margin:10px 0 0 10px;
    }
    .p1{
      padding-top: 25px;
      margin-top: 0;
      a{
        font-size: 14px;
        outline: none;
      }
    }
    .p2{
      color: #909090;
      font-size: 15px;
    }
    .p3{

    }
  }
}
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
  *{
    padding: 0;
    margin: 0;
  }
  body{
    background: #E1E1E1;
  }
   #header{
     width: 100%;
     margin: 0 auto;
     background: #444;
     /*头部中间*/
     .header_body{
       width: 90%;
       margin: 0 auto;
       background: none;
       .header_body_left{
         float: left;
         height: 51px;
         a{
           img{
             width: 118px;
             height: 30px;
             padding-top: 6px;
           }
         }
         .inp{
           width: 230px;
           height: 25px;
           float: right;
           margin: 13px;
           /*margin-top: 12px;*/
           transition: all 0.5s;
           -webkit-border-radius: 15px;
           -moz-border-radius: 15px;
           border-radius: 15px;
           background: #888;
           img{
             width: 8%;
             margin-top: 3.5px;
             margin-left: 1%;
           }
           input{
             width: 91%;
             height: 100%;
             border: none;
             background: none;
             float: right;
             outline: none;
           }
         }
         .inp:hover{
           background: #fff;
         }
       }
       .header_body_right{
         height: 51px;
         a{
           text-decoration: none;
           color: #ccc;
           float: left;
           font-size: 13px;
           width: 60px;
           text-align: center;
           line-height: 50px;
         }
        a:hover{
          color: #fff;
        }
         a:active{
           color: blue;
         }
       }
     }
   }
</style>
