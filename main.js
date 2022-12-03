
var last_position_of_x, last_position_of_y;
var mouse_event=""



canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 2;

screen_width=screen.width
screen_height=screen.height

if(screen_width<992){
canvas.width=screen_width-100;
canvas.height=screen_height-300;
document.body.style.overflow="hidden" 
}


canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){

last_position_of_x= e.touches[0].clientX- canvas.offsetLeft
last_position_of_y= e.touches[0].clientY- canvas.offsetTop
}

canvas.addEventListener("touchmove", mytouchmove)


function mytouchmove(e){
current_position_of_x= e.touches[0].clientX- canvas.offsetLeft
current_position_of_y= e.touches[0].clientY- canvas.offsetTop

ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=width_of_line

ctx.moveTo(last_position_of_x,last_position_of_y)
ctx.lineTo(current_position_of_x,current_position_of_y)


ctx.stroke()


last_position_of_x= current_position_of_x
last_position_of_y= current_position_of_y

}

canvas.addEventListener("mouseup", mouse_up)


function mouse_up(){
    mouse_event="mouseup"
}

canvas.addEventListener("mousedown", mouse_down)


function mouse_down(){
    mouse_event="mousedown"
}

canvas.addEventListener("mouseleave", mouse_leave)


function mouse_leave(){
    mouse_event="mouseleave"
}

canvas.addEventListener("mousemove", mouse_move)


function mouse_move(e){
     current_position_of_x=e.clientX-canvas.offsetLeft
     current_position_of_y=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width_of_line
        
        ctx.moveTo(last_position_of_x,last_position_of_y)
        ctx.lineTo(current_position_of_x,current_position_of_y)
        
        
        ctx.stroke()  

    }
    last_position_of_x= current_position_of_x
    last_position_of_y= current_position_of_y
}

