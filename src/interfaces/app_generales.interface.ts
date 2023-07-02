import { Document } from "mongoose";

export interface AppGeneralesI extends Document {
    hospitalizaciones: boolean;
    quirurgicos: boolean;
    traumaticos: boolean;
    transfusionales: boolean;
}