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
            });
            $(this).children("td.dropdown").each(function() {
              var dropdown = document.createElement("select");
              this.innerHTML="";
              this.appendChild(dropdown);
                var base_url = window.location.origin;
                $.get(base_url+'/api/users', function (data, status) {
                    data.users.forEach(record => {
                      var option = document.createElement("option");
                      option.setAttribute("value",record);
                      option.innerHTML=record;
                      dropdown.appendChild(option);
                    });
                });
          });
     })
    editable=true;
    }
}

function loadTable() {

    var table = $("#Marvel");

    var base_url = window.location.origin;
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
                if (record[3] == true) {
                    checkBox.checked = true;
                    row.style.textDecoration='line-through';
                } else {
                    row.style.textDecoration='none';
                }
                checkBox.addEventListener("click", function() {
                    if (this.checked == true) {
                        this.parentNode.style.textDecoration='line-through';
                    } else {
                        this.parentNode.style.textDecoration='none';
                    }
                });
                var cellNo = document.createElement('td');
                cellNo.className = issueClass;
                cellNo.innerHTML = record[0];
                row.append(cellNo);
                var description = document.createElement('td');
                description.innerHTML = record[1];
                description.className = issueClass;
                row.append(description);
                var assignee = document.createElement('td');
                assignee.className = "dropdown";
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