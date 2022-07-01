<!--  -->
<template>
<div id='register'>
    <headerbar>
        <span slot="navleft"></span>
        <span slot="center-search"></span>
        <router-link :to="{name:'register'}" class="register-button" slot="register">立即注册</router-link>
          <el-row :gutter="20" slot="rightbar" class="rightnav">
       
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link :to="{name:'home'}" active-class="isactive">博客首页</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">前端笔记</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">特色效果</router-link></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple title"><router-link to="#" active-class="isactive">知识论坛</router-link></div></el-col>
</el-row>
    </headerbar>
   <div class="container">
    <div class="blog-container">
         <div class="left-box">
            <router-link to="#">
                <img src="http://v1.cdn-static.cn/2018/4/17/3917_jg3ccfd2.jpg" alt="">
            </router-link>
         </div>
         <div class="right-box">
            <div class="form-container">
                <div class="form-content">
                    <div class="blog-text" id="blogtext1">
                        <p>连接数据，重塑价值</p>
                    </div>
                    <div class="blog-text" id="blogtext2">
                        <p>欢迎来到 L-BLOG，请登录！</p>
                    </div>
                     <div class="form-login">
                    <form action="">
                        <div class="userinpu">
                        <input type="text" id="username" placeholder="请输入账号" v-model="form.username">
                        </div>
                        <div class="pswinpu">
                        <input type="password" id="password" placeholder="请输入密码" v-model="form.password">
                        </div>
                        <button type="button" @click="formsubmit">登陆</button>
                        
                    </form>
                </div>
                <div class="extra-msg">
                    <ul>
                        <router-link tag="li" to="#">立即注册</router-link>
                        <router-link tag="li" to="#">忘记密码</router-link>
                    </ul>
                </div>
                </div>
               
            </div>
         </div>
   
</div>
    </div>
</div>
</template>

<script>
import headerbar from '../public/header.vue'
export default {
name:'register',
components:{headerbar},
data() {
return {
 form:{username:"",password:""},
}
},
created() {

},
mounted() {

},
methods:{
    formsubmit(){
       if(this.form.username==""||this.form.password==""){
        this.$message({
            message:'账号和密码不能为空',
            type:"info"
        })
       }else{
         this.$axios.post('/users/login',this.form)
         .then(res=>{
           
                 this.$message({
            message:res.data.msg,
            type:res.data.type
            
        })
            if(res.data.type=='success'){
                this.$router.push({path:'/home'})
            }
         })
         .catch(err=>{
             this.$message.error('未知错误');
         })  
        
       }
    }
}
}
</script>
<style scoped lang="stylus">
     #blogtext2 p{
      margin-top: 12px;
    margin-bottom: 40px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 22px;
        }
.right-box{
    padding: 0 55px;
    
    .form-container{
        height: 100%;
        display: table;
        width: 100%;
        .extra-msg{
            margin-top: 30px
        }
        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            li{
                width: 25%;
                color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    position relative;
            &:nth-child(2)::before{
                content: "";
                position: absolute;
                display: block;
                width: 8px;
                top:8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(7, 190, 255, .45);
            }
            }
        }
        .form-content{
            display: table-cell;
            vertical-align: middle;
            height: auto;
            .userinpu,.pswinpu{
                position relative;
                height: 40px;
                 margin-bottom: 24px;
            }
            .userinpu::after{
                content:'';
                position: absolute;
                display: block;
                height:100%;
                width:100%;
                background: url(https://sso.qiniu.com/asserts/icon-email.v2.svg) no-repeat 0 center;
    background-position: 13px;
    pointer-events: none;
    top: 0px;
            }
            .pswinpu::after{
                 content:'';
                position: absolute;
                display: block;
                height:100%;
                width:100%;
                pointer-events: none;
                    background: url(https://sso.qiniu.com/asserts/icon-password.v2.svg) no-repeat 0 center;
    background-position: 13px
    top: 0px;
            }
            .blog-text p{
                color: #07BEFF;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    line-height: 48px;
            }
            input{

                max-width: 400px;
    width:100%; 
    height: 40px;
  
    border-radius: 3px;
    border:1px solid  #BFBFBF;
    padding-left: 40px;

            }
            button{
                background-color: #37CAFF;
                border-radius: 2px;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 0;
    width: 100%;
    border: none;
    color: white;
            }
        }
      
    }
}
.left-box {
    a,img{
        height: 100%;
        width 100%
    }
    a{
        display: block;
        }
    img{
        object-fit: cover
    }
}
.rightnav{
    .bg-purple.title{
        line-height: 35px;
    height: 100%;
    padding: 15px;
    padding-left: 25px;
    &:hover a{
            color: #409EFF;
        }
    }
}
#header{
    position relative
}
#header .register-button{
    color:white
}
.container{
        
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px)
}
.blog-container{
    max-width 1030px;
    width: 100%;
    margin: 0 auto;
    min-height: 560px;
    border: 1px solid #EEE;
    border-radius: 4px;
    margin: 100px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    

    .left-box,.right-box{
        width:50%;
    }
}
</style>