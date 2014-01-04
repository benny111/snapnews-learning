/*
var GameModule= (function(){
	var BallX=100,BallY=100,BallR=50;
	var maxWidth
	  , maxHeight
	  , maxR;
	function start(){
		var canvas=document.getElementById("cover");
		var ctx = canvas.getContext("2d");
		var background = Sizzle('#game')[0],
			rect = background.getBoundingClientRect();

		canvas.width = rect.width;
		canvas.height = rect.width;

		maxWidth = rect.width;
		maxHeight = rect.height;
		maxR = (rect.height > rect.width) ? rect.width / 2 : rect.height / 2;

        BallX = Math.floor(Math.random() * maxWidth);
        BallY = Math.floor(Math.random() * maxHeight);
        BallR = Math.floor(Math.random() * maxR) + 30;

		ctx.fillStyle="black";
		ctx.beginPath();
		ctx.arc(BallX,BallY,BallR,0,Math.PI *2 ,true);
		ctx.fill();

		document.getElementById("game").addEventListener("click",touchEvent,false);
	}
	function touchEvent(evt){
		console.log(evt.clientX,evt.clientY);

        var x1, 
        x2,
        y1,
        y2;

        // 四個角
		x1 = BallX - BallR;
		x2 = BallX + BallR;		
		y1 = BallY - BallR;
		y2 = BallY + BallR;	

		// 是否擊中
		if ((evt.clientX > x1) && (evt.clientX < x2)) {
			if ((evt.clientY > y1) && (evt.clientY < y2)) {

				console.log("Hit.");
			}
		}	
	}
	return {
		test :start
	}
}) ();
*/
