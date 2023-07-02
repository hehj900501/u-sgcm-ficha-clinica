import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AppPatologiasInfectocontagiosasSchema = new Schema({
    faringomigdalitis: { type: Boolean, default: false },
    fiebre_reumatica: { type: Boolean, default: false },
    hepatitis: { type: Boolean, default: false },
    parasitosis: { type: Boolean, default: false },
    tifoidea: { type: Boolean, default: false },
    transmision_sexual: { type: Boolean, default: false },
    tuberculosis: { type: Boolean, default: false },
});