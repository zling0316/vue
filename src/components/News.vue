<template>
    <div>
        <h2>我是第二个地址组件</h2>
        <ul>
            <li>
               湖南 
            </li>
             <li>
              长沙
            </li>
             <li>
               湘潭
            </li>
        </ul>
    </div>
</template>   
 <script>
 export default{
     data(){
         return{
             msg:'我是一个首页组件'
         }
     },
     methods:{
         run(){
             alert(this.msg)
         }
     }
 }


 </script> 
 <style scoped>
 
     
 </style> 