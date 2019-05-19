//Initial array with welcome messages

messageObj = {"messages":["Welcome to Ben's message board!", "Try entering your own message above, and click submit."], "images":[]};
messageObj.images[0] = new Image(300, 300);
messageObj.images[0].src = 'lorenzo_img.jpg';

//Adds message to the array and updates the 'ul', used on-click
function addMessage(){
    if(document.getElementById("message-box").value.length > 0){
        let input = document.getElementById("message-box");
        messageObj.messages.push(input);
        updateList();
        clearBox();
    }
}

//Still need to finish this
function addImage(){
        let image = document.getElementById('photo').value;
        messageObj.images.push(image);
        updateImg();
}


//Pops the last message from the 'ul'
function removeLastMessage(){
    if (messageObj.messages.length > 0){
        messageObj.messages.splice(-1, 1);
        updateList();
    }
}

//Clears the message box after click
function clearBox(){
    document.getElementById("message-box").value = "";
}

//Cretes a 'ul' element and loads items from the array into it
function displayMessages(){
    var list = document.createElement('ul');

    for (let i = 0; i < messageObj.messages.length; i++){
        //Creates list item
        var item = document.createElement('li');

        //Set contents
        item.appendChild(document.createTextNode(messageObj.messages[i]));

        //Add contents to the list
        list.appendChild(item);
    }
    return list;
}

function displayImages(){
    var list = document.createElement('ul');

    for (let i = 0; i < messageObj.images.length; i++){
        //Creates list item
        var item = document.createElement('li');

        //Set contents
        item.appendChild(messageObj.images[i]);
        //Add contents to the list
        list.appendChild(item);
    }
    return list;
}


//Updates the current working list
function updateList(){
    document.getElementById('messages').innerHTML = "";
    document.getElementById('messages').appendChild(displayMessages());
}

function updateImg(){
    document.getElementById('photo').innerHTML = "";
    document.getElementById('images').appendChild(displayImages());
}

//Sets the welcome message
document.getElementById('messages').appendChild(displayMessages());
document.getElementById('images').appendChild(displayImages());

