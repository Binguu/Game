var USERS = [
  {
    'username': 'abc123',
    'password': 'test',
  },
];

function validateLogin() {
  var username = document.getElementsByTagName('input')[0].value;
  var password = document.getElementsByTagName('input')[1].value;
  var invalid = document.getElementsByTagName('p')[0];

  for (var i = 0; i < USERS.length; i++) {
    if (username == USERS[i].username && password == USERS[i].password) {
      window.open('./start.html', '_self');
    } else {
      invalid.style.visibility = 'visible';
    }
  }
}
