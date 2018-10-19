
new Vue({
  el:'#app',
  data:
  {player:[100,100],
  showMenu:false,
  history:[],
  activities:["attacked","special attacked ","healed himself","gave up","restarted game","started game"],
  players:["Player", "Monster"],
  damage:[0,0]
},

  methods:{

    pw:function(player){
      return {width:this.player[player]*3+"px"}
    },

    showGameMenu:function(){
      this.showMenu=!this.showMenu;
    },

    reportActivity:function(player,action){
      if(action==4|action==3|action==5){
      this.history.push(this.players[player]+" "+this.activities[action]);
      }
      else {
        this.history.push(this.players[player]+" was "+this.activities[action]+" on points "+this.damage[player]);
      }
    },
    clearActivities:function(){
      this.history=[];
      this.player=[100,100];
      this.damage=[0,0];
    },

    attack:function(player){
      this.damage[player]=Math.ceil(Math.random()*10);
      this.player[player]-=this.damage[player]
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
    },

    lifeBar:function(player){
      return {width:this.player[player]*3+'px'}
    }

  }

})
