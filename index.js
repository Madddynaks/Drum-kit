for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        let text = this.innerHTML;
        Makesound(text);
        Animation(text);
    });
}

document.addEventListener("keydown",function(event){
    Makesound(event.key);
    Animation(event.key);
})
function Makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

    }
}
function Animation(currentkey){
    let pressed_b = document.querySelector("." + currentkey);
    pressed_b.classList.add("pressed");
    setTimeout(function(){
        pressed_b.classList.remove("pressed");
    },100);
}