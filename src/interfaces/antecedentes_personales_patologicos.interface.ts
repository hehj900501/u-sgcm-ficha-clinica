import { Document } from "mongoose";
import { AppGeneralesI } from "./app_generales.interface";
import { AppPatologiasInfectocontagiosasI } from "./app_patologias_infectocontagiosas.interface";
import { AppPatologiasCronicoDegenerativasI } from "./app_patologias_cronico_degenerativas.interface";
import { AppPatologiasExantematicasI } from "./app_patologias_exantematicas.interface";

export interface AntecedentesPersonalesPatologicosI extends Document {
    app_generales: AppGeneralesI;
    app_patologias_infectocontagiosas: AppPatologiasInfectocontagiosasI;
    app_patologias_cronico_degenerativas: AppPatologiasCronicoDegenerativasI;
    app_patologias_exantematicas: AppPatologiasExantematicasI;
    otros_antecedentes: String;
}