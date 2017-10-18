var sides1 = 5;
var circumradius1 = 3.7;
var sides2 = 100;
var circumradius2 = 1.0;

function solve(sides, circumradius) {
    // measure the angle from one vertext to the next (and convert from degree to radians)
    var angleD = 360.0 / sides;
    var angleR = angleD * (Math.PI / 180.0);
    
    // set a point on the x-axis
    var x1 = circumradius;
    var y1 = 0.0;
    
    // rotate (x1, y1) around the origin - https://academo.org/demos/rotation-about-point/
    var x2 = x1 * Math.cos(angleR) - y1 * Math.sin(angleR);
    var y2 = y1 * Math.cos(angleR) + x1 * Math.sin(angleR);
    
    // calculate the distance between (x1, y1) and (x2, y2) using Pythagorean theorem
    var c = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    
    return sides * c;
}