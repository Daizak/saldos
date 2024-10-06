let saldo = 20000
let transa =[]

function actualizarsarldo(){
    document.getElementById("saldo").innerHTML=`saldo actual es de $$ ${saldo}`
}


function consulta() {
    alert(`si saldo es :$$  ${saldo}`)
}

function mostraTrasa(){
const transalist = document.getElementById ('trasacciones');
transalist.innerHTML = '';

    transa.forEach(trasaccion => {
        const li =document.createElement('li');
        li.innerText= trasaccion;
            transaccioneslist.appenedchild(li);
        });
}

function depositar() {

    const cantidad = parseFloat(document.getElementById ("cantidad").value)
    
    if (isNaN(cantidad) || cantidad <=0){
        alert("la cantidad a depositar debe ser mayor a 0")
        return;
}

saldo += cantidad
transa.push ('se depositadon ${cantidad}');
actualizarsarldo(); //todo
mostraTrasa();
alert(`se han depositado $$ ${cantidad}`)
}

function retirar(){
const cantidad = parseFloat(document.getElementById ("cantidad").value)
if (isNaN(cantidad) ||cantidad <=0){
    alert("la cantidad a depositar debe ser mayor a 0")
    return;
}
if(cantidad > saldo) {
    alert("los fondos para transa, son insuficientes")
    return
}
    saldo-=cantidad
    transa.push (`se retiraron $$ ${cantidad}`)
     actualizarsarldo(); //todo
mostraTrasa();
alert(`se a retirado $$  ${cantidad}`)
}
