const clc = document.querySelector(".cancle");
const arr = document.querySelector(".arr-container");
const left_container = document.querySelector(".left-container");
arr.addEventListener("click", ()=>{
    arr.classList.add("active-arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});
clc.addEventListener("click", ()=>{
    arr.classList.remove("active-arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});

const clc1 = document.querySelector(".cancle1");
const arr1 = document.querySelector(".arr1");
const left_container1 = document.querySelector(".left1");
arr1.addEventListener("click", ()=>{
    arr1.classList.add("active-arr");
    if(left_container1.classList.contains("off")){
        left_container1.classList.remove("off");
        left_container1.classList.add("active");
    }
});
clc1.addEventListener("click", ()=>{
    arr1.classList.remove("active-arr");
    if(left_container1.classList.contains("active")){
        left_container1.classList.remove("active");
        left_container1.classList.add("off");
    }
});

const clc2 = document.querySelector(".cancle2");
const arr2 = document.querySelector(".arr2");
const left_container2 = document.querySelector(".left2");
arr2.addEventListener("click", ()=>{
    arr2.classList.add("active-arr");
    if(left_container2.classList.contains("off")){
        left_container2.classList.remove("off");
        left_container2.classList.add("active");
    }
});
clc2.addEventListener("click", ()=>{
    arr2.classList.remove("active-arr");
    if(left_container2.classList.contains("active")){
        left_container2.classList.remove("active");
        left_container2.classList.add("off");
    }
});

const clc3 = document.querySelector(".cancle3");
const arr3 = document.querySelector(".arr3");
const left_container3 = document.querySelector(".left3");
arr3.addEventListener("click", ()=>{
    arr3.classList.add("active-arr");
    if(left_container3.classList.contains("off")){
        left_container3.classList.remove("off");
        left_container3.classList.add("active");
    }
});
clc3.addEventListener("click", ()=>{
    arr3.classList.remove("active-arr");
    if(left_container3.classList.contains("active")){
        left_container3.classList.remove("active");
        left_container3.classList.add("off");
    }
});

const clc4 = document.querySelector(".cancle4");
const arr4 = document.querySelector(".arr4");
const left_container4 = document.querySelector(".left4");

arr4.addEventListener("click", ()=>{
    arr4.classList.add("active-arr");
    if(left_container4.classList.contains("off")){
        left_container4.classList.remove("off");
        left_container4.classList.add("active");
    }
});
clc4.addEventListener("click", ()=>{
    arr4.classList.remove("active-arr");
    if(left_container4.classList.contains("active")){
        left_container4.classList.remove("active");
        left_container4.classList.add("off");
    }
});