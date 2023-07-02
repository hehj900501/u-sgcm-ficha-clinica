import { Document } from "mongoose";

export class AppPatologiasCronicoDegenerativasDto extends Document {
    readonly diabetes_melitus: boolean;
    readonly hipertension_arterial_sistemica: boolean;
    readonly dislipidemias: boolean;
    readonly obesidad: boolean;
    readonly neoplasias: boolean;
    readonly enfermedades_reumatologicas: boolean;
}