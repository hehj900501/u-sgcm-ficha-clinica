import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AppPatologiasCronicoDegenerativasI } from 'src/interfaces/app_patologias_cronico_degenerativas.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppPatologiasCronicoDegenerativasService {

    constructor(@InjectModel('AppPatologiasCronicoDegenerativas') private readonly appPatologiasCronicoDegenerativasModel : Model<AppPatologiasCronicoDegenerativasI>) {}

    /**
     * Muestra todos los appPatologiasCronicoDegenerativas de la BD
     */
    async showAllAppPatologiasCronicoDegenerativas(): Promise<AppPatologiasCronicoDegenerativasI[]> {
        return await this.appPatologiasCronicoDegenerativasModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un appPatologiasCronicoDegenerativas mediante su ID en la BD
     * @param idAppPatologiasCronicoDegenerativas 
     */
    async findAppPatologiasCronicoDegenerativasById(idAppPatologiasCronicoDegenerativas: string): Promise<AppPatologiasCronicoDegenerativasI> {
        return await this.appPatologiasCronicoDegenerativasModel.findOne( { _id: idAppPatologiasCronicoDegenerativas } );
    }

    /**
     * Genera un nuevo appPatologiasCronicoDegenerativas en la BD
     * @param appPatologiasCronicoDegenerativas 
     */
    async createAppPatologiasCronicoDegenerativas(appPatologiasCronicoDegenerativas: AppPatologiasCronicoDegenerativasI): Promise<AppPatologiasCronicoDegenerativasI> {
        const newAppPatologiasCronicoDegenerativas = new this.appPatologiasCronicoDegenerativasModel(appPatologiasCronicoDegenerativas);
        return await newAppPatologiasCronicoDegenerativas.save();
    }

    /**
     * Busca un appPatologiasCronicoDegenerativas por su Id para poder actualizarlo
     * @param idAppPatologiasCronicoDegenerativas 
     * @param appPatologiasCronicoDegenerativas 
     */
    async updateAppPatologiasCronicoDegenerativas(idAppPatologiasCronicoDegenerativas: string, appPatologiasCronicoDegenerativas: AppPatologiasCronicoDegenerativasI): Promise<any> {
        return await this.appPatologiasCronicoDegenerativasModel.updateOne({ _id: idAppPatologiasCronicoDegenerativas }, appPatologiasCronicoDegenerativas);
    }

    /**
     * Busca un appPatologiasCronicoDegenerativas por su ID y lo elimina de la BD
     * @param idAppPatologiasCronicoDegenerativas
     */
    async deleteAppPatologiasCronicoDegenerativas(idAppPatologiasCronicoDegenerativas: string ): Promise<AppPatologiasCronicoDegenerativasI> {
        return await this.appPatologiasCronicoDegenerativasModel.findOneAndDelete({ _id: idAppPatologiasCronicoDegenerativas });
    }

}
