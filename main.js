let lista = [
  {
    encargo:"",
    nombre:"",
    direccion:"",
    barrio:"",
    valortot:"",
    domiciliario:"",
    cantidad:"",
    medio:"",
    celular:"",
    valordomi:"",
    text:""
  }
];

let total = document.getElementById()

let updateFlag = false;
let updateIndex = null;

let cant = document.getElementById("cantidad");
let crud = document.getElementById("crud");
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

 let contador = 0;

const renderList = ()=>{
    crud.innerHTML= "";
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
        
        const numero  = document.createElement("h3");
        const nombreC = document.createElement("h3");
        const contacto = document.createElement("h3");
        const pedidoP = document.createElement("h3");
        const cantidadP = document.createElement("h3");
        const direccionP = document.createElement("h3");
        const valorP =  document.createElement("h3");
        const domi =  document.createElement("h3");
        const bar = document.createElement("h3");
        const medioP = document.createElement("h3");
        const area_text = document.createElement("h4");

        nombreC.innerText = `Nombre: ${cliente.nombre}`;
        contacto.innerText = `Celular ${cliente.celular}`;
        pedidoP.innerText = `Pedido: ${cliente.encargo}`;
        cantidadP.innerText = `Cantidad: ${cliente.cantidad}`;
        direccionP.innerText = `Dirección: ${cliente.direccion}`;
        valorP.innerText = `Valor a pagar: ${cliente.valortot * cliente.cantidad} valor domi: ${cliente.valordomi}`;
        domi.innerText = `Nombre Domi: ${cliente.domiciliario}`;
        bar.innerText = `Barrio: ${cliente.barrio}`;
        medioP.innerText = `Medio de pago: ${cliente.medio}`;
        numero.innerText = `pedido numero: ${index}`;
        area_text.innerHTML = `Descripcion: ${cliente.text}`;
        

        
        infoForm.appendChild(numero);
        infoForm.appendChild(nombreC);
        infoForm.appendChild(contacto);
        infoForm.appendChild(pedidoP);
        infoForm.appendChild(cantidadP);
        infoForm.appendChild(direccionP);
        infoForm.appendChild(valorP);
        infoForm.appendChild(domi);
        infoForm.appendChild(bar);
        infoForm.appendChild(medioP);
        infoForm.appendChild(area_text);

        const actionButtons = document.createElement("div");
        actionButtons.setAttribute("class", "actions");
        contform.append(actionButtons);

        const updateBtn = document.createElement("button");

        updateBtn.setAttribute("class", "update");
        updateBtn.addEventListener("click", () => updateform(index, cliente));
        updateBtn.setAttribute("id", "update");
        updateBtn.innerText = "Editar";

        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("class", "delete");
        deleteBtn.addEventListener("click", () => elminarBtn(index));
        deleteBtn.innerHTML = "Eliminar";
        deleteBtn.setAttribute("id", "delete");
     
        actionButtons.appendChild(updateBtn);
        actionButtons.appendChild(deleteBtn);
     
     
      });
    }
};

const createUpdateForm = event =>{
    event.preventDefault();
        if(updateFlag){
            let updateForm ={
                nombre: document.getElementById("nombreC").value,
                celular: document.getElementById("celular").value,
                cantidad: document.getElementById("cantidad").value,
                encargo: document.getElementById("pedido").value,
                direccion: document.getElementById("direccion").value,
                barrio: document.getElementById("barrio").value,
                domiciliario: document.getElementById("domi").value,
                medio: document.getElementById("mpago").value,
                valortot: document.getElementById("valor").value,
                valordomi: document.getElementById("valordomi").value,
                text: document.getElementById("text").value
         };
         lista[updateIndex] = updateForm;
         updateFlag = false;
         updateIndex = null;
         renderList(); 
    }else{
        let cliente  = {
            nombre: document.getElementById("nombreC").value,
            celular: document.getElementById("celular").value,
            cantidad: document.getElementById("cantidad").value,
            encargo: document.getElementById("pedido").value,
            direccion: document.getElementById("direccion").value,
            barrio: document.getElementById("barrio").value,
            domiciliario: document.getElementById("domi").value,
            medio: document.getElementById("mpago").value,
            valortot: document.getElementById("valor").value,
            valordomi: document.getElementById("valordomi").value,
            text: document.getElementById("text").value
        };
        if(localCarList === null) {
            localCarList = [];
                }
        lista.push(...localCarList, cliente);
        carsStorage();
        renderList();
    }
    form.reset();
};

const updateform = (index, cliente ) => {
    document.getElementById("nombreC").value = cliente .nombre;
    document.getElementById("celular").value = cliente.celular;
    document.getElementById("cantidad").value = cliente .cantidad;
    document.getElementById("pedido").value = cliente.encargo;
    document.getElementById("direccion").value = cliente .direccion;
    document.getElementById("barrio").value = cliente.barrio;
    document.getElementById("domi").value= cliente.domiciliario;
    document.getElementById("mpago").value = cliente.medio;
    document.getElementById("valor").value = cliente.valortot;
    document.getElementById("valordomi").value = cliente.valordomi;
    document.getElementById("text").value = cliente.text;
    updateFlag = true;
    updateIndex = index;
  };
  
  const elminarBtn = index => {
    lista.splice(index, 1);
    renderList();
    carsStorage();
  };


form.addEventListener("submit",createUpdateForm);
document.addEventListener("DOMcontentLoaded", renderList);