import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const HistoriaClinicaSchema = new Schema({
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente'},
    sucursal: { type: String },
    dermatologo: { type: String },
    create_date: { type: Date, default: new Date() },
    antecedentes_personales_patologicos: { type: constMongoose.ObjectId, ref: 'AntecedentesPersonalesPatologicos'},
    antecedentes_personales_no_patologicos: { type: constMongoose.ObjectId, ref: 'AntecedentesPersonalesNoPatologicos'},
    antecedentes_heredofamiliares: { type: constMongoose.ObjectId, ref: 'AntecedentesHeredofamiliares'},
    signos_vitales: [{ type: constMongoose.ObjectId, ref: 'SignosVitales'}],
    alergias: { type: constMongoose.ObjectId, ref: 'Alergias'},
    expediente_electronico: { type: constMongoose.ObjectId, ref: 'ExpedienteElectronico'},
});