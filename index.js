const input = document.getElementById("inp");
const p = document.getElementById("error");

btn.onclick = function(){
    input.oninvalid=function(){
        this.setCustomValidity(' ');
        input.style.border='1px solid red';
        p.innerHTML=("Please provide a valid email address");
        this.blur();
    };
}
/*input.oninvalid=function(){
    this.setCustomValidity(' ');
    input.style.border='1px solid red';
    p.innerHTML=("Please provide a valid email address");
    this.blur();
};*/



