import { Document } from "mongoose";
import { AppGeneralesDto } from "./app_generales-dto";
import { AppPatologiasInfectocontagiosasDto } from "./app_patologias_infectocontagiosas-dto";
import { AppPatologiasCronicoDegenerativasDto } from "./app_patologias_cronico_degenerativas-dto";
import { AppPatologiasExantematicasDto } from "./app_patologias_exantematicas-dto";


export class AntecedentesPersonalesPatologicosDto extends Document {
    readonly app_generales: AppGeneralesDto;
    readonly app_patologias_infectocontagiosas: AppPatologiasInfectocontagiosasDto;
    readonly app_patologias_cronico_degenerativas: AppPatologiasCronicoDegenerativasDto;
    readonly app_patologias_exantematicas: AppPatologiasExantematicasDto;
    readonly otros_antecedentes: String;
}