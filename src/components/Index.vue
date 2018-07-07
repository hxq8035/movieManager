<template>
  <!-- <div class="nav-md"> -->
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <router-link to="/myChart" class="site_title"><img src="../assets/img/favicon.ico" alt="">&nbsp;&nbsp;<span>呀呵电影后台</span></router-link>
            </div>

            <div class="clearfix"></div>

            <div class="profile clearfix">
              <div class="profile_pic">
                <img :src="userInfo.avatar?require('../assets/' + userInfo.avatar) : require('../assets/img/user.png')" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>欢迎回来,</span>
                <h2>{{userInfo.uname?userInfo.uname:'超级管理员'}}</h2>
              </div>
            </div>

            <br/>

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li class="active"><router-link to="/myChart"><i class="fa fa-home"></i>后台首页</router-link></li>
                </ul>
              </div>
              <div class="menu_section">
                <h3>数据管理</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-laptop"></i> 电影管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><router-link to="/filmList">电影列表</router-link></li>
                      <li><router-link to="/productSearch">多条件搜索</router-link></li>
                      <li><router-link to="/productAadd">添加电影</router-link></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-user"></i> 用户管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><router-link to="/userList">用户列表</router-link></li>
                      <li><router-link to="/userSearch">用户检索</router-link></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-shopping-cart"></i> 订单管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><router-link to="/orderList">订单列表</router-link></li>
                      <li><router-link to="/orderSearch">搜索订单</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="menu_section">
                <h3>内容管理</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-life-ring"></i> 首页电影管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><router-link to="/carousel">轮播广告</router-link></li>
                      <li><router-link to="/hotShow">正在热映</router-link></li>
                      <li><router-link to="/soonShow">即将上映</router-link></li>
                      <li><router-link to="/classicShow">热播电影</router-link></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-windows"></i> 功能页面 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><router-link to="/page403">403错误页面</router-link></li>
                      <li><router-link to="/page404">404错误页面</router-link></li>
                      <li><router-link to="/page500">500错误页面</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/img/user.png">超级管理员
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> 基本信息 </a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>用户设置</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">使用说明</a></li>
                    <li><a href="javascript:;"><i class="fa fa-sign-out pull-right"></i> 退出登录</a></li>
                  </ul>
                </li>

                <li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a>
                        <span class="image"><img src="../assets/img/user.png" alt="Profile Image"/></span>
                        <span>
                            <span>新用户注册</span>
                            <span class="time">3分钟以前</span>
                          </span>
                        <span class="message">
                            用户编号：3，用户名：doudou，完成注册。通过官网“邮件注册”功能实现注册。
                          </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="../assets/img/user.png" alt="Profile Image"/></span>
                        <span>
                            <span>用户下单</span>
                            <span class="time">10小时以前</span>
                          </span>
                        <span class="message">
                            用户编号：1，用户名：dingding，完成下单。系统中当有已有未处理订单37件。
                          </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="../assets/img/user.png" alt="Profile Image"/></span>
                        <span>
                            <span>用户信息修改</span>
                            <span class="time">1天以前</span>
                          </span>
                        <span class="message">
                            用户编号：1，用户名：dangdang，通过官网“用户设置”功能完成个人基础信息修改。
                          </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="../assets/img/user.png" alt="Profile Image"/></span>
                        <span>
                            <span>新用户注册</span>
                            <span class="time">5天以前</span>
                          </span>
                        <span class="message">
                            用户编号：1，用户名：dingding，完成注册。通过官网“用户注册”功能实现注册。
                          </span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>查看所有消息</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <router-view></router-view>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            呀呵电影 — 后台管理系统。 访问网站主页： <a href="http://yahe666.cn" target="_blank">呀呵电影</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default{
      data:function () {
        return {
          userInfo: [],
          CURRENT_URL:null ,
          $BODY:null ,
          $MENU_TOGGLE:null ,
          $SIDEBAR_MENU:null,
          $SIDEBAR_FOOTER:null,
          $LEFT_COL:null ,
          $RIGHT_COL :null,
          $NAV_MENU :null,
          $FOOTER:null
        }
      },
    mounted(){
      // this.getUserInfo();
      this.CURRENT_URL=window.location.href.split('#')[0].split('?')[0];
      this.$BODY=$('body');
      this.$MENU_TOGGLE=$('#menu_toggle');
      this.$SIDEBAR_MENU = $('#sidebar-menu');
      this.$SIDEBAR_FOOTER = $('.sidebar-footer');
      this.$LEFT_COL = $('.left_col');
      this.$RIGHT_COL = $('.right_col');
      this.$NAV_MENU = $('.nav_menu');
      this.$FOOTER = $('footer');

      //给侧边栏菜单绑定单击处理函数
      this.$SIDEBAR_MENU.find('a').on('click', (ev)=> {
        this.setContentHeight();
        var $li = $(ev.target).parent();
        if ($li.is('.active')) {
          $li.removeClass('active active-sm');
          $('ul:first', $li).slideUp(()=> {
            this.setContentHeight();
          });
        } else {
          // prevent closing menu if we are on child menu
          if (!$li.parent().is('.child_menu')) {
            this.$SIDEBAR_MENU.find('li').removeClass('active active-sm');
            this.$SIDEBAR_MENU.find('li ul').slideUp();
          }else
          {
            if ( this.$BODY.is( ".nav-sm" ) )
            {
             this. $SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
              this.$SIDEBAR_MENU.find( "li ul" ).slideUp();
            }
          }
          $li.addClass('active');

          $('ul:first', $li).slideDown(()=> {
            this.setContentHeight();
          });
        }
      });
      this.$MENU_TOGGLE.on('click', () => {
        if (this.$BODY.hasClass('nav-md')) {
          this.$SIDEBAR_MENU.find('li.active ul').hide();
          this.$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
          this.$SIDEBAR_MENU.find('li.active-sm ul').show();
          this.$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }
        this.$BODY.toggleClass('nav-md nav-sm');
        this.setContentHeight();
      });
      $(window).resize(() => {  
        this.setContentHeight();
      });
      this.setContentHeight();
    },
    methods:{
      getUserInfo(){
        this.$http.get("http://127.0.0.1/Framework_codes/movieData/admin/get_basic.php")
        .then(function(response){
          if(response.data.code === 200){
            this.userInfo = response.data;
          } else {
            this.$router.push('/login');
          }
        });
      },
      setContentHeight:function () {
        // reset height
        this.$RIGHT_COL.css('min-height', $(window).height());

         var bodyHeight = this.$BODY.outerHeight(),
             footerHeight = this.$BODY.hasClass('footer_fixed') ? -10 : this.$FOOTER.height(),
             leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height(),
             contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= this.$NAV_MENU.height() + footerHeight;
        this.$RIGHT_COL.css('min-height', contentHeight);
      }
    }
  }
</script>

<style></style>
