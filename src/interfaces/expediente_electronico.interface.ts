import { Document } from "mongoose";

export interface ExpedienteElectronicoI extends Document {
    motivo_consulta: String;
    interrogatorio: String;
    topologia: String;
    morfologia: String;
    diagnostico_cie: String;
    notas_evolucion: String;

}