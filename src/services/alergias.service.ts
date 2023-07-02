import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AlergiasI } from 'src/interfaces/alergias.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AlergiasService {

    constructor(@InjectModel('Alergias') private readonly alergiasModel : Model<AlergiasI>) {}

    /**
     * Muestra todos los alergias de la BD
     */
    async showAllAlergias(): Promise<AlergiasI[]> {
        return await this.alergiasModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un alergias mediante su ID en la BD
     * @param idAlergias 
     */
    async findAlergiasById(idAlergias: string): Promise<AlergiasI> {
        return await this.alergiasModel.findOne( { _id: idAlergias } );
    }

    /**
     * Genera un nuevo alergias en la BD
     * @param alergias 
     */
    async createAlergias(alergias: AlergiasI): Promise<AlergiasI> {
        const newAlergias = new this.alergiasModel(alergias);
        return await newAlergias.save();
    }

    /**
     * Busca un alergias por su Id para poder actualizarlo
     * @param idAlergias 
     * @param alergias 
     */
    async updateAlergias(idAlergias: string, alergias: AlergiasI): Promise<any> {
        return await this.alergiasModel.updateOne({ _id: idAlergias }, alergias);
    }

    /**
     * Busca un alergias por su ID y lo elimina de la BD
     * @param idAlergias
     */
    async deleteAlergias(idAlergias: string ): Promise<AlergiasI> {
        return await this.alergiasModel.findOneAndDelete({ _id: idAlergias });
    }

}
