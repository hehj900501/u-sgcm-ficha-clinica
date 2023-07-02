import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SignosVitalesSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    tension_arterial: { type: String },
    frecuencia_respiratoria: { type: String },
    frecuencia_cardiaca: { type: String },
    temperatura: { type: String },
    peso: { type: String },
    altura: { type: String },
    imc: { type: String },
});