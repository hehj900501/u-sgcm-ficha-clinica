import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AlergiasSchema = new Schema({
    alergias_negadas: { type: Boolean, default: false },
    acaros: { type: Boolean, default: false },
    alimentos: { type: Boolean, default: false },
    chocolate: { type: Boolean, default: false },
    frutos_secos: { type: Boolean, default: false },
    hongos: { type: Boolean, default: false },
    humedad: { type: Boolean, default: false },
    latex: { type: Boolean, default: false },
    mariscos: { type: Boolean, default: false },
    mascotas: { type: Boolean, default: false },
    moho: { type: Boolean, default: false },
    niquel: { type: Boolean, default: false },
    picadura_insectos: { type: Boolean, default: false },
    polen: { type: Boolean, default: false },
    polvo: { type: Boolean, default: false },
    sol: { type: Boolean, default: false },
    alergias_a_medicamentos: { type: String }
});