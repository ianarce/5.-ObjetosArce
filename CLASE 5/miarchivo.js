function Moneda(Denominacion,Monto){
    this.Denominacion= "La denominacion es "+ Denominacion
    this.Monto=Monto

    this.pesoMEX=function(Monto){
        return "El cambio es " + (Monto*20)+" Pesos Mexicanos"
    }
    this.pesoARG=function(Monto){
        return "El cambio es " +( Monto*103 )+ " Pesos Argentinos"
    }
    this.pesoURU=function(Monto){
        return "El cambio es " +( Monto*44 )+ " Pesos Uruguayos"
    }
}

let tipoMoneda=prompt("CONVERTIDOR DE DOLARES\n MONEDAS DISPONIBLES\n PESO MEXICANO\n PESO ARGENTINO\n PESO URUGUAYO\n " +
"INGRESA LA DENOMINACION A CAMBIAR EN MAYUSCULAS: ")
let montoDolar=parseFloat(prompt("INGRESA EL MOTO EN DOLAR A CAMBIAR"))

const Moneda1 = new Moneda(tipoMoneda,montoDolar)
const Moneda2 = new Moneda(tipoMoneda,montoDolar)
const Moneda3 = new Moneda(tipoMoneda,montoDolar)



if(tipoMoneda ==="PESO MEXICANO"){
    alert(Moneda1.Denominacion)
    alert(Moneda1.pesoMEX(montoDolar))
}
else if(tipoMoneda==="PESO ARGENTINO"){
        alert(Moneda2.Denominacion)
        alert(Moneda2.pesoARG(montoDolar))
    }
else if (tipoMoneda ==="PESO URUGUAYO"){
    alert(Moneda3.Denominacion)
    alert(Moneda3.pesoURU(montoDolar))
}
else{
    alert("ERROR VERIFICA LA DENOMINACION O EL MONTO INGRESADO")
    
}
