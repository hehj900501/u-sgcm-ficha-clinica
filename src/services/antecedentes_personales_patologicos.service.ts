import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AntecedentesPersonalesPatologicosI } from 'src/interfaces/antecedentes_personales_patologicos.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AntecedentesPersonalesPatologicosService {

    constructor(@InjectModel('AntecedentesPersonalesPatologicos') private readonly antecedentesPersonalesPatologicosModel : Model<AntecedentesPersonalesPatologicosI>) {}

    /**
     * Muestra todos los antecedentesPersonalesPatologicoss de la BD
     */
    async showAllAntecedentesPersonalesPatologicos(): Promise<AntecedentesPersonalesPatologicosI[]> {
        return await this.antecedentesPersonalesPatologicosModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un antecedentesPersonalesPatologicos mediante su ID en la BD
     * @param idAntecedentesPersonalesPatologicos 
     */
    async findAntecedentesPersonalesPatologicosById(idAntecedentesPersonalesPatologicos: string): Promise<AntecedentesPersonalesPatologicosI> {
        return await this.antecedentesPersonalesPatologicosModel.findOne( { _id: idAntecedentesPersonalesPatologicos } );
    }

    /**
     * Genera un nuevo antecedentesPersonalesPatologicos en la BD
     * @param antecedentesPersonalesPatologicos 
     */
    async createAntecedentesPersonalesPatologicos(antecedentesPersonalesPatologicos: AntecedentesPersonalesPatologicosI): Promise<AntecedentesPersonalesPatologicosI> {
        const newAntecedentesPersonalesPatologicos = new this.antecedentesPersonalesPatologicosModel(antecedentesPersonalesPatologicos);
        return await newAntecedentesPersonalesPatologicos.save();
    }

    /**
     * Busca un antecedentesPersonalesPatologicos por su Id para poder actualizarlo
     * @param idAntecedentesPersonalesPatologicos 
     * @param antecedentesPersonalesPatologicos 
     */
    async updateAntecedentesPersonalesPatologicos(idAntecedentesPersonalesPatologicos: string, antecedentesPersonalesPatologicos: AntecedentesPersonalesPatologicosI): Promise<any> {
        return await this.antecedentesPersonalesPatologicosModel.updateOne({ _id: idAntecedentesPersonalesPatologicos }, antecedentesPersonalesPatologicos);
    }

    /**
     * Busca un antecedentesPersonalesPatologicos por su ID y lo elimina de la BD
     * @param idAntecedentesPersonalesPatologicos
     */
    async deleteAntecedentesPersonalesPatologicos(idAntecedentesPersonalesPatologicos: string ): Promise<AntecedentesPersonalesPatologicosI> {
        return await this.antecedentesPersonalesPatologicosModel.findOneAndDelete({ _id: idAntecedentesPersonalesPatologicos });
    }

}
