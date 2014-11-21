// Opens up a socket to a python server and sends information about page
function sendWebData() {
  	// Alert test for Extension test
  	console.log('The browser action was clicked! Yay!');


    var serverURL = "ws://104.131.55.173:8888/";
    //Basic websocket connection to a test server.

    var soccketConnection = new WebSocket(serverURL);

    //Send current URL
    //Sends extension ID
    sendMessage(document.URL, soccketConnection);

    //Sends url from current tab
    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        sendMessage(tablink, soccketConnection);
        console.log(tablink);
    });
}

function sendMessage(msg, socket) {
    waitForSocketConnection(socket, function() {
        socket.send(msg);
    });
}

//The browser needs a few seconds to establish a connection. Wait to send a message
function waitForSocketConnection(socket, callback){
    setTimeout(
        function(){
            if (socket.readyState === 1) {
                if(callback !== undefined){
                    callback();
                }
            } else {
                waitForSocketConnection(socket,callback);
            }
        }, 5);
}


// When the browser action is clicked, call the
// sendWebData function.
chrome.browserAction.onClicked.addListener(sendWebData);
sendWebData();