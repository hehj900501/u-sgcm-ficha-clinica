import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SignosVitalesI } from 'src/interfaces/signos_vitales.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SignosVitalesService {

    constructor(@InjectModel('SignosVitales') private readonly signosVitalesModel : Model<SignosVitalesI>) {}

    /**
     * Muestra todos los signosVitales de la BD
     */
    async showAllSignosVitales(): Promise<SignosVitalesI[]> {
        return await this.signosVitalesModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un signosVitales mediante su ID en la BD
     * @param idSignosVitales 
     */
    async findSignosVitalesById(idSignosVitales: string): Promise<SignosVitalesI> {
        return await this.signosVitalesModel.findOne( { _id: idSignosVitales } );
    }

    /**
     * Genera un nuevo signosVitales en la BD
     * @param signosVitales 
     */
    async createSignosVitales(signosVitales: SignosVitalesI): Promise<SignosVitalesI> {
        const newSignosVitales = new this.signosVitalesModel(signosVitales);
        return await newSignosVitales.save();
    }

    /**
     * Busca un signosVitales por su Id para poder actualizarlo
     * @param idSignosVitales 
     * @param signosVitales 
     */
    async updateSignosVitales(idSignosVitales: string, signosVitales: SignosVitalesI): Promise<any> {
        return await this.signosVitalesModel.updateOne({ _id: idSignosVitales }, signosVitales);
    }

    /**
     * Busca un signosVitales por su ID y lo elimina de la BD
     * @param idSignosVitales
     */
    async deleteSignosVitales(idSignosVitales: string ): Promise<SignosVitalesI> {
        return await this.signosVitalesModel.findOneAndDelete({ _id: idSignosVitales });
    }

}
