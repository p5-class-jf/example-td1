// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 4000,
    Random_Seed: 0,
    Dispersion: 0.14,
    Opacity: 20,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 5000, 1)
gui.add(params, "Dispersion", 0, 0.5, 0.0001)
gui.add(params, "Opacity", 0, 255, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    background('#00d0ff')
    noStroke()
    fill(255, 255, 255, params.Opacity)
    translate(width/2, height/2)
    for (let i = 0; i < params.N; i++) {
        const angle = random(TWO_PI)
        const radius = randomGaussian(0, width * params.Dispersion)
        ellipse(radius * cos(angle), radius * sin(angle), 30)
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}