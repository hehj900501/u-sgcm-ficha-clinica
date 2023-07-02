import { Document } from "mongoose";

export interface TipoAntecedentesPersonalesPatologicosI extends Document {
    nombre: string;
    is_active: boolean;
}