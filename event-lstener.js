function checkUsername(){
    var elMsg = document.getElementById('feedback')
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}
//The same with check password -> let try nhe.
var ulUsename = document.getElementById('username');

elUsername.addEventListener('blur', checkUsername, false);
