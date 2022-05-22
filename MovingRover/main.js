canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_mars_3.jpg", "nasa_image_4.jpg"];

random_number =  Math.floor(math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
console.log("background_image = " + background_image);


rover_image = "rover.png";


rover_x = 10;
rover_y= 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{

    ctx.drawImage(background_imgTag, 0,0 ,canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
} 

window.addEventListener("keydown",my_keydown);

function my_keydown(){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
      up();
      console.log("up");
    }
    if(keyPressed == "40"){
      down();
      console.log("down");
}
    if(keyPressed == "37"){
     left();
     console.log("Left");
    }
    if(keyPressed == "39"){
      right();
      console.log("Right");
}
}

function up()
{
  if(rover_y >=0)
  {
    rover_y = rover_y - 10
    console.log("When Up arrow is pressed, x =" + rover_x + " | y = " +rover_y);
    uploadBackgroung();
    uploadrover();
  }
}

function down()
{
  if(rover_y < 500)
  {
    rover_y = rover_y + 10
    console.log("When down arrow key is pressed, x =" + rover_x + " | y = " + rover_y);
    uploadBackground();
    uploadrover();
  }
}

function left()
{
  if(rover_x > 0)
  {
   rover_x = rover_x - 10 
   console.log("When Left arrow key is pressed, x =" + rover_x + " | y = " + rover_y );
   uploadBackground();
   uploadrover();
  }
}

function right()
{
  if(rover_x < 700)
  {
   rover_x = rover_x + 10 
   console.log("When right arrow key is pressed, x =" + rover_x + " | y = " + rover_y );
   uploadBackground();
   uploadrover();
  }
}
