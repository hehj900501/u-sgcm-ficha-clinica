import { Document } from "mongoose";

export class ExpedienteElectronicoDto extends Document {
    readonly motivo_consulta: String;
    readonly interrogatorio: String;
    readonly topologia: String;
    readonly morfologia: String;
    readonly diagnostico_cie: String;
    readonly notas_evolucion: String;
}