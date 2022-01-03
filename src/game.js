import Player from "./player";
import Obstacles from "./obstacles";
import Background from "./background";
import Mothership from "./mothership";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.background = new Background(this.dimensions, this.ctx);
        this.mothership = new Mothership(this.ctx)
        // this.obstacles = []
        this.player = new Player(this.ctx)
        // this.recieveKeys();
        
        this.restart();
    }

    play() {
        this.running = true;
        this.animate();
    }

    restart() {
        this.altitude = 50000;
        // this.player = new Player();

        this.animate();
        // this.scroll()
    }

    // recieveKeys(e){
    //     if (!this.running) {
    //         this.play()
    //     }
    //     // ADD EVENT LISTENERS - left, right, space
    // }

    // gameOver() {
        //IF Altitude = 0  || collision detected
        //altitude method should be in...?
        // collision method in obsticals       
    // }

    animate(){
        this.background.animate()
        this.mothership.animate()
        this.player.animate()
        // this.obstacles.animate(this.ctx)
        // this.drawAltitude()
        // if (this.gameOver()) {
        //     alert(this.altitude) //ADD WIN/ LOSE
        // }
    }

    // win(){
    
    // }
    // lose(){

    // }

    // drawAltitude(){
    //     this.ctx.font = "bold 20pt serif";
    //     this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    //     this.ctx.fillText(this.score, 550, 10);
    //     this.ctx.strokeStyle = "black";
    //     this.ctx.lineWidth = 2;

    // }
    
}


export default Game;