import { Document } from "mongoose";

export class TipoAntecedentesPersonalesPatologicosDto extends Document {
    readonly nombre: string;
    readonly is_active: boolean;
}