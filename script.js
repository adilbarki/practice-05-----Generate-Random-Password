
function random() {
    let charac = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@<#<$%^&*()[]{}'|\/><:;+_-?`~";
    let a = document.getElementById("inp2").value;
    let password = "     ";
    for (let i = 0; i < a; i++) {
        password += charac.charAt(Math.floor(Math.random() * charac.length));
    }
    document.getElementById("inputt").value = password;
}
function remove() {
    document.getElementById("inputt").value = "";
}