//create a WebSocket instance and start connecting to the server
		var client = new WebSocket('ws://localhost:3000');

		//when connected
		client.onopen = function(){
			console.log('connected');
		}

		//when message is received from the server
		client.onmessage = function(event){
			console.log('receive:', event.data);
		}

		client.onclose = function(){
			console.warn('disconnected');
		}

function replyMsg() {
	var hr = document.createElement("hr");
	sendBtn.setAttribute("style", "display:none");
	input.setAttribute("style", "display:none");
	objTo.appendChild(hr);
}