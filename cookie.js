function setCookieAjax(){
  $.ajax({
    url: `${Web_Servlet}/setCookie`,
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    headers: { 'Access-Control-Allow-Origin': '*',
               'username': getCookie("username"),
              'session': getCookie("session")
    },
    type: 'GET',
    success: function(response){
      setCookie("username", response.name, 30);
      setCookie("session", response.session, 30);}
  })
}

function setCookie(cname, cvalue, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

export const getUserName = (component) => {
    setCookieAjax()
 $.ajax({
    url: `${Web_Servlet}/displayHeaderUserName`,
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    headers: { 'Access-Control-Allow-Origin': '*',
                'username': getCookie("username"),
                'session': getCookie("session")
            },
    type: 'GET',
    success: function(response){
        component.setState({
        usernameDisplay: response.message
        })
   }.bind(component)
 })
}
