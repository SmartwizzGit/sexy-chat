function Message (author, content) {
  this.author = author;
  this.content = content;
  this.timestamp = new Date().getTime();
}

$('button').click(handleMyMessages);
$(window).keypress(function (e) {
  if (e.keyCode == 13 && $('input').is(':focus')) {
    handleMyMessages();
  }
});

function handleMyMessages () {
  let messageBox = $('.messages');
  let msgContent = $('input').val();
  let newMsg = new Message ('me', msgContent);
  let bubble = $('<div class="bubble"></div>');
  bubble.text(newMsg.content);
  messageBox.append(bubble);
  $('input').val('');
  setTimeout(function () {
    $.ajax(settings);
  }, 1500);
}

function handleApiMessages (result) {
  let newMsg = new Message (result.author, result.quote);
  let messageBox = $('.messages');
  let reply = $('<div class="reply"></div>');
  reply.html(`<span class='author'>${newMsg.author} answered:</span><br>${newMsg.content}`);
  messageBox.append(reply);
}

const settings = {
  url: 'http://quotes.stormconsultancy.co.uk/random.json',
  type: 'GET',
  success: function (result) {
    handleApiMessages(result);
  }
};
