import { Document } from "mongoose";

export class AppPatologiasInfectocontagiosasDto extends Document {
    readonly faringomigdalitis: boolean;
    readonly fiebre_reumatica: boolean;
    readonly hepatitis: boolean;
    readonly parasitosis: boolean;
    readonly tifoidea: boolean;
    readonly transmision_sexual: boolean;
    readonly tuberculosis: boolean;
}