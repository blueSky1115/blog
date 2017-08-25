/**
* @file
* @author 廖晨
* @date 2017/8/14
*/
<template>
    <div id="">
      <comheader></comheader>
      <div class="neirong5">
        <h1>
          Project Show<br/>
          部分项目展示
        </h1>
        <ul class="list" id="list">
          <a target="_blank" href="https://bluesky1115.github.io/tiger/index.html">
            <li>
              <img src="../assets/img/pizza.png" alt="">
            </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/dell/dell.html">
          <li>
            <img src="../assets/img/dell.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/ifs/index.html">
          <li>
            <img src="../assets/img/ifs.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/cocacola/homepage.html">
          <li>
            <img src="../assets/img/kekoukele.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/aigan/index.html">
          <li>
            <img src="../assets/img/aigan.png" alt="">
          </li>
          </a>
          <a target="_blank" href="http://www.isantai.com/">
            <li>
              <img src="../assets/img/santai.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/Basics/basics.html">
          <li>
            <img src="../assets/img/jiazhuang.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/car01/index.html">
          <li>
            <img src="../assets/img/car.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/wanbang/index.html">
          <li>
            <img src="../assets/img/wangbang.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/kele/index.html">
          <li>
            <img src="../assets/img/kele.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/36kr/index.html">
          <li>
            <img src="../assets/img/36k.png" alt="">
          </li>
          </a>
          <a target="_blank" href="https://bluesky1115.github.io/lookgame/index.html">
          <li>
            <img src="../assets/img/look.png" alt="">
          </li>
          </a>
        </ul>
      </div>
      <comfooter></comfooter>
    </div>
</template>

<script>
  import comheader from '@/components/header'
  import comfooter from '@/components/footer'

    export default {
      components: {
        'comheader': comheader,
        'comfooter': comfooter
      }
    };
</script>

<style>
  .neirong5 {
    width: 1000px;
    height: 1000px;
    background: #F4F4F4;
    /*border: 1px solid red;*/
    margin: 0 auto;
    overflow-y:scroll
  }

  .neirong5 h1 {
    text-align: center;
    padding: 30px;
    /*border: 1px solid red;*/
    background: #cbecf7;
    color: #828a8b;
  }
  .neirong5 .list{
    width: 850px;
    height: 1200px;
    /*border: 1px solid red;*/
    margin: 0 auto;
  }
  .neirong5 .list li{
    width: 200px;
    height: 200px;
    border: 1px solid blue;
    float: left;
    margin: 40px;
    overflow: hidden;
  }
  .neirong5 .list li img{
    width: 200px;
    height: 200px;
  }
</style>
