import { Document } from "mongoose";

export class AlergiasDto extends Document {
    readonly alergias_negadas: boolean;
    readonly acaros: boolean;
    readonly alimentos: boolean;
    readonly chocolate: boolean;
    readonly frutos_secos: boolean;
    readonly hongos: boolean;
    readonly humedad: boolean;
    readonly latex: boolean;
    readonly mariscos: boolean;
    readonly mascotas: boolean;
    readonly moho: boolean;
    readonly niquel: boolean;
    readonly picadura_insectos: boolean;
    readonly polen: boolean;
    readonly polvo: boolean;
    readonly sol: boolean;
    readonly alergias_a_medicamentos: string;
}