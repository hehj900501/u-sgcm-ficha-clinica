import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AppGeneralesI } from 'src/interfaces/app_generales.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppGeneralesService {

    constructor(@InjectModel('AppGenerales') private readonly appGeneralesModel : Model<AppGeneralesI>) {}

    /**
     * Muestra todos los appGenerales de la BD
     */
    async showAllAppGenerales(): Promise<AppGeneralesI[]> {
        return await this.appGeneralesModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un appGenerales mediante su ID en la BD
     * @param idAppGenerales 
     */
    async findAppGeneralesById(idAppGenerales: string): Promise<AppGeneralesI> {
        return await this.appGeneralesModel.findOne( { _id: idAppGenerales } );
    }

    /**
     * Genera un nuevo appGenerales en la BD
     * @param appGenerales 
     */
    async createAppGenerales(appGenerales: AppGeneralesI): Promise<AppGeneralesI> {
        const newAppGenerales = new this.appGeneralesModel(appGenerales);
        return await newAppGenerales.save();
    }

    /**
     * Busca un appGenerales por su Id para poder actualizarlo
     * @param idAppGenerales 
     * @param appGenerales 
     */
    async updateAppGenerales(idAppGenerales: string, appGenerales: AppGeneralesI): Promise<any> {
        return await this.appGeneralesModel.updateOne({ _id: idAppGenerales }, appGenerales);
    }

    /**
     * Busca un appGenerales por su ID y lo elimina de la BD
     * @param idAppGenerales
     */
    async deleteAppGenerales(idAppGenerales: string ): Promise<AppGeneralesI> {
        return await this.appGeneralesModel.findOneAndDelete({ _id: idAppGenerales });
    }

}
