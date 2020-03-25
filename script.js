alert('connected')
function newElement(){
    var li = document.createElement(li);
    var input = document.getElementById(adTask).value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if(t=='')
    alert('Void task cannot be submitted!!')
    else
    document.getElementById("UL").appendChild(li);
    document.getElementById("adTask").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
   }
}