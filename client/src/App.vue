<template>
  <div id="app">
     <router-view></router-view>
      <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang="stylus">
 button{
  cursor pointer
 }
#app .isactive{
  color: #45BCF9;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color:#212529;
  font-size: 14px;
  list-style: none
}
.table-box{
   display:table
}
body{
  overflow-x: hidden
}
input{
  outline: none;
}
 .cell-box{
        display: table-cell;
        vertical-align: middle
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
 
}

</style>
