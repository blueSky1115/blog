<template>
	<div class="header">
		<div class="tophead">
			<img src="../assets/img/biaozhi.png" alt="">
			<ul class="list" id="List">
				<router-link to="/home">
					<li>首页</li>
				</router-link>
				<router-link to="/essay">
					<li>文章</li>
				</router-link>
				<router-link to="/myresume">
					<li>关于我</li>
				</router-link>
				<!--<router-link to="/project">-->
					<li>有氧分享</li>
				<!--</router-link>-->
				<!--<router-link to="/detail">-->
					<li>项目</li>
				<!--</router-link>-->
			</ul>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: '我的头部哦'
      }
    }
  }
</script>
<style>

</style>
