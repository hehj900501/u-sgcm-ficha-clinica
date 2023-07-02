import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoAntecedentesPersonalesPatologicosI } from 'src/interfaces/tipo_antecedentes_personales_patologicos.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoAntecedentesPersonalesPatologicosService {

    constructor(@InjectModel('TipoAntecedentesPersonalesPatologicos') private readonly tipoAntecedentesPersonalesPatologicosModel : Model<TipoAntecedentesPersonalesPatologicosI>) {}

    /**
     * Muestra todos los tipoAntecedentesPersonalesPatologicoss de la BD
     */
    async showAllTipoAntecedentesPersonalesPatologicos(): Promise<TipoAntecedentesPersonalesPatologicosI[]> {
        return await this.tipoAntecedentesPersonalesPatologicosModel.find({is_active: true}).sort('nombre');
    }

    /**
     * Busca solo un tipoAntecedentesPersonalesPatologicos mediante su ID en la BD
     * @param idTipoAntecedentesPersonalesPatologicos 
     */
    async findTipoAntecedentesPersonalesPatologicosById(idTipoAntecedentesPersonalesPatologicos: string): Promise<TipoAntecedentesPersonalesPatologicosI> {
        return await this.tipoAntecedentesPersonalesPatologicosModel.findOne( { _id: idTipoAntecedentesPersonalesPatologicos } );
    }

    /**
     * Genera un nuevo tipoAntecedentesPersonalesPatologicos en la BD
     * @param tipoAntecedentesPersonalesPatologicos 
     */
    async createTipoAntecedentesPersonalesPatologicos(tipoAntecedentesPersonalesPatologicos: TipoAntecedentesPersonalesPatologicosI): Promise<TipoAntecedentesPersonalesPatologicosI> {
        const newTipoAntecedentesPersonalesPatologicos = new this.tipoAntecedentesPersonalesPatologicosModel(tipoAntecedentesPersonalesPatologicos);
        return await newTipoAntecedentesPersonalesPatologicos.save();
    }

    /**
     * Busca un tipoAntecedentesPersonalesPatologicos por su Id para poder actualizarlo
     * @param idTipoAntecedentesPersonalesPatologicos 
     * @param tipoAntecedentesPersonalesPatologicos 
     */
    async updateTipoAntecedentesPersonalesPatologicos(idTipoAntecedentesPersonalesPatologicos: string, tipoAntecedentesPersonalesPatologicos: TipoAntecedentesPersonalesPatologicosI): Promise<any> {
        return await this.tipoAntecedentesPersonalesPatologicosModel.updateOne({ _id: idTipoAntecedentesPersonalesPatologicos }, tipoAntecedentesPersonalesPatologicos);
    }

    /**
     * Busca un tipoAntecedentesPersonalesPatologicos por su ID y lo elimina de la BD
     * @param idTipoAntecedentesPersonalesPatologicos
     */
    async deleteTipoAntecedentesPersonalesPatologicos(idTipoAntecedentesPersonalesPatologicos: string ): Promise<TipoAntecedentesPersonalesPatologicosI> {
        return await this.tipoAntecedentesPersonalesPatologicosModel.findOneAndDelete({ _id: idTipoAntecedentesPersonalesPatologicos });
    }

}
