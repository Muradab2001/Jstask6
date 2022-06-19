// document.body.onkeyup=function(x){
//   if (x.keyCode===13) {
//     let Color = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + Color;
//   }
// }
//task2 start
let inputname=document.getElementById('name');
let button=document.getElementById('button');
let inputpassword=document.getElementById('password');
let inputemail=document.getElementById('email');
let inputnamevalue=inputname.value;
button.onclick=function(){
  let inputnamevalue=inputname.value;
  if (Namechecker(inputnamevalue)===true&&Passworchecker(inputpassword)===true&&emailchecker(inputemail)===true) {
    alert('Sisteme daxil oldunuz');
  }
}
function Namechecker(name) {
  if (name.length>4) {
    if (name.charAt(0)===name.charAt(0).toUpperCase()) {
     return true;
    }
    else{
      alert('adin ilk herifi boyuk olmalidir!!')
    }
   }
   else{
    alert('adin minumum 4 herifden ibraet olmalidir!!')
   }
}
function Passworchecker(password) {
  var check= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if(password.value.match(check)){
  return true;
  }
  else{
    alert('parolda en az bir balca herif bir boyuk herif bir simvol ve minimum 8 ibaret olmalidir!!');
  }
}
function emailchecker(email) {
  var check=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(check)){
    return true;
    }
    else{
      alert('bu bir mail adresi deyil!!')
    }
}
//task2 end
//task3 start
var btnopen=document.getElementById('btn-open');
var btnclose=document.getElementById('btn-close');
var modal=document.getElementById('modal');

btnopen.onclick=function() {
modal.style.display='block';
}
btnclose.onclick=function () {
  modal.style.display='none';
}
//task3 end
