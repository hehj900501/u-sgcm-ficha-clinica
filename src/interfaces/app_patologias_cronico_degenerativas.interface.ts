import { Document } from "mongoose";

export interface AppPatologiasCronicoDegenerativasI extends Document {
    diabetes_melitus: boolean;
    hipertension_arterial_sistemica: boolean;
    dislipidemias: boolean;
    obesidad: boolean;
    neoplasias: boolean;
    enfermedades_reumatologicas: boolean;
}