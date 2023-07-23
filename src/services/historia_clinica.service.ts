import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { HistoriaClinicaI } from 'src/interfaces/historia_clinica.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HistoriaClinicaService {

    constructor(@InjectModel('HistoriaClinica') private readonly historiaClinicaModel : Model<HistoriaClinicaI>) {}

    /**
     * Muestra todos los historiaClinica de la BD
     */
    async showAllHistoriaClinica(): Promise<HistoriaClinicaI[]> {
        return await this.historiaClinicaModel.find({is_active: true}).sort('nombre')
            .populate('tipo');
    }

    /**
     * Busca solo un historiaClinica mediante su ID en la BD
     * @param idHistoriaClinica 
     */
    async findHistoriaClinicaById(idHistoriaClinica: string): Promise<HistoriaClinicaI> {
        return await this.historiaClinicaModel.findOne( { _id: idHistoriaClinica } )
        .populate({
            path: "antecedentes_personales_patologicos"
        })
        .populate({
            path: "antecedentes_personales_no_patologicos"
        })
        .populate({
            path: "antecedentes_heredofamiliares"
        })
        .populate({
            path: "signos_vitales"
        })
        .populate({
            path: "alergias"
        })
        .populate({
            path: "expediente_electronico"
        });
    }

    /**
     * Busca solo un historiaClinica mediante su Paciente ID en la BD
     * @param idHistoriaClinica 
     */
    async findHistoriaClinicaByPacienteId(idPaciente): Promise<HistoriaClinicaI> {
        return await this.historiaClinicaModel.findOne( { paciente: idPaciente } )
        .populate({
            path: "antecedentes_personales_patologicos",
            populate: {
                path: "app_generales"
            }
        })
        .populate({
            path: "antecedentes_personales_patologicos",
            populate: {
                path: "app_patologias_infectocontagiosas"
            }
        })
        .populate({
            path: "antecedentes_personales_patologicos",
            populate: {
                path: "app_patologias_cronico_degenerativas"
            }
        })
        .populate({
            path: "antecedentes_personales_patologicos",
            populate: {
                path: "app_patologias_exantematicas"
            }
        })
        .populate({
            path: "antecedentes_personales_no_patologicos"
        })
        .populate({
            path: "antecedentes_heredofamiliares"
        })
        .populate({
            path: "signos_vitales"
        })
        .populate({
            path: "alergias"
        })
        .populate({
            path: "expediente_electronico"
        });
    }

    /**
     * Genera un nuevo historiaClinica en la BD
     * @param historiaClinica 
     */
    async createHistoriaClinica(historiaClinica): Promise<HistoriaClinicaI> {
        const newHistoriaClinica = new this.historiaClinicaModel(historiaClinica);
        return await newHistoriaClinica.save();
    }

    /**
     * Busca un historiaClinica por su Id para poder actualizarlo
     * @param idHistoriaClinica 
     * @param historiaClinica 
     */
    async updateHistoriaClinica(idHistoriaClinica: string, historiaClinica): Promise<any> {
        return await this.historiaClinicaModel.updateOne({ _id: idHistoriaClinica }, historiaClinica);
    }

    /**
     * Busca un historiaClinica por su ID y lo elimina de la BD
     * @param idHistoriaClinica
     */
    async deleteHistoriaClinica(idHistoriaClinica: string ): Promise<HistoriaClinicaI> {
        return await this.historiaClinicaModel.findOneAndDelete({ _id: idHistoriaClinica });
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findHistoriaClinicasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<HistoriaClinicaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.historiaClinicaModel.find({ create_date: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
        // .populate({
        //     path: "antecedentes_personales_patologicos",
        //     populate: {
        //         path: "app_generales"
        //     }
        // })
        // .populate({
        //     path: "antecedentes_personales_patologicos",
        //     populate: {
        //         path: "app_patologias_infectocontagiosas"
        //     }
        // })
        // .populate({
        //     path: "antecedentes_personales_patologicos",
        //     populate: {
        //         path: "app_patologias_cronico_degenerativas"
        //     }
        // })
        // .populate({
        //     path: "antecedentes_personales_patologicos",
        //     populate: {
        //         path: "app_patologias_exantematicas"
        //     }
        // })
        // .populate({
        //     path: "antecedentes_personales_no_patologicos"
        // })
        // .populate({
        //     path: "antecedentes_heredofamiliares"
        // })
        // .populate({
        //     path: "signos_vitales"
        // })
        .populate({
            path: "paciente"
        })
        .populate({
            path: "dermatologo"
        })
        // .populate({
        //     path: "alergias"
        // })
        .populate({
            path: "expediente_electronico"
        });

    }

}
