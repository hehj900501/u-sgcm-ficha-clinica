import { Document } from "mongoose";

export class AntecedentesPersonalesNoPatologicosDto extends Document {
    readonly tabaquismo: string;
    readonly alcoholismo: string;
    readonly toxicomanias: string;
    readonly alimentacion: string;
    readonly deportes: string;
    readonly inmunizaciones: string;
}