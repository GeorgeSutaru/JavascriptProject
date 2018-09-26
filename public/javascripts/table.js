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

function loadTable() {

    var table = $("#Marvel");

    var base_url = window.location.origin;
    var request = new XMLHttpRequest();
    $.get(base_url+'/api/issues', function (data, status) {
        // Begin accessing JSON data here
        if (status == 'success') {
            var headerRow = document.createElement('tr');
            table.append(headerRow);
            var cbColumn = document.createElement('th');
            headerRow.append(cbColumn);
            var cellNo = document.createElement('th');
            cellNo.innerHTML = data.header[0];
            headerRow.append(cellNo);
            var description = document.createElement('th');
            description.innerHTML = data.header[1];
            headerRow.append(description);
            var assignee = document.createElement('th');
            assignee.innerHTML = data.header[2];
            headerRow.append(assignee);
            data.body.forEach(record => {
                var issueClass = "description";
                if (record[3] == true) {
                    issueClass = "description solved";
                }
                var row = document.createElement('tr');
                table.append(row);
                var checkBox = document.createElement("INPUT");
                checkBox.setAttribute("type", "checkbox");
                row.append(checkBox);
                var cellNo = document.createElement('td');
                cellNo.className = issueClass;
                cellNo.innerHTML = record[0];
                row.append(cellNo);
                var description = document.createElement('td');
                description.innerHTML = record[1];
                description.className = issueClass;
                row.append(description);
                var assignee = document.createElement('td');
                assignee.className = issueClass;
                assignee.innerHTML = record[2];
                row.append(assignee);
            });
        } else {
            console.log(data + ' = ' + status );
        }
    });


    $("tr").each(function () {
        $(this).children("td.description").each(function () {
            this.innerHTML = $(this).children("textarea")[0].value;
        })
    });
}

loadTable();
function cbonclick(othis) {
  if (othis.checked == true) {
    othis.parentNode.parentNode.style.textDecoration='line-through';
  } else {
    othis.parentNode.parentNode.style.textDecoration='none';
  }
}
