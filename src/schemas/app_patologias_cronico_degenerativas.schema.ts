import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AppPatologiasCronicoDegenerativasSchema = new Schema({
    diabetes_melitus: { type: Boolean, default: false },
    hipertension_arterial_sistemica: { type: Boolean, default: false },
    dislipidemias: { type: Boolean, default: false },
    obesidad: { type: Boolean, default: false },
    neoplasias: { type: Boolean, default: false },
    enfermedades_reumatologicas: { type: Boolean, default: false },
});