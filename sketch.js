var sizeinputwidth,sizeinputheight, button,button2

var numberWork = 0

var matrixs = []

var rows, columns

var rowed, coled
var cellWidth
function preload(){

}
function setup(){
    createCanvas(400,400)
    sizeinputwidth = createInput();
    sizeinputwidth.position(150, 65);
    
    sizeinputheight=createInput();
    sizeinputheight.position(0,65);

    button = createButton('Compare');
    button.position(sizeinputwidth.x + sizeinputwidth.width, 65);
    button.mousePressed(makeGrid);

    button2 = createButton('maxium square')
    button2.position(sizeinputwidth.x + sizeinputwidth.width, 35);
    button2.mousePressed(maximalSquare)

}

function draw() {
  
    if (numberWork == 1){
        cellWidth = width / columns;
        
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                const y = height * (r / rows);
                const x = width * (c / columns);
                fill(matrixs[r][c][1], 128, 128);
                rect(x, y, cellWidth, height);
               
                }
            }   
   
        
        }
        // maximalSquare(matrixs)
        
        // numberWork = 0
    }  
 
function makeGrid(){
    sizeinputwidthvalue = int(sizeinputwidth.value())
    sizeinputheightvalue = int(sizeinputheight.value())
    if(sizeinputwidthvalue<50 && sizeinputheightvalue<50){
        if (!isNaN(sizeinputwidthvalue && sizeinputheightvalue)) {
            
            sizeinputwidth.value('');
            sizeinputheight.value('');

            columns = sizeinputwidthvalue
            rows = sizeinputheightvalue

            matrixs.splice(0, matrixs.length)
            
            for (let r = 0; r < rows; r++) {
                matrixs[r] = [];
                for (let c = 0; c < columns; c++) {
                  matrixs[r][c] = [0,128];
                }
              }
            numberWork = 1

            
        }
        else {
            console.log('ERROR: Put in numbers you clown');
        }
    }
    else{
        console.log('Its TOO BIG')
    }
}

function mousePressed() {
    if(numberWork == 1){
        if(mouseX>0&&mouseY<400){
        const mouseR = floor(columns * (mouseY / height));
        const mouseC = floor(rows * (mouseX / width));
        matrixs[mouseR][mouseC][0] = 1;
        matrixs[mouseR][mouseC][1] = 5;
        
            
        console.log(matrixs)
        }
    }
}

function maximalSquare(){
    numberWork = 0
    cache = {}
    
    function helper(r,c){
        console.log("in")
        if(r >=rows || c>= columns){
            return 0
        }
        if(!((r,c) in cache)){
            down = helper(r+1,c)
            right = helper(r,c+1)
            diag = helper(r+1,c+1)

            cache[(r,c)] = 0
            if (matrixs[r][c][0]== 1 || matrixs[r][c][0] == "1"){
                cache[(r,c)] = 1 + Math.min(down, right, diag)
            }

        }
        return cache[(r,c)]

        
    }
   
    helper(0,0)
    console.log(cache)
    var thingy = []
    for(var key in cache){
        thingy.push(cache[key])
    }
    console.log(thingy)
    // console.log(Math.max(thingy)**2)
    
}