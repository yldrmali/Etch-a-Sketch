const container = document.createElement('div');
let grid = document.querySelector('.grid');
container.id = "container";
grid.appendChild(container);

function CreateGrid(cell) {
    container.style.width = '540px';
    container.style.height = '540px';
    container.style.gridTemplateRows = `repeat(${cell}, auto)`;
    container.style.gridTemplateColumns = `repeat(${cell}, auto)`;
    for (let i = 0; i < (cell * cell); i++) {
        let box = document.createElement('div');
        box.className = "box";
        box.style.width = "auto";
        box.style.height = "auto";
        container.appendChild(box);
    }

}
//gray() function will be executed as default function.
CreateGrid(16);
gray();

let y = document.querySelectorAll('.btn');
y.forEach(button => {
    button.addEventListener('click', () => {
        let choice = button.innerHTML;
        switch (choice) {
            case "rainbow":
                rainbow();
                break;
            case "gray":
                gray();
                break;
            case "resize":
                resize();
                break;
        }
    });
})


function rainbow() {
    let rainbow = document.querySelectorAll('.box');
    let colorArray = ["tomato", "orange", "dodgerblue", "mediumseagreen", "gray", "slateblue", "violet", "lightgray"];
    const colorlength = colorArray.length;
    let randomNum = Math.floor(Math.random() * colorlength);
    rainbow.forEach(smallbox => {
        smallbox.addEventListener('mouseenter', () => {
            //This is an alternative for random color selection for rainbow function
            /*let redRandom = Math.floor(Math.random() * 255);
            let greenRandom = Math.floor(Math.random() * 255);
            let blueRandom = Math.floor(Math.random() * 255);
            smallbox.style.backgroundColor = `rgb(${redRandom},${greenRandom},${blueRandom})`;*/
            let randomNum = Math.floor(Math.random() * colorlength);
            smallbox.style.backgroundColor = colorArray[randomNum];
        });

    });


}

function gray() {
    let colorBlack = document.querySelectorAll('.box');
    colorBlack.forEach(smallbox => {
        smallbox.addEventListener('mouseenter', () => {
            smallbox.style.backgroundColor = "gray";
        });
    })
}


//remove Grid() must be added to resize(). Otherwise newly created divs will be in disarray and divs will be accumulating.
function resize() {
    let a = prompt('what is your value');
    cell = a;
    removeGrid();
    CreateGrid(cell);
    gray();

}


function removeGrid() {
    let rmBox = document.querySelectorAll('.box');
    rmBox.forEach(element => {
        element.parentNode.removeChild(element);
    });
};