var Mynode = document.getElementsByTagName("li")
var i;
for(i=0 ; i<Mynode.length ; ++i){
    var span = document.createElement("span");
    var sym = document.createTextNode("\u00D7");
    span.className = "delete"
    span.appendChild(sym)
    Mynode[i].appendChild(span)
}

function newElement(){
    var li = document.createElement("li");
    var input = document.getElementById("adTask").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if(input === '')
    alert('Void task cannot be submitted!!')
    else{
    document.getElementById("UL").appendChild(li);
    }

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

var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'li')
       ev.target.classList.toggle('done');
},false);

var close = document.getElementsByClassName("delete");
for(i=0 ; i < close.length ; ++i){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
