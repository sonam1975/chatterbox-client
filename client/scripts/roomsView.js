var RoomsView = {

  $button: $('#rooms #button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(inputMsg) {
    Rooms.roomsArr(inputMsg);

  }
};