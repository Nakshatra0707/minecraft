var canvas = new fabric.Canvas("myCanvas");

var block_height = 30;
var block_width = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("herobrine.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == "81"){
        block_height = block_height + 10;
        block_width = block_width + 10
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
        console.log("Shift + Q pressed");
    }

    if(e.shiftKey == true && keypressed == "69"){
        block_height = block_height - 10;
        block_width = block_width - 10
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
        console.log("Shift + E pressed");
    }

    if( keypressed == "87"){
        up();
        console.log("Up");
    }

    if( keypressed == "83"){
     down();
        console.log("Down");
    }

    if( keypressed == "65"){
        left();
        console.log("Left");
    }

    if( keypressed == "68"){
        right();
        console.log("Right");
    }

    if( keypressed == "49"){
        new_image("wall.jpg");
        console.log("1");
    }

    if( keypressed == "50"){
        new_image("dark_green.png");
        console.log("2");
    }

    if( keypressed == "51"){
        new_image("unique.png");
        console.log("3");
    }

    if( keypressed == "52"){
        new_image("yellow_wall.png");
        console.log("4");
    }

    if( keypressed == "67"){
        new_image("cloud.jpg");
        console.log("C");
    }

    if( keypressed == "71"){
        new_image("ground.png");
        console.log("G");
    }

    if( keypressed == "53"){
        new_image("light_green.png");
        console.log("5");
    }

    if( keypressed == "82"){
        new_image("roof.jpg");
        console.log("R");
    }

    if( keypressed == "84"){
        new_image("trunk.jpg");
        console.log("T");
    }
    if (keypressed == "88"){
        canvas.remove(block_object);
    }
}
function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        console.log("block image height = " + block_height);
        console.log("When W is pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 460){
        player_y = player_y + block_height;
        console.log("block image height = " + block_height);
        console.log("When S is pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_width;
        console.log("block image width = " + block_width);
        console.log("When A is pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 650){
        player_x = player_x + block_width;
        console.log("block image width = " + block_width);
        console.log("When D is pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

    
