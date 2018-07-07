<template>
  <div>
    <div class="right_col" role="main">
      <div class="row">
        <div class="col-xs-12 x_title">
          <h3>用户列表</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
          <form class="form-inline">
            <div class="form-group">
              <label for="page-size">每页显示记录数：</label>
              <select class="form-control" id="page-size">
                <option value="10">10</option>
                <option value="20">15</option>
                <option value="40">20</option>
                <option value="60">25</option>
                <option value="80">30</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-xs-4 col-xs-offset-5">
          <div class="form-group has-feedback">
            <label for="product-kw" class="sr-only">搜索关键字：</label>
            <input class="form-control" type="text" id="product-kw" placeholder="请输入搜索关键字" v-model="keyword">
            <span class="glyphicon glyphicon-search form-control-feedback search-btn" @click='search(keyword)'></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="table-responsive">
            <table class="table table-hover table-striped" id="table-laptop">
              <thead>
              <tr>
                <!-- <th>
                  <div class="checkbox" style="margin: 0;">
                    <label>
                      <input type="checkbox" >全选
                    </label>
                  </div>
                </th> -->
                <th>编号</th>
                <th>头像</th>
                <th>用户名</th>
                <th>真实姓名</th>
                <th>手机号</th>
                <th>用户等级</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-if="data.length===0">
                <td colspan="8">
                <div class="loading empty-data">
                  暂无数据
                <!-- <img src="../assets/img/loading.gif" alt=""> -->
                </div>
                </td>
              </tr>
              <tr v-for="(value,index) in data">
                <!-- <td><p><input type="checkbox"></p></td> -->
                <td><p>{{value.uid}}</p></td>
                <td><img class="pic" :src="require('../assets/' + value.avatar)"></td>
                <td><p class="fname" :title="value.uname">{{value.uname}}</p></td>
                <td><p class="title" :title="value.real_name">{{value.real_name}}</p></td>
                <td><p class="spec" :title="value.phone">{{value.phone}}</p></td>
                <td><p>level_{{value.user_level}}</p></td>
                <td>
                  <p>
                    <!-- <a class="edit">详情</a> -->
                    <a class="edit" @click = 'edit(index)'>修改</a>
                    <a class="edit" @click = 'deleteUser(index)'>删除</a>
                  </p>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <ul class="pagination pull-right" id="pagination">
                <li :class="{disabled:nowPage==1}"><a @click="switchPage(false)">上一页</a></li>
                <li :class="{active:nowPage==(index+1)}" v-for="(tmp,index) in totalPagesList">
                  <a @click="loadDataByPage(tmp)">{{tmp}}</a>
                </li>
                <li :class='{disabled:nowPage==totalPages}'><a @click="switchPage(true)">下一页</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
    <div :class="{'hidden':!isEdit,'edit-container':true}">
      <p class="edit-tips">用户编辑</p>
      <div class="edit-item">用户名：<input type="text" v-model = 'editList.uname'></div>
      <div class="edit-item">手机号：<input type="text" v-model = 'editList.phone'></div>
      <div class="edit-item">用户等级：<input type="number" v-model = 'editList.user_level'></div>
      <div class="edit-btn">
          <div class="btn btn-primary" @click = 'exit'>取消</div>
          <div class="btn btn-danger confirm-btn" @click = 'confirm'>确认</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data:function () {
        return {
          data:[],
          totalPages:0,
           // 存储页码总数
          totalPagesList:[],
          // 存储当前页码
          nowPage:1,
          // 搜索关键字
          keyword: '',
          editList: [],
          isEdit: false,
          // 编辑的电影序号
          index: 0,
          // 编辑的电影编号
          uid: 0
        }
      },
    methods: {
      loadDataByPage(pno){
          this.nowPage=pno;
          this.$http.get("http://127.0.0.1/Framework_codes/movieData/admin/list.php?pno="+pno)
          .then((response)=>{
            // console.log(response.data);
            this.data=response.data.data;
            this.totalPages=response.data.pageCount;
            this.totalPagesList=[];
            for(var i=0;i<this.totalPages;i++){
              this.totalPagesList.push(i+1);
            }
          })
      },
      switchPage(isNext){
          var pageNow=this.nowPage;
          if(isNext){
              pageNow++;
              if(pageNow>this.totalPages){
                //如果自增后的页码大于总数，没有意义了
                return;
              }else{
                  this.loadDataByPage(pageNow);
              }
          }else{
            pageNow--;
            if(pageNow<=0){
              //如果自减之后 小于1了，没有意义
              return;
            }else{
              this.loadDataByPage(pageNow);
            }
          }
      },
      search(kw){
        // if (kw) {
          this.nowPage=1;
          this.$http.get("http://127.0.0.1/Framework_codes/movieData/admin/list.php?pno=1&kw="+kw)
          .then((response)=>{
            if (response.data.data.length) {
              this.data=response.data.data;
              this.totalPages=response.data.pageCount;
              this.totalPagesList=[];
              for(var i=0;i<this.totalPages;i++){
                this.totalPagesList.push(i+1);
              }
            } else {
              alert('该用户不存在哦~');
            }
          })
        // }
      },
      deleteUser(uid){
        this.data.splice(uid,1);
      },
      edit(index){
        this.index = index;
        this.uid = this.data[index].uid;
        this.editList.uname = this.data[index].uname;
        this.editList.phone = this.data[index].phone;
        this.editList.user_level = this.data[index].user_level;
        this.isEdit = true;
      },
      exit(){
        this.isEdit = false;
      },
      confirm(){
        this.isEdit = false;
        this.data[this.index].uname = this.editList.uname;
        this.data[this.index].phone = this.editList.phone;
        this.data[this.index].user_level = this.editList.user_level;
        this.$http.get("http://127.0.0.1/Framework_codes/movieData/admin/edit.php?uid="+this.uid+'&uname='+this.editList.uname+'&phone='+this.editList.phone+'&user_level='+this.editList.user_level)
          // .then((response)=>{
          //   this.data=response.data.data;
          //   console.log(this.data.code);
          // });
      }
    },
    mounted:function () {
      this.loadDataByPage(1);
    }
  }
</script>

<style>
  .empty-data {
    padding-top: 20px;
  }
  #table-laptop p {
    margin: 12px 0 0;
  }
  #table-laptop td .title,
  #table-laptop td .fname,
  #table-laptop td .spec {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  #table-laptop td .title {
    width: 60px;
  }
  #table-laptop td .fname {
    width: 60px;
  }
  #table-laptop td .spec {
    width: 100px;
  }
  #table-laptop td .pic{
    width: 40px;
    vertical-align: middle;
  }
  li,.search-btn, .edit {
    cursor: pointer;
  }
  .edit:hover {
    color: #e31436;
  }
  .edit-container {
    position: fixed;
    left: 35%;
    top: 25%;
    width: 500px;
    height: 300px;
    background-color: #fff;
    z-index: 999;
    border: 2px solid #ccc;
  }
  .edit-tips {
    text-align: center;
    color: #000;
    font-size: 24px;
    margin: 26px 0 12px;
  }
  .edit-item {
    text-align: center;
    color: #000;
    font-size: 16px;
    margin-top: 10px;
  }
  .edit-item input {
    border-color: #a2f2e2;
    border-radius: 6px;
    text-indent: 4px;
  }
  .edit-btn {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
  }
  .confirm-btn {
    margin-left: 20px;
  }
  .hidden {
    display: none;
  }
</style>
