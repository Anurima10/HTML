const element = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerText = "LOGIN";
h1.className="form-group";
h1.style.textAlign="center";
h1.style.textAlign="blue";
element.appendChild(h1);
document.body.appendChild(element);

const p = document.createElement("p");


p.style.fontsize="22px";

h1.appendChild(p);

const x=document.getElementById("box");
const form = document.createElement("form");
/*form.innerHTML= "
<form class = "form-group">
<input type ="text" placeholder="Enter Email id" class = "user">
<input type ="password" placeholder="Enter Password" class = "pass">
<input type ="submit" class = "btn"/>
    </form> 
    " ;*/
form.style.textAlign="center";
document.body.appendChild(form);
const btn=document.querySelector(".btn");
btn.style.marginLeft="-7rem";
btn.style.backgroundColor="blue";
btn.style.colour="#fff";
btn.style.border="none";
btn.style.borderRadius="5px";
btn.style.marginLeft="-7rem";
x.append(form);