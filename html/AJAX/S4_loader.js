  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("S4-List").innerHTML = this.responseText;
    }
  xhttp.open("GET", "SOCKS4.html", true);
  xhttp.send();
