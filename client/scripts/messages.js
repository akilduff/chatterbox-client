var Messages = {

  parse: function(data) {
    var listOfMessages = [];
    console.log(data.results);
    for (var i = 0; i < data.results.length; i++) {
      var message = {};
      message.username = data.results[i].username;
      message.text = data.results[i].text;
      message.roomname = data.results[i].roomname;
      // console.log(data.results[i]);
      listOfMessages.push(message);
    }

    return listOfMessages;
    console.log(listOfMessages);

  }
};

// list of messages

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// var messages = Messages.parse(data)
// render(messages[0]);