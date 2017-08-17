/**
* @file
* @author 廖晨
* @date 2017/8/14
*/
<template>
    <div id="">
      <comheader></comheader>
      <div class="neirong5">
        <h1>Project Show</h1>
        <ul class="list" id="list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
    height: 1000px;
    /*border: 1px solid red;*/
    margin: 0 auto;
  }
  .neirong5 .list li{
    width: 260px;
    height: 260px;
    border: 1px solid blue;
    float: left;
    margin: 10px;
    overflow: hidden;
  }
</style>
