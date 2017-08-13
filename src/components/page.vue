<template>
  <div class="page">
    <div id="app">
      <div class="homepage">
        <section id="aside">
          <div class="aside-box">
            <div class="marsk"></div>
            <div class="aside-content">
              <a href="javascript:;">
                <img src="../assets/img/logo002.png">
              </a>
              <h1 v-text="mag"></h1>
              <p>{{mbg}}</p>
              <div class="aside-icon">
                <a href="javascript:;">
                  <i class="iconfont">git</i>
                </a>
                <a href="javascript:;">
                  <i class="iconfont">sf</i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="home-view">
          <section class="aboutMe">
            <div class="about-nav">
              <router-link to="/home" target="_blank">
                首页
              </router-link>
              <router-link to="/essay" target="_blank">
                文章
              </router-link>
            </div>
            <div class="about-nav" >
              <router-link to="/myresume" target="_blank">
                关于我
              </router-link>
              <a href="/">项目</a>
            </div>
            <div class="about-nav">
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      mbg: '在每一次起风的日子，不辜负生命',
      mag: 'Sky Blog'
    }
  }
}
</script>
