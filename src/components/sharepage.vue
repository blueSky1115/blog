/**
* @file
* @author 廖晨
* @date 2017/8/14
*/
<template>
    <div id="">
      <comheader></comheader>
      <div class="neirong4">
        <h1>Share</h1>
        <ul class="shareb">
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1qYK6REW">
            <img src="../assets/img/f1.png" alt="">
            <span>1.CSS经典教程-download-密码:3cze</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1bp1u2XD">
            <img src="../assets/img/f2.png" alt="">
            <span>2.标准前端性能优化-download-密码:04sj</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1eSaQcts">
              <img src="../assets/img/f3.png" alt="">
              <span>3.编写高质量代码-download-密码:9yp7</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1c2KVsWS">
              <img src="../assets/img/f4.png" alt="">
              <span>4.H5移动开发实战-download-密码:2ywd</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1ge6vQjL">
              <img src="../assets/img/f5.png" alt="">
              <span>5.兼容解决方案-download-密码:hzzj</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1nuGYWdz">
              <img src="../assets/img/f6.png" alt="">
              <span>6.js面向对象编程-download-密码:tk1p</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1mi61Pyg">
              <img src="../assets/img/f7.png" alt="">
              <span>7.CSS禅意花园-download-密码:fe8g</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1kU57Dnp">
              <img src="../assets/img/f8.png" alt="">
              <span>8.SEO搜索引擎download-密码:ml07</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://pan.baidu.com/s/1c2q3hQS">
              <img src="../assets/img/f9.png" alt="">
              <span>9.js高级程序设计download-密码:trht</span>
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
  .neirong4 {
    width: 1000px;
    height: 1000px;
    background: #F4F4F4;
    /*border: 1px solid red;*/
    margin: 0 auto;
    overflow-y:scroll
  }

  .neirong4 h1 {
    text-align: center;
    padding: 30px;
    /*border: 1px solid red;*/
    background: #cbecf7;
    color: #828a8b;
  }

  .neirong4 p {
    width: 800px;
    font-size: 18px;
    font-family: "微软雅黑";
    margin: 5px auto;
    text-indent: 40px;
    line-height: 40px;
  }
  .neirong4 .shareb{
    width: 750px;
    /*border: 1px solid red;*/
    margin: 10px auto;
  }
  .neirong4 .shareb li{
    width: 750px;
    height: 130px;
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.34);
  }
  .neirong4 .shareb li span{
    padding-left: 80px;
    text-align: center;
    line-height: 130px;
    font-size: 14px;
    font-family: "微软雅黑";
    color: #828a8b;
  }
</style>
