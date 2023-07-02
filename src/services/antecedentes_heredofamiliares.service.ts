import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AntecedentesHeredofamiliaresI } from 'src/interfaces/antecedentes_heredofamiliares.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AntecedentesHeredofamiliaresService {

    constructor(@InjectModel('AntecedentesHeredofamiliares') private readonly antecedentesHeredofamiliaresModel : Model<AntecedentesHeredofamiliaresI>) {}

    /**
     * Muestra todos los antecedentesHeredofamiliaress de la BD
     */
    async showAllAntecedentesHeredofamiliares(): Promise<AntecedentesHeredofamiliaresI[]> {
        return await this.antecedentesHeredofamiliaresModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un antecedentesHeredofamiliares mediante su ID en la BD
     * @param idAntecedentesHeredofamiliares 
     */
    async findAntecedentesHeredofamiliaresById(idAntecedentesHeredofamiliares: string): Promise<AntecedentesHeredofamiliaresI> {
        return await this.antecedentesHeredofamiliaresModel.findOne( { _id: idAntecedentesHeredofamiliares } );
    }

    /**
     * Genera un nuevo antecedentesHeredofamiliares en la BD
     * @param antecedentesHeredofamiliares 
     */
    async createAntecedentesHeredofamiliares(antecedentesHeredofamiliares: AntecedentesHeredofamiliaresI): Promise<AntecedentesHeredofamiliaresI> {
        const newAntecedentesHeredofamiliares = new this.antecedentesHeredofamiliaresModel(antecedentesHeredofamiliares);
        return await newAntecedentesHeredofamiliares.save();
    }

    /**
     * Busca un antecedentesHeredofamiliares por su Id para poder actualizarlo
     * @param idAntecedentesHeredofamiliares 
     * @param antecedentesHeredofamiliares 
     */
    async updateAntecedentesHeredofamiliares(idAntecedentesHeredofamiliares: string, antecedentesHeredofamiliares: AntecedentesHeredofamiliaresI): Promise<any> {
        return await this.antecedentesHeredofamiliaresModel.updateOne({ _id: idAntecedentesHeredofamiliares }, antecedentesHeredofamiliares);
    }

    /**
     * Busca un antecedentesHeredofamiliares por su ID y lo elimina de la BD
     * @param idAntecedentesHeredofamiliares
     */
    async deleteAntecedentesHeredofamiliares(idAntecedentesHeredofamiliares: string ): Promise<AntecedentesHeredofamiliaresI> {
        return await this.antecedentesHeredofamiliaresModel.findOneAndDelete({ _id: idAntecedentesHeredofamiliares });
    }

}
