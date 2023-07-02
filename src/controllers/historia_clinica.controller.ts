import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HistoriaClinicaService } from '../services/historia_clinica.service';
import { HistoriaClinicaI } from 'src/interfaces/historia_clinica.interface';
import { HistoriaClinicaDto } from 'src/dto/historia_clinica-dto';

@Controller('historiaclinica')
export class HistoriaClinicaController {

    TAG = "HistoriaClinicaController";

    constructor(private readonly historiaClinicaService: HistoriaClinicaService) {}

    @Get()
    showAllHistoriaClinica() : Promise<HistoriaClinicaI[]> {
        console.log(new Date(), this.TAG, "showAllHistoriaClinica");
        return this.historiaClinicaService.showAllHistoriaClinica();
    }

    @Get(':id')
    findHistoriaClinicaById(@Param('id') idHistoriaClinica: string): Promise<HistoriaClinicaI> {
        console.log(new Date(), this.TAG, "findHistoriaClinicaById");
        return this.historiaClinicaService.findHistoriaClinicaById(idHistoriaClinica);
    }

    @Get('paciente/:idPaciente')
    findHistoriaClinicaByPacienteId(@Param('idPaciente') idPaciente: string): Promise<HistoriaClinicaI> {
        console.log(new Date(), this.TAG, "findHistoriaClinicaByPacienteId");
        return this.historiaClinicaService.findHistoriaClinicaByPacienteId(idPaciente);
    }

    @Post()
    createHistoriaClinica(@Body() historiaClinicaDto: HistoriaClinicaDto): Promise<HistoriaClinicaI> {
        console.log(new Date(), this.TAG, "createHistoriaClinica");
        return this.historiaClinicaService.createHistoriaClinica(historiaClinicaDto);
    }

    @Put(':id') 
    updateHistoriaClinica(@Param('id') idHistoriaClinica: string, @Body() historiaClinicaDto: HistoriaClinicaDto): Promise<HistoriaClinicaI> {
        console.log(new Date(), this.TAG, "updateHistoriaClinica");
        return this.historiaClinicaService.updateHistoriaClinica(idHistoriaClinica, historiaClinicaDto);
    }

    @Delete(':id')
    deleteHistoriaClinica(@Param('id') idHistoriaClinica: string): Promise<HistoriaClinicaI> {
        console.log(new Date(), this.TAG, "deleteHistoriaClinica");
        return this.historiaClinicaService.deleteHistoriaClinica(idHistoriaClinica);
    }

}
