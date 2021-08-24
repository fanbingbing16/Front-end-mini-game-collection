function Snake(){
	this.body=[
		{"row":3,"col":7},
		{"row":3,"col":6},
		{"row":3,"col":5},
		{"row":3,"col":4}
	];
	this.direction="R";
	this.willDirection="R"
}
Snake.prototype.update=function(){
	this.direction=this.willDirection;
	switch(this.direction){
		case "R":
		    this.body.unshift({"row": this.body[0].row, "col":this.body[0].col+1});
		    break;
		case "D":
		    this.body.unshift({"row": this.body[0].row+1, "col":this.body[0].col});
		    break;
		case "L":
			this.body.unshift({"row": this.body[0].row, "col":this.body[0].col-1});
			break;
	    case "U":
	    	this.body.unshift({"row": this.body[0].row-1, "col":this.body[0].col});
	    	break;
	}
	if(this.body[0].col>game.col-1||this.body[0].row>game.row-1||this.body[0].row<0||this.body[0].col<0){
		alert("游戏结束了，您当前的得分为："+game.score+",再玩一局突破自己吧")
		this.body.shift()
		clearInterval(game.timer)
	}
	for(var i=1;i<this.body.length;i++){
		if(this.body[0].col===this.body[i].col && this.body[0].row===this.body[i].row){
			alert("游戏结束了，您当前的得分为："+game.score+",再玩一局突破自己吧")
			this.body.shift()
			clearInterval(game.timer)
		}
	}
	if(this.body[0].row===game.food.row && this.body[0].col===game.food.col){
		// this.body.push({"row":this.body[this.body.length].row-1,"col":this.body[this.body.length].col-1})
		game.food=new Food(game)
		game.score+=5;
		game.f=0;
		
	}else{
		this.body.pop()
	}
	
	

	
};
Snake.prototype.changeDirection=function(d){
	this.willDirection=d;
}
Snake.prototype.render=function(){
	game.setColor(this.body[0].row,this.body[0].col,'skyblue');
	for(var i=1;i<this.body.length;i++){
		game.setColor(this.body[i].row,this.body[i].col,'cyan')
	}
}