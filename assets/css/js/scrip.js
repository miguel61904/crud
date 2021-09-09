let lista = [

];

let updateFlag = false;
let updateIndex = null;


let curd = document.getElementById("crud");
let form = document.getElementById("addped");

let localCarList = JSON.parse(localStorage.getItem("carsStorageArray"));

  const carsStorage = () => {
 if (typeof Storage !=="undefined") {
    localStorage.setItem("carsStorageArray", JSON.stringify(lista) );
    renderList();
  } else {
    alert("No es compatible");
       }
 };


const renderList = ()=>{
    curd.innerHTML = "";
    let listaF = JSON.parse(localStorage.getItem("carsStorageArray"));
    if (listaF === null) {
      listaF= [];
    } else {
    listaF.forEach((cliente , index) => {
        const contform = document.createElement("div");
        contform.setAttribute("class", "contform");
        crud.appendChild(contform);
        const infoForm = document.createElement("div");
        infoForm.setAttribute("class", "infoForm");
        contform.appendChild(infoForm);

        const nombreC = document.createElement("h3");
        const cantidadP = document.createElement("h3");
        const direccionP = document.createElement("h3");
        const valorP =  document.createElement("h3");
        const domi =  document.createElement("h3");
        nombreC.innerText = `${cliente.nombre}`;
        cantidadP.innerText = `${cliente.cantidad}`;
        direccionP.innerText = `${cliente.direccion}`;
        valorP.innerText = `${cliente.valortot}`;
        domi.innerText = `${cliente.domiciliario}`;

        infoForm.appendChild(nombreC);
        infoForm.appendChild(cantidadP);
        infoForm.appendChild(direccionP);
        infoForm.appendChild(valorP);
        infoForm.appendChild(domi);

        const actionButtons = document.createElement("div");
        actionButtons.setAttribute("class", "actions");
        carContDiv.append(actionButtons);

        const updateBtn = document.createElement("button");

        updateBtn.setAttribute("class", "update");
        updateBtn.addEventListener("click", () => updateForm(index, element));
        updateBtn.setAttribute("id", "update");
        updateBtn.innerText = "Editar";

        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("class", "delete");
        deleteBtn.addEventListener("click", () => elminarBtn(index));
        deleteBtn.innerHTML = "Eliminar";
        deleteBtn.setAttribute("id", "delete");
     
        actionButtons.appendChild(updateBtn);
        actionButtons.appendChild(deleteBtn);
     
        let elimAll = document.getElementById("btnEliminar");
        elimAll.addEventListener("click", () => eliminarAll(index));
     
    });
 }
};

const createUpdateForm = event =>{
    event.preventDefault();
        if(updateFlag){
            let updateForm ={
                nombre: document.getElementById("nombreC").value,
                cantidad: document.getElementById("cantidad").value,
                direccion: document.getElementById("direccion").value
         };
         lista[updateIndex] = updateForm;
         updateFlag = false;
         updateIndex = null;
         renderList(); 
    }else{
        let cliente  = {
            nombre: document.getElementById("nombreC").value,
            cantidad: document.getElementById("cantidad").value,
            direccion: document.getElementById("direccion").value
        };
        if(localCarList === null) {
            localCarList = [];
                }
        lista.push(...localCarList, cliente);
        carsStorage();
        renderList();
    }
    form.request();
};

const updateform = (index, cliente ) => {
    document.getElementById("nombreC").value = cliente .nombre;
    document.getElementById("cantidad").value = cliente .cantidad;
    document.getElementById("direccion").value = cliente .direccion;
    updateFlag = true;
    updateIndex = index;
  };
  
  const elminarBtn = index => {
    carsList.splice(index, 1);
    renderList();
  };

  const eliminarAll = index => {
    carsList.splice(0);
    renderList();
  };

form.addEventListener("submit",createUpdateForm);
document.addEventListener("DOMcontentLoaded", renderList);

