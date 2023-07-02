import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AppPatologiasExantematicasSchema = new Schema({
    exantema_subito: { type: Boolean, default: false },
    roseola_escarlatina: { type: Boolean, default: false },
    rubeola: { type: Boolean, default: false },
    sarampion: { type: Boolean, default: false },
    varicela: { type: Boolean, default: false },
    otra_patologia_exantematica: { type: Boolean, default: false },
});