import { Document } from "mongoose";

export class AppPatologiasExantematicasDto extends Document {
    readonly exantema_subito: boolean;
    readonly roseola_escarlatina: boolean;
    readonly rubeola: boolean;
    readonly sarampion: boolean;
    readonly varicela: boolean;
    readonly otra_patologia_exantematica: boolean;
}