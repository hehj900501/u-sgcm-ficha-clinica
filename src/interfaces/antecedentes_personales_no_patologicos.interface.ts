import { Document } from "mongoose";

export interface AntecedentesPersonalesNoPatologicosI extends Document {
    tabaquismo: string;
    alcoholismo: string;
    toxicomanias: string;
    alimentacion: string;
    deportes: string;
    inmunizaciones: string;
}