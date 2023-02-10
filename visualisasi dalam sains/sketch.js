function setup() {
    // put setup code here
    createCanvas(400,400);
    background(100,80,55);

    x1 = 20;
    y1 = 370;

    x2 = 370;
    y2 = 37;

    x = 164;
    y = 189;

    a = 120;
    b = 150;

    e = 65;
    f = 68;
    k = 0;

    panjangpersegi = 120;
    lebarpersegi = 90;
}


function draw() {
    // put drawing code here
    line(x1,y1,x2,y2)
    strokeWeight(2);

    fill(200,150,200)
    rect(x, y, panjangpersegi, lebarpersegi);

    fill("YELLOW")
    ellipse(a, b, panjangpersegi - 30 * Math.sin(PI/10*k), lebarpersegi);
    k+=1

    fill("MAGENTA")
    arc(e, f, panjangpersegi, lebarpersegi, 0, 2*PI *a/b);
    for (var j=10; j<=390;j++){
        c = j
        d = 350+ 30 * Math.sin(PI/10*c)
        point(c,d)
    }
}