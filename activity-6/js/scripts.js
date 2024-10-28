// Array to store messages
var messages = [];

//Message Type lookup oobject
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed Data
var data = [
    {
        type: messageType.out,
        user: 'Steve',
        message: 'Yo Nick! What is happening?'
    },
    {
        type: messageType.in,
        user: 'Nick',
        message: 'Hi Steve, not much just doing some homework. How about you?'
    },
    {
        type: messageType.out,
        user: 'Steve',
        message: 'Typical Nick, you are such a nerd!'
    }
];

//Message Contstructor Function
class Message {
    constructor(type, user, message) {
        this.type = type;
        this.user = user;
        this.message = message;
    }
}

//Function to create and return an element for supplied message.
function createMessageElement(message) {
    //Create text element for message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    // Create element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler. Add new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set message var correctly
    switch (event.target.id) {
        case 'send-button':
            user = 'Steve';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Nick';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //create new message
    if (messageInput.value != '') {
        //construct message and add to array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // create a message element
        var el = createMessageElement(message);

        // add message element to the DOM
        messagesContainerEl.appendChild(el);

        //Reset input
        messageInput.value = '';

    }
}
//load seed data from data array
function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //load with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

//initializing function
var init = function() {
    //wire event handlets
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load seed data from data array
    loadSeedData();
};

init();