var editable=false;
function editTable(){
    if (editable==true){
        $("tr").each(function() {
            $(this).children("td.description").each(function(){
                this.innerHTML = $(this).children("textarea")[0].value;
            })
        });
        editable=false;
    } else {
        $("tr").each(function() {
                $(this).children("td.description").each(function(){
                    var descriptionTextarea = document.createElement("textarea");
                    var descriptionTextNode = document.createTextNode(this.innerHTML);
                    descriptionTextarea.appendChild(descriptionTextNode);
                    this.innerHTML = "";
                    this.appendChild(descriptionTextarea);
                })
        });
        editable=true;
    }
}

function cbonclick(othis) {
  if (othis.checked == true) {
    othis.parentNode.parentNode.style.textDecoration='line-through';
  } else {
    othis.parentNode.parentNode.style.textDecoration='none';
  }
}
