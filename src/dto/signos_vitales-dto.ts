import { Document } from "mongoose";

export class SignosVitalesDto extends Document {
    readonly create_date: Date;
    readonly tension_arterial: string;
    readonly frecuencia_respiratoria: string;
    readonly frecuencia_cardiaca: string;
    readonly temperatura: string;
    readonly peso: string;
    readonly altura: string;
    readonly imc: string;
}