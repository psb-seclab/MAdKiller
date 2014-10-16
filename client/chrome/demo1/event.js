// This function will eventually contain some logic
// for receiving background-color values from the
// current tab.
function getBgColors (tab) {
  	// But for now, let's just make sure what we have so
  	// far is working as expected.
  	//alert('The browser action was clicked! Yay!');
  	var socket = io('http://localhost');
  	socket.on('news', function (data) {
    	console.log(data);
    	socket.emit('my other event', { my: 'data' });
  	});


}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(getBgColors);