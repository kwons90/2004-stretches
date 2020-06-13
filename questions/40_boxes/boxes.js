//YOUR CODE HERE

class Box {
    constructor(color,capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = []
    }
    pack(color, length) {
        const box = new Box(color, length)
        this.contents.push(box)
    }
}


module.exports = { Box };
