var MessageView = {

  renderMessage: _.template(`

      <div class="chat">
        <div class="username"><%=username%></div>

        <p class="info"><%=text%></div>

      </div>

    `),
  renderRoom: _.template(`
  <div id="rooms">
        <button><%=%><button>

        <p class="info"><%=text%></div>

      </div>
    `)

};