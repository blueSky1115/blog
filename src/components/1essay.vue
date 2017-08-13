/**
* @file
* @author
* @date 2017/7/28
*/
<template>
	<div>
    <comheader></comheader>
	<div class="neirong1">
		<h1>Essay</h1>
    <ul class="limit">
      <router-link to="/list/1">
      <li>1.html5技术将推动移动浏览器变革</li>
      </router-link>
      <router-link to="/list/2">
      <li>2.关于响应式Web设计技巧以及css设置</li>
      </router-link>
      <router-link to="/list/3">
      <li>3.JavaScript的特点</li>
      </router-link>
      <router-link to="/list/4">
      <li>4.简述Ajax的优点与缺点</li>
      </router-link>
      <router-link to="/list/5">
      <li>5.jQuery工作原理</li>
      </router-link>
      <router-link to="/list/6">
      <li>6.Vue.js基本介绍</li>
      </router-link>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
    </ul>
	</div>
    <comfooter></comfooter>
  </div>
</template>

<script>
  import comheader from '@/components/header'
  import comfooter from '@/components/footer'

  import db from '../db/db'
  export default {
    name: 'header',
    data () {
      return {
        content: '',
        title: ''
      }
    },
    methods: {
      toDetail: function (id) {
        this.$router.push('/detail/' + id)
      }
    },
    components: {
      'comheader': comheader,
      'comfooter': comfooter
    },
    mounted () {
      var id = this.$route.params.id
      for (var i = 0; i < db.post.length; i++) {
        if (Number(db.post[i].id) === Number(id)) {
          this.content = db.post[i].content
          this.title = db.post[i].title
        }
      }
    }
  }
</script>
<style>
	.neirong1 {
		width: 1000px;
		height: 1000px;
		background: #F4F4F4;
		/*border: 1px solid red;*/
		margin: 0 auto;
    overflow-y:scroll
	}

  .limit{
    width: 800px;
    height: 800px;
    /*border: 1px solid red;*/
    margin: 50px auto;
    clear: both;
  }

  .limit li {
    width: 240px;
    height: 140px;
    /*border: 1px solid red;*/
    float: left;
    margin: 10px 14px 10px 10px;
    font-size: 20px;
    padding-top: 100px;
    text-align: center;
    color: white;
    background: #63c8e9;
  }
  .limit li:hover{
    color: black;
    background: white;
    transition: 1s;
  }


	.neirong1 h1 {
		text-align: center;
		padding: 30px;
    /*border: 1px solid red;*/
    background: #cbecf7;
    color: #828a8b;
	}

	/*.neirong p {*/
		/*width: 800px;*/
		/*font-size: 18px;*/
		/*font-family: "微软雅黑";*/
		/*margin: 5px auto;*/
		/*text-indent: 40px;*/
		/*line-height: 40px;*/
	/*}*/
</style>
