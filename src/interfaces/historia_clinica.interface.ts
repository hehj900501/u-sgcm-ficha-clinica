import { Document } from "mongoose";
import { PacienteI } from "./paciente.interface";
import { AntecedentesPersonalesPatologicosI } from "./antecedentes_personales_patologicos.interface";
import { AntecedentesPersonalesNoPatologicosI } from "./antecedentes_personales_no_patologicos.interface";
import { AntecedentesHeredofamiliaresI } from "./antecedentes_heredofamiliares.interface";
import { SignosVitalesI } from "./signos_vitales.interface";
import { AlergiasI } from "./alergias.interface";
import { ExpedienteElectronicoI } from "./expediente_electronico.interface";

export interface HistoriaClinicaI extends Document {
    paciente: PacienteI;
    sucursal: String;
    dermatologo: String;
    create_date: Date;
    antecedentes_personales_patologicos: AntecedentesPersonalesPatologicosI;
    antecedentes_personales_no_patologicos: AntecedentesPersonalesNoPatologicosI;
    antecedentes_heredofamiliares: AntecedentesHeredofamiliaresI;
    signos_vitales: SignosVitalesI[];
    alergias: AlergiasI;
    expediente_electronico: ExpedienteElectronicoI;

}