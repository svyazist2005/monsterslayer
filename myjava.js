
new Vue({
  el:'#app',
  data:
  {player:["100","100"],
  showMenu:false,
  history:[],
  activities:["attacked","special attacked ","healed himself","gave up","restarted game","started game","Win!","Loose"],
  damage:[0,0]
},

  methods:{
    showGameMenu:function(){
      this.showMenu=!this.showMenu;
    },
    reportActivity:function(action){
      if(action==4|action==3){
      this.history.push("Player "+this.activities[action]);
      }
      else {
        this.history.push("Player "+this.activities[action]+" "+this.damage[1]);
      }
      console.log(this.history);
    },
    clearActivities:function(){
      this.history=[];
      this.player=[10,10];
      this.damage=[0,0];
    },

    attack:function(player){
      this.damage[player]=Math.ceil(Math.random()*10);
      this.player[player]-=this.damage[player]
      console.log(this.damage[player]);
    },

    heal:function(player){
      this.damage[player]=-Math.ceil(Math.random()*10);
      this.player[player]-=this.damage[player]
      console.log(this.damage[player]);
    },


    specialAttack:function(player){
      this.damage[player]=Math.ceil(Math.random()*10)*2;
      this.player[player]-=this.damage[player]
      console.log(this.damage[player]);
    },

    playerAlive:function(player){
      return this.player[player]>0;
    }

  }

})
