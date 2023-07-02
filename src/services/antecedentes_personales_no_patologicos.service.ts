import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AntecedentesPersonalesNoPatologicosI } from 'src/interfaces/antecedentes_personales_no_patologicos.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AntecedentesPersonalesNoPatologicosService {

    constructor(@InjectModel('AntecedentesPersonalesNoPatologicos') private readonly antecedentesPersonalesNoPatologicosModel : Model<AntecedentesPersonalesNoPatologicosI>) {}

    /**
     * Muestra todos los antecedentesPersonalesNoPatologicoss de la BD
     */
    async showAllAntecedentesPersonalesNoPatologicos(): Promise<AntecedentesPersonalesNoPatologicosI[]> {
        return await this.antecedentesPersonalesNoPatologicosModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un antecedentesPersonalesNoPatologicos mediante su ID en la BD
     * @param idAntecedentesPersonalesNoPatologicos 
     */
    async findAntecedentesPersonalesNoPatologicosById(idAntecedentesPersonalesNoPatologicos: string): Promise<AntecedentesPersonalesNoPatologicosI> {
        return await this.antecedentesPersonalesNoPatologicosModel.findOne( { _id: idAntecedentesPersonalesNoPatologicos } );
    }

    /**
     * Genera un nuevo antecedentesPersonalesNoPatologicos en la BD
     * @param antecedentesPersonalesNoPatologicos 
     */
    async createAntecedentesPersonalesNoPatologicos(antecedentesPersonalesNoPatologicos: AntecedentesPersonalesNoPatologicosI): Promise<AntecedentesPersonalesNoPatologicosI> {
        const newAntecedentesPersonalesNoPatologicos = new this.antecedentesPersonalesNoPatologicosModel(antecedentesPersonalesNoPatologicos);
        return await newAntecedentesPersonalesNoPatologicos.save();
    }

    /**
     * Busca un antecedentesPersonalesNoPatologicos por su Id para poder actualizarlo
     * @param idAntecedentesPersonalesNoPatologicos 
     * @param antecedentesPersonalesNoPatologicos 
     */
    async updateAntecedentesPersonalesNoPatologicos(idAntecedentesPersonalesNoPatologicos: string, antecedentesPersonalesNoPatologicos: AntecedentesPersonalesNoPatologicosI): Promise<any> {
        return await this.antecedentesPersonalesNoPatologicosModel.updateOne({ _id: idAntecedentesPersonalesNoPatologicos }, antecedentesPersonalesNoPatologicos);
    }

    /**
     * Busca un antecedentesPersonalesNoPatologicos por su ID y lo elimina de la BD
     * @param idAntecedentesPersonalesNoPatologicos
     */
    async deleteAntecedentesPersonalesNoPatologicos(idAntecedentesPersonalesNoPatologicos: string ): Promise<AntecedentesPersonalesNoPatologicosI> {
        return await this.antecedentesPersonalesNoPatologicosModel.findOneAndDelete({ _id: idAntecedentesPersonalesNoPatologicos });
    }

}
