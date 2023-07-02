import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AppPatologiasExantematicasI } from 'src/interfaces/app_patologias_exantematicas.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppPatologiasExantematicasService {

    constructor(@InjectModel('AppPatologiasExantematicas') private readonly appPatologiasExantematicasModel : Model<AppPatologiasExantematicasI>) {}

    /**
     * Muestra todos los appPatologiasExantematicas de la BD
     */
    async showAllAppPatologiasExantematicas(): Promise<AppPatologiasExantematicasI[]> {
        return await this.appPatologiasExantematicasModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un appPatologiasExantematicas mediante su ID en la BD
     * @param idAppPatologiasExantematicas 
     */
    async findAppPatologiasExantematicasById(idAppPatologiasExantematicas: string): Promise<AppPatologiasExantematicasI> {
        return await this.appPatologiasExantematicasModel.findOne( { _id: idAppPatologiasExantematicas } );
    }

    /**
     * Genera un nuevo appPatologiasExantematicas en la BD
     * @param appPatologiasExantematicas 
     */
    async createAppPatologiasExantematicas(appPatologiasExantematicas: AppPatologiasExantematicasI): Promise<AppPatologiasExantematicasI> {
        const newAppPatologiasExantematicas = new this.appPatologiasExantematicasModel(appPatologiasExantematicas);
        return await newAppPatologiasExantematicas.save();
    }

    /**
     * Busca un appPatologiasExantematicas por su Id para poder actualizarlo
     * @param idAppPatologiasExantematicas 
     * @param appPatologiasExantematicas 
     */
    async updateAppPatologiasExantematicas(idAppPatologiasExantematicas: string, appPatologiasExantematicas: AppPatologiasExantematicasI): Promise<any> {
        return await this.appPatologiasExantematicasModel.updateOne({ _id: idAppPatologiasExantematicas }, appPatologiasExantematicas);
    }

    /**
     * Busca un appPatologiasExantematicas por su ID y lo elimina de la BD
     * @param idAppPatologiasExantematicas
     */
    async deleteAppPatologiasExantematicas(idAppPatologiasExantematicas: string ): Promise<AppPatologiasExantematicasI> {
        return await this.appPatologiasExantematicasModel.findOneAndDelete({ _id: idAppPatologiasExantematicas });
    }

}
