//封装操作，localstorage 本地存储的方法，模块化文件
//封装方法


var storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key);

    }

}
//把storage 暴露出去
export default storage;