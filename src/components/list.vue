/**
* @file
* @author
* @date 2017/7/28
*/
<template>
	<div>
    <comheader></comheader>
	<div class="neirong">
		<h1 class="">{{title}}</h1>
		<div v-html="content"></div>
	</div>
    <comfooter></comfooter>
  </div>
</template>

<script>
  import comheader from '@/components/header'
  import comfooter from '@/components/footer'

  import db from '../db/db'
  //  console.log(db)
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
//          console.log(db.post[i])
          this.title = db.post[i].title
        }
      }
    }
  }
</script>
<style>
	.neirong {
		width: 1000px;
		height: 1500px;
		background: #F4F4F4;
		/*border: 1px solid red;*/
		margin: 0 auto;
    overflow-y:scroll
	}

	.neirong h1 {
		text-align: center;
		padding: 30px;
    /*border: 1px solid red;*/
    background: #cbecf7;
	}

	.neirong p {
		width: 800px;
		font-size: 18px;
		font-family: "微软雅黑";
		margin: 5px auto;
		text-indent: 40px;
		line-height: 40px;
	}
</style>
