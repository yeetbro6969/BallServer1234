var Ball;

var database, Position;

var BallPosition;

function setup(){
    database = firebase.database();
    BallPosition = database.ref("Ball/Position");
    BallPosition.on("value", readPosition, showError);
    createCanvas(500,500);
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(Position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-0.0000001,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(+0.0000001,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-0.0000001);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+0.0000001);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        "x": Position.x+x,
        "y": Position.y+y
     })
}
function readPosition(data){
Position = data.val();
Ball.x = Position.x;
Ball.y = Position.y;
}
function showError(
){

}