function loadNavigationBar(){
    var navigationBar = document.getElementById('navigationBar');
    var base_url = window.location.origin;
    $.get(base_url+'/api/navigationBar', function (data, status) {
        if (status == 'success') {
            data.navigationBar.forEach( record => {
                var navigationItem = document.createElement("li");
                var ancora= document.createElement("a");

                ancora.setAttribute("href", record.url);
                ancora.innerHTML = record.name;

                navigationItem.appendChild(ancora);
                navigationBar.appendChild(navigationItem);
            });
        }
    });
}

loadNavigationBar();