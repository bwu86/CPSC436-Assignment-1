//Initial array with welcome messages
var messageArr=["Welcome to Ben's message board!", "Try entering your own message above, and click submit."];
var imgArr=[];
//Adds message to the array and updates the 'ul', used on-click
function addMessage(){
    if(document.getElementById("message-box").value.length > 0){
        let input = document.getElementById("message-box").value;
        messageArr.push(input);
        updateList();
        clearBox();
    }
}

//Still need to finish this
function addImage(){
    var fileinput = document.getElementById("photo");
    var filename = fileinput.value;
}

//Pops the last message from the 'ul'
function removeLastMessage(){
    if (messageArr.length > 0){
        messageArr.splice(-1, 1);
        updateList();
    }
}

//Clears the message box after click
function clearBox(){
    document.getElementById("message-box").value = "";
}

//Cretes a 'ul' element and loads items from the array into it
function displayMessages()
{
    var list = document.createElement('ul');

    for (var i = 0; i < messageArr.length; i++){
        //Creates list item
        var item = document.createElement('li');

        //Set contents
        item.appendChild(document.createTextNode(messageArr[i]));

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

//Sets the welcome message
document.getElementById('messages').appendChild(displayMessages());
