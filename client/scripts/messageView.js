var MessageView = {

  renderMessage: _.template(`

        <div class="chat">
        <div class="username"><%=username%></div>
        <div class="info"><%=text%></div>
        </div>

`)

};