import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AppGeneralesSchema = new Schema({
    hospitalizaciones: { type: Boolean, default: false },
    quirurgicos: { type: Boolean, default: false },
    traumaticos: { type: Boolean, default: false },
    transfusionales: { type: Boolean, default: false },
});