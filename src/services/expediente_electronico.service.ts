import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ExpedienteElectronicoI } from 'src/interfaces/expediente_electronico.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpedienteElectronicoService {

    constructor(@InjectModel('ExpedienteElectronico') private readonly expedienteElectronicoModel : Model<ExpedienteElectronicoI>) {}

    /**
     * Muestra todos los expedienteElectronico de la BD
     */
    async showAllExpedienteElectronico(): Promise<ExpedienteElectronicoI[]> {
        return await this.expedienteElectronicoModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un expedienteElectronico mediante su ID en la BD
     * @param idExpedienteElectronico 
     */
    async findExpedienteElectronicoById(idExpedienteElectronico: string): Promise<ExpedienteElectronicoI> {
        return await this.expedienteElectronicoModel.findOne( { _id: idExpedienteElectronico } );
    }

    /**
     * Genera un nuevo expedienteElectronico en la BD
     * @param expedienteElectronico 
     */
    async createExpedienteElectronico(expedienteElectronico: ExpedienteElectronicoI): Promise<ExpedienteElectronicoI> {
        const newExpedienteElectronico = new this.expedienteElectronicoModel(expedienteElectronico);
        return await newExpedienteElectronico.save();
    }

    /**
     * Busca un expedienteElectronico por su Id para poder actualizarlo
     * @param idExpedienteElectronico 
     * @param expedienteElectronico 
     */
    async updateExpedienteElectronico(idExpedienteElectronico: string, expedienteElectronico: ExpedienteElectronicoI): Promise<any> {
        return await this.expedienteElectronicoModel.updateOne({ _id: idExpedienteElectronico }, expedienteElectronico);
    }

    /**
     * Busca un expedienteElectronico por su ID y lo elimina de la BD
     * @param idExpedienteElectronico
     */
    async deleteExpedienteElectronico(idExpedienteElectronico: string ): Promise<ExpedienteElectronicoI> {
        return await this.expedienteElectronicoModel.findOneAndDelete({ _id: idExpedienteElectronico });
    }

}
