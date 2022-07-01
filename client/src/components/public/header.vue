<!-- header -->
<template>
<div id='header'>
<div class="box">
   <div class="left-content table-box">
    <div class="cell-box">
    <el-row>
  <el-col :span="5"><div class="grid-content bg-purple">
    <img src="https://sso.qiniu.com/asserts/icon-qiniu-with-title.svg" alt="" srcset="">
  </div></el-col>
  <el-col :span="19"><div class="grid-content bg-purple-light">
    <slot name="navleft">
        <el-row :gutter="20">
       
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link :to="{name:'home'}" active-class="isactive">博客首页</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">前端笔记</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">特色效果</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">知识论坛</router-link></div></el-col>
</el-row>
    </slot>
  </div></el-col>
</el-row>
</div>
    </div>
   <div class="center-box">
    <slot name="center-search">
        <div class="cell-box">
        <label for="">
            <input type="text" placeholder="请输入.....">
        </label>
       <el-button type="primary" icon="el-icon-search" class="serach-button" >搜索</el-button>
       </div>
    </slot>
    
   </div>
   
   <div class="right-content table-box">
    <div class="cell-box">

      <div class="left-box">
          <slot name="rightbar">
        <el-row :gutter="20">
       
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">足迹</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">动态</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">消息</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link :to="{name:'login'}" active-class="isactive">登录</router-link></div></el-col>
  
</el-row>
</slot>
      </div>
      <div class="right-box">
        <slot name="login">
             <el-row :gutter="20">
  
  
  <el-col :span="24"><div class="grid-content bg-purple title"><slot name="register"><router-link :to="{name:'register'}" class="register-button">立即注册</router-link></slot></div></el-col>
 
  
</el-row>
        </slot>
      </div>
    </div>
   </div>
   
</div>

</div>
</template>

<script>
export default {
data() {
return {

}
},
created() {

},
mounted() {

}
}
</script>
<style scoped lang="stylus">
 input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #E8E8ED;
  }
  input:-ms-input-placeholder { /* IE 10+ */
    color: #E8E8ED;
  }
  input:-moz-placeholder { /* Firefox 18- */
    color: #E8E8ED;
    opacity: 1;
  }
  input::-moz-placeholder { /* Firefox 19+ */
   color: #E8E8ED;
   opacity: 1;
 }
#header{
  width: 100%;
    background: white;
    .right-box{
      margin-left: 20px;
    }
}
.box .bg-purple[data-v-605d4b93] {
    padding: 15px;
    padding-left: 25px;
    line-height: 40px;
}
.el-row{
    height: 100%
}
.el-col-24{
    .title{
         background: #409EFF
    }
    a{
        color: white!important;
       
        height: 100%;
        display: block;
       
    }
    
}
.title{
    white-space: nowrap

}
.right-content{
    .left-box,.right-box{
        display: inline-block
    }
}
$color-main=#07BEFF
/deep/.center-box span{
        color: white

    }
    /deep/.el-icon-search:before{
        color white;
    }
#header{
    box-shadow: 0 2px 8px #e7eef6;
    
}
.box{
    display: flex;
    justify-content: space-between;
    .bg-purple{
        padding: 15px;
        padding-left: 25px
    }
    .bg-purple.title{
        line-height: 35px
        height: 100%;
        &:hover a{
            color: $color-main
        }
    }
    
}
.center-box {
    display: table;
   
  input{
    min-height: 40px;
    min-width: 250px;
    border-radius: 50px 0 0 50px;
    border: 1px solid #E8E8ED;
    outline: none;
    text-indent: 20px;
    color: #555666;
    
}


  button{
    border-radius: 0  50px 50px 0
  }
}
</style>