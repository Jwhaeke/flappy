
function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;

    this.hits = function(bird) {
        // bird height is higher than the lowest point of the top pipe or
        // lower than the highest point of the bottom pipe
        if (bird.y < this.top || bird.y > height -this.bottom)
    }

    this.show = function() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

}