//YOUR CODE HERE

class Box {
    constructor(color,capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = []
        this.length = 0
        this.colors = [this.color]
    }
    pack(color, length) {
        if(this.length + length > this.capacity) {
            throw new Error('nope')
        }
        this.length += length
        const box = new Box(color, length)
        this.contents.push(box)
        this.colors.push(box.color)
    }

    unpack() {
        return this.colors         
    }

}


module.exports = { Box };
