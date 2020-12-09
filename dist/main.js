function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

document.querySelector('input[type=submit]').onclick = function(){
  const email = document.querySelector('#email').value;
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const password = document.querySelector('#password').value;
  
    if (validateEmail(email)) {
      
    } else {
        document.querySelector('#email').style.borderColor = 'hsl(354, 100%, 66%)';
        document.querySelector('#email').nextElementSibling.style.display = 'block';
    }
    if(firstName == ''){
        document.querySelector('#first-name').style.borderColor = 'hsl(354, 100%, 66%)';
        document.querySelector('#first-name').nextElementSibling.style.display = 'block';
    }
    if(lastName == ''){
        document.querySelector('#last-name').style.borderColor = 'hsl(354, 100%, 66%)';
        document.querySelector('#last-name').nextElementSibling.style.display = 'block';
    }
    if(password == ''){
        document.querySelector('#password').style.borderColor = 'hsl(354, 100%, 66%)';
        document.querySelector('#password').nextElementSibling.style.display = 'block';
    }
    return false;
}
/* this site created by Mohamed Maghraby */