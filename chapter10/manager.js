window.onload = function() {
  w2 = window.open("http://www.baidu.com")
  var worker = new Worker("worker.js");
  worker.postMessage("ping");

  worker.onmessage = function(event) {
    var message = "Worker says " + event.data;
    document.getElementById("ouput").innerHTML = message;
  };
}
