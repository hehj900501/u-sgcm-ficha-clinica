import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AlergiasService } from '../services/alergias.service';
import { AlergiasI } from 'src/interfaces/alergias.interface';
import { AlergiasDto } from 'src/dto/alergias-dto';

@Controller('alergias')
export class AlergiasController {

    TAG = "AlergiasController";

    constructor(private readonly alergiasService: AlergiasService) {}

    @Get()
    showAllAlergias() : Promise<AlergiasI[]> {
        console.log(new Date(), this.TAG, "showAllAlergias");
        return this.alergiasService.showAllAlergias();
    }

    @Get(':id')
    findAlergiasById(@Param('id') idAlergias: string): Promise<AlergiasI> {
        console.log(new Date(), this.TAG, "findAlergiasById");
        return this.alergiasService.findAlergiasById(idAlergias);
    }

    @Post()
    createAlergias(@Body() alergiasDto: AlergiasDto): Promise<AlergiasI> {
        console.log(new Date(), this.TAG, "createAlergias");
        return this.alergiasService.createAlergias(alergiasDto);
    }

    @Put(':id') 
    updateAlergias(@Param('id') idAlergias: string, @Body() alergiasDto: AlergiasDto): Promise<AlergiasI> {
        console.log(new Date(), this.TAG, "updateAlergias");
        return this.alergiasService.updateAlergias(idAlergias, alergiasDto);
    }

    @Delete(':id')
    deleteAlergias(@Param('id') idAlergias: string): Promise<AlergiasI> {
        console.log(new Date(), this.TAG, "deleteAlergias");
        return this.alergiasService.deleteAlergias(idAlergias);
    }

}
