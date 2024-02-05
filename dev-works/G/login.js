const toreg = document.getElementById("toreg");
const tolog = document.getElementById("tologin");
const login = document.getElementById("loginid");
const login_in = document.getElementById("login-inid");
const reg = document.getElementById("regid");
const register = document.getElementById("registerid");
let x=0;
let y=180;
toreg.addEventListener('click',function(){
    rotation();
    setTimeout(logdisplaynone,450);
})
tologin.addEventListener('click',function(){
    rotation();
    setTimeout(regdisplaynone,450);
})
function rotation(){
    //login_in.style.transition = `1.5s`;
    //register.style.transition = `1.5s`;
    x+=180;
    x= (x==360)?0:x;
    y+=180;
    y= (y==360)?0:y;
    login_in.style.transform = `rotateY(${x}deg)`;
    register.style.transform = `rotateY(${y}deg)`;
}
function logdisplaynone(){
    login.style.visibility = `hidden`;
    reg.style.visibility = `inherit`;
    reg.style.zIndex = `0`;
    login.style.zIndex = `-1`;
}
function regdisplaynone(){
    reg.style.visibility = `hidden`;
    login.style.visibility = `inherit`;
    login.style.zIndex = `0`;
    reg.style.zIndex = `-1`;
}
