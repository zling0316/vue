
<template>
  <div id="app">  
    <!-- 3.在模板中使用 --> 
    <v-header> </v-header>
  
   <hr>
   <br>
   <!-- <v-news></v-news> -->
   <v-lify></v-lify>

   <hr>
   <br>
    <v-home></v-home>
  </div>
</template>
          
       

<script>
/*
 1、引入组件

  2、挂载组件

  3、在模板中使用


  生命周期函数/生命周期钩子： 

    组件挂载、以及组件更新、组件销毁、的时候触发的一系列的方法 
     这些方法就叫做生命周期函数
 */
//1. 引入组件
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import News from './components/News.vue';
import Lify from './components/Lify.vue';
    export default {  
      //2. 挂载组件
      components:{
    'v-home':Home,
    'v-news':News,
    'v-header':Header,
    'v-lify':Lify,
  
},   
      data () {  /*业务逻辑里面定义的数据*/
        return {
         msg:'你好vue',
        }
      },
      methods:{
     
          
      },
         
    }
</script>


<style scoped >


</style>
