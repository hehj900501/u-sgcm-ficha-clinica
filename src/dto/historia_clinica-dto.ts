import { Document } from "mongoose";
import { PacienteDto } from "./paciente-dto";
import { AntecedentesPersonalesPatologicosDto } from "./antecedentes_personales_patologicos-dto";
import { AntecedentesPersonalesNoPatologicosDto } from "./antecedentes_personales_no_patologicos-dto";
import { AntecedentesHeredofamiliaresDto } from "./antecedentes_heredofamiliares-dto";
import { SignosVitalesDto } from "./signos_vitales-dto";
import { AlergiasDto } from "./alergias-dto";

export class HistoriaClinicaDto extends Document {
    readonly paciente: PacienteDto;
    readonly sucursal: String;
    readonly dermatologo: String;
    readonly create_date: Date;
    readonly antecedentes_personales_patologicos: AntecedentesPersonalesPatologicosDto;
    readonly antecedentes_personales_no_patologicos: AntecedentesPersonalesNoPatologicosDto;
    readonly antecedentes_heredofamiliares: AntecedentesHeredofamiliaresDto;
    readonly signos_vitales: SignosVitalesDto[];
    readonly alergias: AlergiasDto;
}