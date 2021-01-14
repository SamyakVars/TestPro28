class Stone{

    constructor(x, y, r, pointB){

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        

        this.body = Bodies.circle(x, y, r, options)

        this.r = r
        this.pointB = pointB

        World.add(world, this.body)

        var conOptions = {
            bodyA: this.body,
            pointB: pointB,
            stiffness: 0.004
        }
        this.constraint = Constraint.create(conOptions)
        World.add(world, this.constraint)
    }

    fly(){
        this.constraint.bodyA = null
    }

    attach(body){
        this.constraint.pointB = body

    }

    display(){
        var pos = this.body.position;

        if(this.constraint.bodyA){
            line(pos.x, pos.y, this.pointB.x, this.pointB.y)
        }
        fill(0)

        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r)
        

    }

    
}