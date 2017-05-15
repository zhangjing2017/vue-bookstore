<template>
  <div>
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名:<span v-show="!flag">{{book.bookName}}</span>
          <input type="text" v-model="book.bookName" v-show="flag">
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          价格:<span v-show="!flag">{{book.bookPrice | currency('￥')}}</span>
          <input type="text" v-model="book.bookPrice" v-show="flag">
          <button type="button" class="btn btn-danger" @click="remove" v-show="!flag">删除</button>
          <button type="button" class="btn btn-warning" @click="changeFlag" v-show="!flag">修改</button>
          <button type="button" class="btn btn-primary" @click="update" v-show="flag">确认修改</button>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    filters:{
      currency(input,param1){  //默认是个函数
        return param1+input;
      }
    },
    created(){
      //页面一加载 需要获取数据 获取id对应的数据
     this.id=this.$route.params.id;
     this.$http.get('/book?id='+this.id).then((res)=>{  //向后台发送请求   /detail/1  =>1
         this.book=res.body;
     })
    },
    data(){
      return {
        book:{
            bookName:'',
          bookCover:'',
          bookPrice:''
        },
        id:'',
        flag:false  //默认不显示输入框
      }
    },
    components: {},
    methods: {
        remove(){
            this.$http.delete('/book?id='+this.id).then(()=>{
                this.$router.push('/list'); //push跳转路由
            })
        },
      changeFlag(){
            this.flag=!this.flag;
      },
      update(){  //通过url传递id  数据通过请求体传递
        //服务端调用res.end就会触发then中的成功的回调
       this.$http.put('/book?id='+this.id,this.book).then(()=>{
           this.flag=false;  //vueresouce将then中的this处理掉了，默认指向的当前组件
       })
      }
    }
  }
</script>
<style scoped>
  img{
    width: 150px;
    height: 200px;
  }
</style>
