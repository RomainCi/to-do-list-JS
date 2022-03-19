function starter(){
    let buttonQuery = document.querySelector(".buttonAjouter");
    let inputNameQuery = document.querySelector("#name");  
        //let containerr = document.querySelector(".mainContainer2");
        //let divMessageErreur = document.createElement("div");
        //let pMessageErreur = document.createElement("p");
        //let pCroix = document.createElement("p");
        //pMessageErreur.innerText = "Veuillez remplir tout les champs";
        //containerr.appendChild(divMessageErreur);
    clickEventInput(buttonQuery,inputNameQuery);
    
}
 

starter();

function clickEventInput(buttonQuery,inputNameQuery){
buttonQuery.addEventListener("click", function () {
    if (inputNameQuery.value == ""){
        let containerr = document.querySelector(".mainContainer2");
        let divMessageErreur = document.createElement("div");
        //let pMessageErreur = document.createElement("p");
        //let pCroix = document.createElement("p");
        divMessageErreur.innerHTML = "<p>Veuillez remplir tout les champs</p>";
        //containerr.appendChild(divMessageErreur);
        //divMessageErreur.appendChild(pMessageErreur);
    }
    else{
        creationDesElements(inputNameQuery);
    }
})
}
function creationDesElements (inputNameQuery){
    console.log("hello");
    let liste = inputNameQuery.value;
    let contenue = document.querySelector(".contenue3");
    let diva = document.createElement("div");
    let lista = document.createElement("li");
    let boutonn = document.createElement("button");
    let paragraphee = document.createElement("p");
    paragraphee.classList.add("paragraphhe");
    boutonn.innerText = `delete `
    diva.classList.add("diva");
    boutonn.classList.add("newBouton");
    lista.classList.add("lista");
    contenue.appendChild(diva);
    diva.appendChild(lista);
    diva.appendChild(boutonn);
    lista.appendChild(paragraphee);
    paragraphee.innerHTML = liste;
    inputNameQuery.value = "";
    clickEventButton(diva,boutonn,lista);
    
}

function clickEventButton(diva,boutonn,lista){
    boutonn.addEventListener("click", function () {
        let supression = document.querySelector(".supressionDesTaches")
        supression.appendChild(diva);
        supression = diva;
      let bomba = document.createElement("button");
        diva.appendChild(bomba);
       bomba.classList.add("bomba");
       bomba.innerText = "delete";
       clickDeleteDesTaches(diva,bomba,lista)
    })
}
function clickDeleteDesTaches(diva,bomba,lista){
    bomba.addEventListener("click", function(){
        diva.remove();
        
    })
 
    
    lista.addEventListener("click",function(){
        lista.style.color = "red";
    })
}
function enterPourValider(inputNameQuery){
    inputNameQuery.addEventListener("keyup", function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
      creationDesElements(inputNameQuery);
    }
    else{
        console.log("holllllaaa");
    }
})

}
  //if(lista.style.color = "red"){
        //lista.addEventListener("click",function(){
           // lista.style.color = "black";
        //})
    //}

//tral.addEventListener("click", function(){
 //   console.log("lol");
  //  tral.classList.toggle("lola");
//});
