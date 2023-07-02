import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppPatologiasExantematicasService } from '../services/app_patologias_exantematicas.service';
import { AppPatologiasExantematicasI } from 'src/interfaces/app_patologias_exantematicas.interface';
import { AppPatologiasExantematicasDto } from 'src/dto/app_patologias_exantematicas-dto';

@Controller('apppatologiasexantematicas')
export class AppPatologiasExantematicasController {

    TAG = "AppPatologiasExantematicasController";

    constructor(private readonly appPatologiasExantematicasService: AppPatologiasExantematicasService) {}

    @Get()
    showAllAppPatologiasExantematicas() : Promise<AppPatologiasExantematicasI[]> {
        console.log(new Date(), this.TAG, "showAllAppPatologiasExantematicas");
        return this.appPatologiasExantematicasService.showAllAppPatologiasExantematicas();
    }

    @Get(':id')
    findAppPatologiasExantematicasById(@Param('id') idAppPatologiasExantematicas: string): Promise<AppPatologiasExantematicasI> {
        console.log(new Date(), this.TAG, "findAppPatologiasExantematicasById");
        return this.appPatologiasExantematicasService.findAppPatologiasExantematicasById(idAppPatologiasExantematicas);
    }

    @Post()
    createAppPatologiasExantematicas(@Body() appPatologiasExantematicasDto: AppPatologiasExantematicasDto): Promise<AppPatologiasExantematicasI> {
        console.log(new Date(), this.TAG, "createAppPatologiasExantematicas");
        return this.appPatologiasExantematicasService.createAppPatologiasExantematicas(appPatologiasExantematicasDto);
    }

    @Put(':id') 
    updateAppPatologiasExantematicas(@Param('id') idAppPatologiasExantematicas: string, @Body() appPatologiasExantematicasDto: AppPatologiasExantematicasDto): Promise<AppPatologiasExantematicasI> {
        console.log(new Date(), this.TAG, "updateAppPatologiasExantematicas");
        return this.appPatologiasExantematicasService.updateAppPatologiasExantematicas(idAppPatologiasExantematicas, appPatologiasExantematicasDto);
    }

    @Delete(':id')
    deleteAppPatologiasExantematicas(@Param('id') idAppPatologiasExantematicas: string): Promise<AppPatologiasExantematicasI> {
        console.log(new Date(), this.TAG, "deleteAppPatologiasExantematicas");
        return this.appPatologiasExantematicasService.deleteAppPatologiasExantematicas(idAppPatologiasExantematicas);
    }

}
