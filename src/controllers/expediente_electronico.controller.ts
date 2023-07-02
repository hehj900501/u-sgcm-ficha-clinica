import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExpedienteElectronicoService } from '../services/expediente_electronico.service';
import { ExpedienteElectronicoI } from 'src/interfaces/expediente_electronico.interface';
import { ExpedienteElectronicoDto } from 'src/dto/expediente_electronico-dto';

@Controller('expedienteElectronico')
export class ExpedienteElectronicoController {

    TAG = "ExpedienteElectronicoController";

    constructor(private readonly expedienteElectronicoService: ExpedienteElectronicoService) {}

    @Get()
    showAllExpedienteElectronico() : Promise<ExpedienteElectronicoI[]> {
        console.log(new Date(), this.TAG, "showAllExpedienteElectronico");
        return this.expedienteElectronicoService.showAllExpedienteElectronico();
    }

    @Get(':id')
    findExpedienteElectronicoById(@Param('id') idExpedienteElectronico: string): Promise<ExpedienteElectronicoI> {
        console.log(new Date(), this.TAG, "findExpedienteElectronicoById");
        return this.expedienteElectronicoService.findExpedienteElectronicoById(idExpedienteElectronico);
    }

    @Post()
    createExpedienteElectronico(@Body() expedienteElectronicoDto: ExpedienteElectronicoDto): Promise<ExpedienteElectronicoI> {
        console.log(new Date(), this.TAG, "createExpedienteElectronico");
        return this.expedienteElectronicoService.createExpedienteElectronico(expedienteElectronicoDto);
    }

    @Put(':id') 
    updateExpedienteElectronico(@Param('id') idExpedienteElectronico: string, @Body() expedienteElectronicoDto: ExpedienteElectronicoDto): Promise<ExpedienteElectronicoI> {
        console.log(new Date(), this.TAG, "updateExpedienteElectronico");
        return this.expedienteElectronicoService.updateExpedienteElectronico(idExpedienteElectronico, expedienteElectronicoDto);
    }

    @Delete(':id')
    deleteExpedienteElectronico(@Param('id') idExpedienteElectronico: string): Promise<ExpedienteElectronicoI> {
        console.log(new Date(), this.TAG, "deleteExpedienteElectronico");
        return this.expedienteElectronicoService.deleteExpedienteElectronico(idExpedienteElectronico);
    }

}
