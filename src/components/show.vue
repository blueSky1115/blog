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
        <p class="texta">
          注释:介于有的项目关乎商业机密不方便外传;<br/>
          分享项目里面包含了PC端及移动端，请在点击浏览的时候注意切换浏览器的窗口<br/>
        </p>
        <ul class="list" id="list">
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/tiger/index.html">
            <img src="../assets/img/pizza.png" alt="">
            <p>1.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/dell/dell.html">
            <img src="../assets/img/dell.png" alt="">
            <p>2.手机移动端</p>
          </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/ifs/index.html">
            <img src="../assets/img/ifs.png" alt="">
            <p>3.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/cocacola/homepage.html">
            <img src="../assets/img/kekoukele.png" alt="">
            <p>4.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/aigan/index.html">
            <img src="../assets/img/aigan.png" alt="">
            <p>5.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.isantai.com/">
            <img src="../assets/img/santai.png" alt="">
            <p>6.PC端</p>
            </a>
            </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/Basics/basics.html">
            <img src="../assets/img/jiazhuang.png" alt="">
            <p>7.PC端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/car01/index.html">
            <img src="../assets/img/car.png" alt="">
            <p>8.PC端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/wanbang/index.html">
            <img src="../assets/img/wangbang.png" alt="">
            <p>9.PC端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/kele/index.html">
            <img src="../assets/img/kele.png" alt="">
            <p>10.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/36kr/index.html">
            <img src="../assets/img/36k.png" alt="">
            <p>11.手机移动端</p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://bluesky1115.github.io/lookgame/index.html">
            <img src="../assets/img/look.png" alt="">
            <p>12.PC端</p>
            </a>
          </li>
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
  .neirong5 .texta{
    text-align: center;
    font-size: 12px;
    color: black;
    font-family: "微软雅黑";
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
    height: 230px;
    border: 1px solid rgba(0, 0, 0, 0.22);
    float: left;
    margin: 40px;
    overflow: hidden;
  }
  .neirong5 .list li p{
    color: rgba(0, 0, 0, 0.63);
    text-align: center;
    line-height: 32px;
  }
  .neirong5 .list li p:hover{
    color: black;
  }
  .neirong5 .list li img{
    width: 200px;
    height: 200px;
  }
</style>
