function send() {

let message = document.getElementById('message').value;
let name = document.getElementById('name').value;

if (name=='') {
    document.getElementById('error').innerText = 'Нужно ввести имя!!!'
}
else {
    if (message=='') {
        document.getElementById('error').innerText = 'Нужно ввести сообщение!!!'
    }
    else {
        document.getElementById('result').innerText = name + ': ' +message;
        document.getElementById('error').innerText = ''
        document.getElementById('message').value = ''
    }
}

}
