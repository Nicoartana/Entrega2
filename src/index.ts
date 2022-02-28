const operacion = async(num1:number,num2:number,tipo:string) =>{
    let operaciones = await import ("./operacion.js")
    let result = operaciones.sumar(num1,num2,tipo);
    return result;
}

const operaciones = async(num1:number,num2:number,tipo:string) =>{
    let resultado = await operacion(num1,num2,tipo);
    console.log(resultado);
}

operaciones(2,4,"suma")