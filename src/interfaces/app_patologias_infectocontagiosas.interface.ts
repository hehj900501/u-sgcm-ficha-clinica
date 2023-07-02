import { Document } from "mongoose";

export interface AppPatologiasInfectocontagiosasI extends Document {
    faringomigdalitis: boolean;
    fiebre_reumatica: boolean;
    hepatitis: boolean;
    parasitosis: boolean;
    tifoidea: boolean;
    transmision_sexual: boolean;
    tuberculosis: boolean;
}