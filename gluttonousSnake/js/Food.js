function Food(gameSnake){
	var self=this;
	do{
		this.row=parseInt(Math.random() * gameSnake.row);
		this.col=parseInt(Math.random()*gameSnake.col);
	}while(function(){
		for(var i=0;i<gameSnake.snake.body,length;i++){
			if(gameSnake.snake.body[i].row===game.food.row && gameSnake.snake.body[i],col===game.food.col){
				return true;
			}else{
				return false;
			}
		}
	}());
	
	console.log(this.row,this.col)
}
Food.prototype.render=function(){
	game.setHTML(this.row,this.col,"eat")
}