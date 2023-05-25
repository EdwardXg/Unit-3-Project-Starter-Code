/* Declare variables below to save the different sections (divs) of your story*/
let titleplaybutton= document.querySelector("title-play-button");
let storyopening= document.querySelector(".story-opening");
let buttons = document.querySelector(".story-opening");
let optiononescreen=document.querySelector(".option-one-screen");
let optiontwoscreen=document.querySelector(".option-two-screen");
let optiononeend=document.querySelector(".option-one-end");
let optiontwoend=document.querySelector(".option-two-end");
let optionone=document.querySelector(".option-one");
let optiontwo=document.querySelector(".option-two");



optionone.onclick=function(){
	optiononescreen.style.display="block";
};

optiontwo.onclick=function(){
    optiontwoscreen.style.display="block";
};




