document.getElementsByTagName("input")[0].oninput = function() {
    var inputValue = this.value.slice(-1);

    for(i=0;i<myArray.length;i++) {
        if(inputValue==myArray[i][0]){
            document.getElementsByTagName("span")[0].innerText += myArray[i][1];
        }
    }  
}

var f=3;

window.setInterval(function(){
  f--;

  if(f<=0) {
    f=3;
    var textoInput = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value = '';
    
    var para = document.createElement("span");
    var node = document.createTextNode("");
    para.appendChild(node);

    var child = document.getElementsByTagName("span")[0];
    document.getElementsByTagName("article")[0].insertBefore(para,child);

    var node = document.createElement("pre");                 // Create a <strong> node
    var textnode = document.createTextNode(textoInput);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <strong>
    document.getElementsByTagName("span")[1].appendChild(node);    
  }

  document.getElementsByTagName("label")[0].innerText = f;

},1000);