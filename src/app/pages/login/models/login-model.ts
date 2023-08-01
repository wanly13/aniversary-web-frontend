import { DominioTransaccion } from "src/app/models/dominio-transaction";

export class SeguridadUsuarioLogin extends DominioTransaccion{
    sid: string;
    tipoUsuarioId: string;
    aplicacionCodigo: string;
    aplicacionNombre: string;
    companiaNombre: string;
    usuario: string;
    clave: string;
    token: string;
    direccionIp: string;
    tipousuario: string;
    institucion:number;
    sede:string;
    modalidadestudio:number;
    unidadNegocioAsignadaCodigo:number;
    companiacodigo:string;
    idsede:number;
    sedenombre:string;
    personaNombreCompleto:string;

}