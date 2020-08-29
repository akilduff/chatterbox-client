var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  // standard username unless otherwise stated
  // appended to end of chatterbox html file

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log("data", data);

      Rooms.parse(data);
      var allMessages = Messages.parse(data);
      var singleMessage = allMessages[0];

      callback();
    });
  },
  // asking if result of server request is either success or error ?

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
