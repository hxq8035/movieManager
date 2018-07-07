<template>

    <div class="login">
      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form>
              <h1>管理员登录</h1>
              <div>
                <input type="text" class="form-control" v-model="uname" placeholder="管理员登录名" required />
              </div>
              <div>
                <input type="password" class="form-control" v-model="upwd" placeholder="管理员登录密码" required />
              </div>
              <div>
                <a class="btn btn-default submit" @click="login">&nbsp;登&nbsp;录&nbsp;</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <div class="clearfix"></div>
                <br />
                <div>
                  <h1><img src="../assets/img/favicon.ico"> 呀呵电影后台管理系统</h1>
                  <p>©2018 版权所有，yahe666.cn</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
      data:function () {
        return {
          msg:'Hello Login',
          uname:'',
          upwd:''
        }
      },
    methods:{
          login:function () {
            if (this.uname && this.upwd) {
              this.$http.get("http://127.0.0.1/Framework_codes/movieData/admin/login.php?uname="+this.uname+"&upwd="+this.upwd)
                .then(function(response){
                   // console.log(response);
                  if(response.data.code === 200){
                      this.$router.push('/index');
                  }
                })
            } else {
              alert('请输入用户名或密码');
            }
          }  
    }

  }

</script>

<style></style>
