import { Document } from "mongoose";

export interface AlergiasI extends Document {
    alergias_negadas: boolean;
    acaros: boolean;
    alimentos: boolean;
    chocolate: boolean;
    frutos_secos: boolean;
    hongos: boolean;
    humedad: boolean;
    latex: boolean;
    mariscos: boolean;
    mascotas: boolean;
    moho: boolean;
    niquel: boolean;
    picadura_insectos: boolean;
    polen: boolean;
    polvo: boolean;
    sol: boolean;
    alergias_a_medicamentos: string;

}