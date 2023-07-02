import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AntecedentesPersonalesNoPatologicosSchema = new Schema({
    tabaquismo: { type: String },
    alcoholismo: { type: String },
    toxicomanias: { type: String },
    alimentacion: { type: String },
    deportes: { type: String },
    inmunizaciones: { type: String },
});