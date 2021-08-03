class Chain {
    constructor(b1,b2,px,py) {

        this.px = px;
        this.py = py;
        var options = {
            bodyA: b1,
            bodyB: b2,
            pointB:{x:px, y:py},
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(options);
	    World.add(world, this.chain);

    }
    display(){
        line(this.chain.bodyA.position.x + this.px, this.chain.bodyA.position.y + this.py, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }


}