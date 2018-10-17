new Vue({
  el:'#app',
  data:
  {you:100,
  monster:100,
  showMenu:false},
  methods:{
    showGameMenu:function(){
      this.showMenu=!this.showMenu;
    }
  }
})
