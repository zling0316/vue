<template>
    <div id="home">
          <!-- <v-news></v-news> -->
         <br>
         <hr>
       <v-life v-if="flag"></v-life>     


       <br>
       <br>
       <br>
       <button @click="flag=!flag">挂载以及卸载life组件</button>   
    </div>
</template>
 <script>
 //引入组件
import News from './News.vue';
import Lify from './Lify.vue';
 export default{
      components:{
     'v-news':News,
     'v-life':Lify,
  
},   
     data(){
         return{
             msg:'我是一个首页组件',
             flag:true
         }
     },
     methods:{
         run(){
             alert(this.msg)
         }
     },
 }


 </script> 
 <style scoped>
 .h2{
     color: chartreuse

 }
     
 </style>