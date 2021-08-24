
function Game(){
	this.row=20;
	this.col=30;
	this.score=0;
	this.init()
	this.snake=new Snake();
	this.food=new Food(this);
	this.start();
	this.bindEvent();

}
Game.prototype.init=function(){
	this.dom=document.createElement("table");
	var tr,td;
	for (var i=0;i<this.row;i++)
	{
		tr=document.createElement("tr");
		this.dom.appendChild(tr);
		for(var j=0;j<this.col;j++){
			td=document.createElement("td");
			tr.appendChild(td);
		}
	}
	document.getElementById("app").appendChild(this.dom)
}
Game.prototype.clear=function(){
	for (var i=0;i<this.row;i++)
	{
		for(var j=0;j<this.col;j++){
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background="white";
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML="";
			}
			}
}
Game.prototype.setColor=function(row,col,color){
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background=color;
};
Game.prototype.setHTML=function(row,col,html){
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML=html;
};
Game.prototype.bindEvent=function(){
	document.onkeydown=function(event){
		var self=this;
		// console.log(event.keyCode,'event')//获取键盘按下左右上下的键盘码为37-40
		switch(event.keyCode){
			case 37:
			   if(game.snake.direction=='R') return;
			    game.snake.changeDirection("L");
				break;
			case 38:
			    if(game.snake.direction=='D') return;
				game.snake.changeDirection("U");
				break;
			case 39:
			    if(game.snake.direction=='L') return;
				game.snake.changeDirection("R");
				break;
			case 40:
			    if(game.snake.direction=='U') return;
				game.snake.changeDirection("D");
				break;
		}
	}
	
}
Game.prototype.start=function(){
	this.f=0
	this.timer=setInterval(function(){
		game.f++;
		document.getElementById("score").innerHTML="分数："+game.score;
		game.clear();
		var during=game.snake.body.length<30?30-game.snake.body.length:1;
		game.f%during===0 && game.snake.update();
		
		game.snake.render();
		
		game.food.render();
	},20)
}
