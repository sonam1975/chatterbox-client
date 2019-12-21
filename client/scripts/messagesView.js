var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(inputMsg) {
    Messages.messageArr.push(inputMsg);
    var html = '';
    for (var i = 0; i < Messages.messageArr.length; i++) {
      html += MessageView.renderMessage(Messages.messageArr[i]);
    }

    this.$chats.append(html);
  }

};