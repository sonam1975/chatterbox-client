var RoomsView = {

  $button: $('#rooms #button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRooms: _.template(`

        <div id="rooms">
        <div class="rooms"><%=roomname%></div>

        </div>

`),

  renderRoom: function(inputMsg) {

    var html = RoomsView.renderRooms(inputMsg);
    this.$select.append(html);

  }
};