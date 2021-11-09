function swap(a,b){
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}
// Disable sorting buttons 
function disableSortingBtn(){
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".insert").disabled = true;
    document.querySelector(".merge").disabled = true;
    document.querySelector(".quick").disabled = true;
    document.querySelector(".selection").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".insert").disabled = false;
    document.querySelector(".merge").disabled = false;
    document.querySelector(".quick").disabled = false;
    document.querySelector(".selection").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#size").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".new").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".new").disabled = false;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#size');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createarray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array=[];

createarray();
function createarray(addbars){

    deleteChild();
    array=[];
    for(let i=0;i<addbars;i++){
    array.push(Math.floor(Math.random()*100)+1);
    }
    console.log(array);
    const bars = document.querySelector("#bars");

    for (let i = 0; i < addbars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*4}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".new");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createarray(arraySize.value);
});   