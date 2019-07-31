var listA = document.getElementsByTagName("a");                                     //Selecciona todos los <a>

window.onload = function() {                                                        //Asigna delay de <a>
  for (var i=0; i<listA.length; i++)
    listA[i].style.animationDelay = i*20+"ms";  
}

document.addEventListener('keydown', logKey);                                       //Activa escucha de teclado

function logKey(e) {
  var bi;
  document.getElementsByTagName("div")[0].innerText = e.key;
  
  for(i=0; i<myArray.length; i++) {
    if(e.key == myArray[i][0]) {
      bi = myArray[i][1];
      document.getElementsByTagName("label")[0].innerText = bi;
    }
  }
    
  function veamos(top) {
    for (var i=0; i<listA.length; i++) {
      (function (i) {
        setTimeout(function () {
          listA[i].style.top = "-"+top+"px";
        }, 2*i);
      })(i);
    }
  }
  
  for(var j=0; j<bi.length; j++) {
    (function(j) {
      var k = bi.slice(j,j+1);
      setTimeout(function() {            
        if(k == 1) {
          veamos(60);
        } else {
          veamos(0);
        }
      },200*j)
    })(j)
  }
}

document.getElementsByTagName("textarea")[0].oninput = function() {
  var inputValue = this.value.slice(-1);

  for(i=0;i<myArray.length;i++) {
    if(inputValue == myArray[i][0]) {
      document.getElementsByTagName("code")[0].innerText += myArray[i][1];
    }
  }  
}

/*
for (var i = 0; i < 8; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
     }, 1000*i);
    })(i);
   };
*/