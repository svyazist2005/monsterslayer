new Vue({
  el:'#app',
  data:
  {you:100,
  monster:100,
  showMenu:false,
  history:[],
  activities:["attacked","special attacked ","healed himself","gave up","started game"]},

  methods:{
    showGameMenu:function(){
      this.showMenu=!this.showMenu;
    },
    reportActivity:function(action){
      this.history.push("Player "+this.activities[action]);
      console.log(this.history);
    },
    clearActivities:function(){
      this.history=[];
    }
  }
})
