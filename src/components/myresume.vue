/**
* @file
* @author
* @date 2017/7/28
*/
<template>
	<div>
    <comheader></comheader>
	<div class="neirong2">
    <h1>Just about me</h1>
    <h3>关于作者</h3>
    <p>
      <span class="title">姓名:</span>廖晨
    </p>
    <p>
      <span class="title">年龄:</span>1989年
    </p>
    <p>
      <span class="title">职业:</span>计算机科学与技术
    </p>
    <p>
      <span class="title">专业:</span>Web前端开发
    </p>
    <p>
      <span class="title">技能:</span>HTML5<br/>CSS3<br/>Javascript<br/>JQuery<br/>Ajax<br/>Vue.js<br/>DOM<br/>HBuider<br/>当然ps，cdr，ai等的切图工具是必不可少的
    </p>
    <h3>关于网站</h3>
    <p>
      本站采用Vue.js框架进行搭建和页面渲染;<br/>
      主要功能包括:分类、文章、分享、...<br/>
      主要技术:HTML5、CSS、javascript、Vue2.0、webpack<br/>
    </p>
    <h3>关于项目分享</h3>
    <p>
       1.项目分享里面含有移动端及PC端,请在点击浏览项目的时候注意切换浏览器到移动端窗口;<br/>
       2.注释:项目只是部分分享介于有的触及到商业机密不方便将源码上传；<br/>
       3.所有分享项目源码都在Github服务器里面；<br/>
    </p>
    <h3>自我评价</h3>
    <p>1.性格开朗，乐于与人沟通、具有良好的适应性、亲和力佳、能很快融入团队;<br/>2.工作踏实、认真负责、能够灵活处理工作中的突发事件;<br/>3.爱好广泛、热爱生活、勤奋好学、自学能力强;<br/>4.具有良好的团队精神、工作积极进取、态度认真;<br/>5.工作中勇于担当、积极配合、尊重他人、诚实正直;<br/>6.具有钻研精神，随时进行自我技能刷新。
    </p>

	</div>
    <comfooter></comfooter>
  </div>
</template>

<script>
  import comheader from '@/components/header'
  import comfooter from '@/components/footer'
  //  console.log(db)
  export default {
    name: 'myresume',
//    data () {
//      return {
//        content: '',
//        title: ''
//      }
//    },
    components: {
      'comheader': comheader,
      'comfooter': comfooter
    }
  }
</script>
<style>
	.neirong2 {
		width: 1000px;
		height: 1500px;
		background: #F4F4F4;
		/*border: 1px solid red;*/
		margin: 0 auto;
    overflow-y:scroll
	}

	.neirong2 h1 {
		text-align: center;
		padding: 30px;
    /*border: 1px solid red;*/
    background: #cbecf7;
    color: #828a8b;
	}
  .neirong2 h3 {
    font-size: 18px;
    /*line-height: 1.75;*/
    color: #058ac9;
    padding: 15px 150px;
    text-indent: 40px;
  }
	.neirong2 p {
    padding-left: 228px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 3;
    color: #333;
    font-size: 16px;
	}
  .neirong2 p .title{
   padding-right: 20px;
   width: 50px;
  }
</style>
