let ingresos = localStorage.getItem('itemList')
ingresos = ingresos ? JSON.parse(ingresos) : []
showItem()


function addItem() {
    
    let nameItem    = document.getElementById("item").value
    let apellidoItem = document.getElementById("apellido").value
    let numberItem   = document.getElementById("number").value
    let serviItem = document.getElementById("servi").value
  
    if(nameItem && apellidoItem && numberItem && serviItem ){
        ingresos.push({ 'nombreCliente': nameItem, 'apellidoCliente': apellidoItem, 'telefonoCliente': numberItem, 'servicioCliente': serviItem })
        document.getElementById('item').value       = numberItem
        showItem()

    }
}

function showItem() {
    document.getElementById('item').value       = ''
    document.getElementById('apellido').value    = ''
    document.getElementById('number').value    = ''
    document.getElementById('servi').value      = ''

    let html = ''
    ingresos.forEach((elemt, index) => {
        html += `<div class="col-2 mb-2"> ${elemt.nombreCliente} </div>`
        html += `<div class="col-2 mb-2"> ${elemt.apellidoCliente} </div>`
        html += `<div class="col-2 mb-2">   ${elemt.telefonoCliente} </div>`
        html += `<div class="col-2 mb-2">   ${elemt.servicioCliente} </div>`
        html += `<div class="col-4 mb-3"> <a href="#" class="btn btn-info" onclick="deleteItem(${index})"> X </a> </div>`
    });

    localStorage.setItem('itemList', JSON.stringify(ingresos))
    document.getElementById("ingresos").innerHTML = html
}

function deleteItem(item) {
    ingresos.splice(item, 1)
    showItem()
}






