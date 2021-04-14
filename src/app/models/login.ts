export class Login{
    strPassword: string;
    strCorreo: string;
    tipo:string
}


export class Pagos{
    cantidad: Number;
    tipoPago: String;
}

export class Reportes{
    origen: String;
    destino: String;
    duracion: String; 
    fecha: Date;
}

export class Usuarios{
    strNombre: String;
    strPassword: String;
    strDireccion: String;
    nmbEdad: Number;
    arrTelefonos: Number;
    strCorreo: String;
    tipo: String;
}