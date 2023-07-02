import { Document } from "mongoose";

export interface SignosVitalesI extends Document {
    create_date: Date,
    tension_arterial: string;
    frecuencia_respiratoria: string;
    frecuencia_cardiaca: string;
    temperatura: string;
    peso: string;
    altura: string;
    imc: string;
}