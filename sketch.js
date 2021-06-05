var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    // connection between program and database
    database= firebase.database()
    console.log(database)
    // two operations of database - read,write
    //  steps for reading
    var reference = database.ref("Ball/positions")
    // step2 listener: .on() or .once()
    reference.on("value",readpositions)
}
function readpositions(data){
// read the actual data using .val()
position = data.val()
ball.x = position.x
ball.y = position.y  
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
// steps for writing inside database
function changePosition(x,y){
   var reference = database.ref("Ball/positions")
   // to write the value you have 2 operations: .set() or .update()
   reference.set({x:position.x + x, y:position.y + y})
      

}
