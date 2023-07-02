import { Document } from "mongoose";

export class AppGeneralesDto extends Document {
    readonly hospitalizaciones: boolean;
    readonly quirurgicos: boolean;
    readonly traumaticos: boolean;
    readonly transfusionales: boolean;
}