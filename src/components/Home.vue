<template>
  <div id="home">
      首页组件
  <!-- <div>
          <v-news></v-news>
         <br>
         <hr>
       <v-life v-if="flag"></v-life>     
       <br>
       <br>
       <br>
       <button @click="flag=!flag">挂载以及卸载life组件</button>   
    </div> -->
    <div>
       <button @click="getData()">请求数据</button>
       <hr>
       <br>
       <ul>
           <li v-for="item in list" :key="item.id" >
               {{item.title}}
           </li>
       </ul>
    </div>

 </div>
  
</template>
 <script>
 //引入组件
import News from './News.vue';
import Lify from './Lify.vue';
import { error } from 'util';
 export default{
      components:{
     'v-news':News,
     'v-life':Lify,
  
},   
     data(){
         return{
             msg:'我是一个首页组件',
             flag:true,
             list:[],
         }
     },
     /*生命周期函数*/
     mounted(){
         this.getData();

     },
     methods:{
         run(){
             alert(this.msg)
         },
        //  getData(){
        //      var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
        //      this.$http.get(api).then(function(response){
        //          console.log(response)
        //      },function(err){
        //          console.log(err)
        //      })
        //  },
           getData(){
             var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
             this.$http.get(api).then((response)=>{
                 console.log(response)
                 //注意this指向
                 this.list=response.body.result;

             },function(err){
                 console.log(err)
             })
         },
     },
 }


 </script> 
 <style scoped>
 .h2{
     color: chartreuse

 }
     
 </style>