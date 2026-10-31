/*Name this external file gallery.js*/
const x= document.getElementById("image");

function upDate(previewPic){ 
  console.log("upDate")
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage= "url('"+ previewPic.src +"')";
  }

function unDo(){
  console.log("unDo")
  x.innerHTML="Hover over an image below to display here.";
  x.style.backgroundImage= "url('')";
  
  }


const imge=document.getElementsByClassName("preview")

for(let i=0; i<imge.length; i++) {
  imge[i].setAttribute("tabindex", "0");
  imge[i].addEventListener("mouseover", ()=>upDate(imge[i]));
  imge[i].addEventListener("mouseout", ()=>unDo());
  imge[i].addEventListener("focus", ()=>upDate(imge[i]));
  imge[i].addEventListener("blur", ()=>unDo());
}

