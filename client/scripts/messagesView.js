var MessagesView = {

  $chats: $('#chats'),

  initialize: function(input) {

  },

  renderMessage: function(inputMsg) {

    // Messages.messageArr.push(inputMsg);
    var html = MessageView.renderMessage(inputMsg);
    // for (var i = 0; i < Messages.messageArr.length; i++) {
    //   html += MessageView.renderMessage(Messages.messageArr[i]);
    // }
    this.$chats.append(html);

  }

};