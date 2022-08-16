// top-bar background slide
var imgArr = ["bg111.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];
var i=0;

setInterval(changeBgImage,5000);

function changeBgImage(){
  document.getElementById("top-bar").style.backgroundImage = "url(images/"+imgArr[i+1]+")";
  i++;
  if(i==4){
    i=-1;
  }
}



// view full gallery popup
var popupImg = ["popup1.jpg","popup2.jpg","popup3.jpg","popup4.jpg","popup5.jpg","popup6.jpg","popup7.jpg","popup8.jpg","popup9.jpg","popup10.jpg"];
var slideIndex = 0;
document.getElementById("pop").addEventListener('click',function(){
  document.getElementById("popup").style.display='block';
});

document.getElementsByClassName("popup-prev")[0].addEventListener('click', prevImg);
document.getElementsByClassName("popup-next")[0].addEventListener('click', nextImg);

// on click left btn
function prevImg(){
  if(slideIndex==0){
    slideIndex = popupImg.length-1;
    document.getElementsByClassName("popup-img")[0].setAttribute('src','images/'+popupImg[slideIndex]);
  }
  else{
    document.getElementsByClassName("popup-img")[0].setAttribute('src','images/'+popupImg[slideIndex-1]);
    slideIndex--;
  }
}

// on click right btn
function nextImg(){
  if(slideIndex==popupImg.length-1){
    slideIndex = 0;
    document.getElementsByClassName("popup-img")[0].setAttribute('src','images/'+popupImg[slideIndex]);
  }
  else{
    document.getElementsByClassName("popup-img")[0].setAttribute('src','images/'+popupImg[slideIndex+1]);
    slideIndex++;
  }
}

//on click close button
document.getElementsByClassName("popup-close-btn")[0].addEventListener('click', function(){
  document.getElementById("popup").style.display='none';
})
