'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
 let mycar;
 let keys;
 let speed = 5;
function preload() {
        Game.stage.backgroundColor= "#FF00FF";
        Game.load.image("benz","Images/benz.jpg")
        keys = Game.input.keyboard.createCursorKeys();
}

function create() {
    mycar = Game.add.sprite(500,0,"benz");
    mycar.x = 200;
    car.y = 100;
    mycar.height = 100;
    mycar.width = 200;
    /*let pic1 = game.add.sprite(0,0,"benz");
    console.log("width x:" + pic1.width);
    console.log("width x:" + pic1.heigth);
    pic1.scale.x = 0.2;
    pic1.scale.x = 0.2;
    console.log("width x:" + pic1.width);
    console.log("width x:" + pic1.heigth);*/
}

function update() {
    if(keys.right.isDown){
        mycar.x+=speed;
    }
        if(keys.left.isDown){
            mycar.x-=speed;
        }
        if(keys.up.isDown){
            mycar.y-=speed;
        }
            if(keys.right.isDown){
                mycar.y+=speed;
}
}
