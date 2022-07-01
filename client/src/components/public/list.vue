<!--  -->
<template>
<div id='list'>
    <div class="blog-container">
<el-row :gutter="20">
  <el-col :span="17"><div class="grid-content bg-purple">
    <div class="left-box box">
       <div class='listrender'>
  <ul>
    <li>
      <div class="title-box">
        <span class="time">2022年6月15日</span>
        <span class="title-content">
            <span class="type">【置顶】</span>
            <span class="title">springboot深入浅出-看了都说好</span>
        </span>
      </div>
      <div class='col_6'>
        <div class='imgbox'>
        <img src='http://p.cdn-static.cn/64823_165570750749010.jpg'>
        </div>
        <div class='textDetail'>
          <p>摘要： 本文是clickhouse专栏第五篇，更多内容请关注本号历史文章！ 一、数据类型表 clickhouse内置了很多的column数据类型，可以通过查询system.data_type_families这张表获取版本的所有支持的数据类型。下文中第一列是字段类型，第二列表示该类型的字段类型是否区分大小写。一、创建新的database clickhouse创建数据库的语法几乎和其他的关系型数据库是一样的，区别就是clickhouse存在集群cluster和库引擎engine的概念，可以根据需要进行指定。如果没有特殊需求，默认即可。</p>
        </div>
      </div>
       <div class="smallfont">
        <span>post</span>
        <span>@</span>
        <span>2022-06-11 07:36</span>
        <span>字母歌博客</span>
        <span>阅读(154)</span>
        <span>评论(0)</span>
        <span>推荐(1)</span>
       </div>
    </li>
  </ul>
</div>
    </div>
  </div></el-col>
  
  <el-col :span="7"><div class="grid-content bg-purple">
     <div class="right-box box">
        sadasd
     </div>
  </div></el-col>
</el-row>
</div>
</div>
</template>

<script>
export default {
     name: 'list',
data() {
return {

}
},
created() {
console.log(this)
},
mounted() {
 document.querySelector('body').classList.add('bg')
}
}
</script>
<style scoped lang="stylus">
.title-box{
  margin-bottom: 15px;
}
.time{
    color: #fff;
    background-color: #45bcf9;
    padding: 3px 6px;
    font-size: 12px;
    float: left;
    margin-right: 10px;
    z-index: 10;
}

  .listrender ul li.liactt{
    display:flex
  }
  .pagenone{
    display:none;
  }
  .found p{
    color: rgba(64, 64, 64, 1);
    font-size: 26px;
    margin-bottom:20px;
  }
  .listrender li{
    text-align: left 
    padding:20px;
    border-bottom: 1px solid rgba(191, 191, 191, 0.5);
  }

  .listrender li .col_6>div{
    display:inline-block;
  }
  .imgbox{
    width:100px;
    height:100px;
    vertical-align: bottom;
    margin-right:10px;
    line-height: 100px;
  }
  .imgbox img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .fea{
    color:white;
    padding: 5px
    font-size: 16px;
   background-image: -webkit-linear-gradient( 90deg , rgb(71,144,238)0%, rgb(37,101,212) 100%);
   display: inline-block;
   
  }
  .text_title{
    font-size: 20px;
    line-height: 1;
    color: rgba(0, 0, 0, 1);
  }
  .w_s{
   color: rgba(64, 64, 64, 1);
    letter-spacing: 1px; 
  }
  .w_time{
    color: rgba(0, 0, 0, 0.54);
    font-size: 13px;
    line-height: 1;
  }
  
 
  
.bg{
    background: #F3F5F5
}

#list{
    background: #F3F5F5;
    padding: 30px
    .blog-container{
         max-width: 1600px;
   
    height: auto;
   
   margin: 0 auto;
    }
   
    .box{
        height: 500px
       box-shadow: 0 0 4px 1px #efefef;
        background: white;
    }
    .title-content{
      line-height: 25px;
      &:hover span{
         color:#45BCF9;
      }
    span{
      font-size: 20px;
      color: #7E8C8D;
    }
     
    } 
  .textDetail{
    width: calc(100% - 130px);
    vertical-align: top;
    line-height: 25px;
    padding-left: 10px;
    p{
      display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: #606266;
    }
  }
  .smallfont{
    margin-top: 18px;
    span{
          clear: both;
    color: #bcbcbc;
    float: none;
    text-align: left;
    
    font-size: 12px;
    margin: 0 5px;
    }
  }
}
</style>