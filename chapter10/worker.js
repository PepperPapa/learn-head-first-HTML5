/*
// below comment is for pingpong.html
onmessage = pingPong;
function pingPong(event) {
    if (event.data == "ping") {
      postMessage("Pong");
    }
}*/

importScripts("workerlib.js");
onmessage = function (task) {
  var workerResult = computeRow(task.data);
  postMessage(workerResult);
}
