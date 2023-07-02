import { Document } from "mongoose";

export interface AppPatologiasExantematicasI extends Document {
    exantema_subito: boolean;
    roseola_escarlatina: boolean;
    rubeola: boolean;
    sarampion: boolean;
    varicela: boolean;
    otra_patologia_exantematica: boolean;
}