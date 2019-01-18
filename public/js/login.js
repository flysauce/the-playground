/**
 * grab username and password from dom and send to server as JSON
 */
function send_login_information() {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let login = {"username":username, "password":password}
  // console.log(login)
  let loginJSON = JSON.stringify(login)
  // console.log(loginJSON)
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/login", true)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(loginJSON)
  // if recieve false
  xhr.onreadystatechange = function() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
      // console.log('ajax finished')
      // console.log(xhr.responseText)
      if(xhr.responseText === 'true') {
        window.location = "/login-success"
        // console.log('here')
      }
      else {
        alert('login failed')
        // console.log('there')
      }
    }
  }
}