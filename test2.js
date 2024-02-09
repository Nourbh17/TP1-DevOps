var n=document.querySelector("#nom")
var c=document.querySelector("#contenu")
var  bouton=document.querySelector("#bouton")
var a=document.querySelector("#ajout")
 
bouton.addEventListener("click",
 ()=>{ 
     if(n.value!="" && c.value!="")
     {a.innerHTML+=`<div>${n.value} : ${c.value} <img src="delete.jpg" alt="trash"></div>`
     n.value=""
     c.value=""}
     else {
         alert ("Insérez quelque chose !!!")
     }
    

  }
 )
 a.addEventListener("click",(e)=>{
     if(e.target.tagName==="IMG") {
         e.target.parentNode.parentNode.removeChild(e.target.parentNode)
     }
 })