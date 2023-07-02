import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const constMongoose = require('mongoose');

export const AntecedentesPersonalesPatologicosSchema = new Schema({
    app_generales: { type: constMongoose.ObjectId, ref: 'AppGenerales' },
    app_patologias_infectocontagiosas: { type: constMongoose.ObjectId, ref: 'AppPatologiasInfectocontagiosas' },
    app_patologias_cronico_degenerativas: { type: constMongoose.ObjectId, ref: 'AppPatologiasCronicoDegenerativas' },
    app_patologias_exantematicas: { type: constMongoose.ObjectId, ref: 'AppPatologiasExantematicas' },
    otros_antecedentes: { type: String },
});