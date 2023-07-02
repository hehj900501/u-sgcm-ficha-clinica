import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExpedienteElectronicoSchema = new Schema({
    motivo_consulta: { type: String },
    interrogatorio: { type: String },
    topologia: { type: String },
    morfologia: { type: String },
    diagnostico_cie: { type: String },
    notas_evolucion: { type: String }
});