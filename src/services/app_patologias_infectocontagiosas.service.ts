import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AppPatologiasInfectocontagiosasI } from 'src/interfaces/app_patologias_infectocontagiosas.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppPatologiasInfectocontagiosasService {

    constructor(@InjectModel('AppPatologiasInfectocontagiosas') private readonly appPatologiasInfectocontagiosasModel : Model<AppPatologiasInfectocontagiosasI>) {}

    /**
     * Muestra todos los appPatologiasInfectocontagiosas de la BD
     */
    async showAllAppPatologiasInfectocontagiosas(): Promise<AppPatologiasInfectocontagiosasI[]> {
        return await this.appPatologiasInfectocontagiosasModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un appPatologiasInfectocontagiosas mediante su ID en la BD
     * @param idAppPatologiasInfectocontagiosas 
     */
    async findAppPatologiasInfectocontagiosasById(idAppPatologiasInfectocontagiosas: string): Promise<AppPatologiasInfectocontagiosasI> {
        return await this.appPatologiasInfectocontagiosasModel.findOne( { _id: idAppPatologiasInfectocontagiosas } );
    }

    /**
     * Genera un nuevo appPatologiasInfectocontagiosas en la BD
     * @param appPatologiasInfectocontagiosas 
     */
    async createAppPatologiasInfectocontagiosas(appPatologiasInfectocontagiosas: AppPatologiasInfectocontagiosasI): Promise<AppPatologiasInfectocontagiosasI> {
        const newAppPatologiasInfectocontagiosas = new this.appPatologiasInfectocontagiosasModel(appPatologiasInfectocontagiosas);
        return await newAppPatologiasInfectocontagiosas.save();
    }

    /**
     * Busca un appPatologiasInfectocontagiosas por su Id para poder actualizarlo
     * @param idAppPatologiasInfectocontagiosas 
     * @param appPatologiasInfectocontagiosas 
     */
    async updateAppPatologiasInfectocontagiosas(idAppPatologiasInfectocontagiosas: string, appPatologiasInfectocontagiosas: AppPatologiasInfectocontagiosasI): Promise<any> {
        return await this.appPatologiasInfectocontagiosasModel.updateOne({ _id: idAppPatologiasInfectocontagiosas }, appPatologiasInfectocontagiosas);
    }

    /**
     * Busca un appPatologiasInfectocontagiosas por su ID y lo elimina de la BD
     * @param idAppPatologiasInfectocontagiosas
     */
    async deleteAppPatologiasInfectocontagiosas(idAppPatologiasInfectocontagiosas: string ): Promise<AppPatologiasInfectocontagiosasI> {
        return await this.appPatologiasInfectocontagiosasModel.findOneAndDelete({ _id: idAppPatologiasInfectocontagiosas });
    }

}
