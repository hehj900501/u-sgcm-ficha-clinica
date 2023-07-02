import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppPatologiasInfectocontagiosasService } from '../services/app_patologias_infectocontagiosas.service';
import { AppPatologiasInfectocontagiosasI } from 'src/interfaces/app_patologias_infectocontagiosas.interface';
import { AppPatologiasInfectocontagiosasDto } from 'src/dto/app_patologias_infectocontagiosas-dto';

@Controller('apppatologiasinfectocontagiosas')
export class AppPatologiasInfectocontagiosasController {

    TAG = "AppPatologiasInfectocontagiosasController";

    constructor(private readonly appPatologiasInfectocontagiosasService: AppPatologiasInfectocontagiosasService) {}

    @Get()
    showAllAppPatologiasInfectocontagiosas() : Promise<AppPatologiasInfectocontagiosasI[]> {
        console.log(new Date(), this.TAG, "showAllAppPatologiasInfectocontagiosas");
        return this.appPatologiasInfectocontagiosasService.showAllAppPatologiasInfectocontagiosas();
    }

    @Get(':id')
    findAppPatologiasInfectocontagiosasById(@Param('id') idAppPatologiasInfectocontagiosas: string): Promise<AppPatologiasInfectocontagiosasI> {
        console.log(new Date(), this.TAG, "findAppPatologiasInfectocontagiosasById");
        return this.appPatologiasInfectocontagiosasService.findAppPatologiasInfectocontagiosasById(idAppPatologiasInfectocontagiosas);
    }

    @Post()
    createAppPatologiasInfectocontagiosas(@Body() appPatologiasInfectocontagiosasDto: AppPatologiasInfectocontagiosasDto): Promise<AppPatologiasInfectocontagiosasI> {
        console.log(new Date(), this.TAG, "createAppPatologiasInfectocontagiosas");
        return this.appPatologiasInfectocontagiosasService.createAppPatologiasInfectocontagiosas(appPatologiasInfectocontagiosasDto);
    }

    @Put(':id') 
    updateAppPatologiasInfectocontagiosas(@Param('id') idAppPatologiasInfectocontagiosas: string, @Body() appPatologiasInfectocontagiosasDto: AppPatologiasInfectocontagiosasDto): Promise<AppPatologiasInfectocontagiosasI> {
        console.log(new Date(), this.TAG, "updateAppPatologiasInfectocontagiosas");
        return this.appPatologiasInfectocontagiosasService.updateAppPatologiasInfectocontagiosas(idAppPatologiasInfectocontagiosas, appPatologiasInfectocontagiosasDto);
    }

    @Delete(':id')
    deleteAppPatologiasInfectocontagiosas(@Param('id') idAppPatologiasInfectocontagiosas: string): Promise<AppPatologiasInfectocontagiosasI> {
        console.log(new Date(), this.TAG, "deleteAppPatologiasInfectocontagiosas");
        return this.appPatologiasInfectocontagiosasService.deleteAppPatologiasInfectocontagiosas(idAppPatologiasInfectocontagiosas);
    }

}
