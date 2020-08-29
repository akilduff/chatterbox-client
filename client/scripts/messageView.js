var MessageView = {

  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `)

};

// MessageView.render currently doesn't have a function call.
// what if we just put the Username, text, and roomname in there? just hard coded to see what pops out w/r/t the Mel Brooks message?