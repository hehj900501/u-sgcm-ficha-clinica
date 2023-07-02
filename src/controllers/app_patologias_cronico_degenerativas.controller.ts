import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppPatologiasCronicoDegenerativasService } from '../services/app_patologias_cronico_degenerativas.service';
import { AppPatologiasCronicoDegenerativasI } from 'src/interfaces/app_patologias_cronico_degenerativas.interface';
import { AppPatologiasCronicoDegenerativasDto } from 'src/dto/app_patologias_cronico_degenerativas-dto';

@Controller('apppatologiascronicodegenerativas')
export class AppPatologiasCronicoDegenerativasController {

    TAG = "AppPatologiasCronicoDegenerativasController";

    constructor(private readonly appPatologiasCronicoDegenerativasService: AppPatologiasCronicoDegenerativasService) {}

    @Get()
    showAllAppPatologiasCronicoDegenerativas() : Promise<AppPatologiasCronicoDegenerativasI[]> {
        console.log(new Date(), this.TAG, "showAllAppPatologiasCronicoDegenerativas");
        return this.appPatologiasCronicoDegenerativasService.showAllAppPatologiasCronicoDegenerativas();
    }

    @Get(':id')
    findAppPatologiasCronicoDegenerativasById(@Param('id') idAppPatologiasCronicoDegenerativas: string): Promise<AppPatologiasCronicoDegenerativasI> {
        console.log(new Date(), this.TAG, "findAppPatologiasCronicoDegenerativasById");
        return this.appPatologiasCronicoDegenerativasService.findAppPatologiasCronicoDegenerativasById(idAppPatologiasCronicoDegenerativas);
    }

    @Post()
    createAppPatologiasCronicoDegenerativas(@Body() appPatologiasCronicoDegenerativasDto: AppPatologiasCronicoDegenerativasDto): Promise<AppPatologiasCronicoDegenerativasI> {
        console.log(new Date(), this.TAG, "createAppPatologiasCronicoDegenerativas");
        return this.appPatologiasCronicoDegenerativasService.createAppPatologiasCronicoDegenerativas(appPatologiasCronicoDegenerativasDto);
    }

    @Put(':id') 
    updateAppPatologiasCronicoDegenerativas(@Param('id') idAppPatologiasCronicoDegenerativas: string, @Body() appPatologiasCronicoDegenerativasDto: AppPatologiasCronicoDegenerativasDto): Promise<AppPatologiasCronicoDegenerativasI> {
        console.log(new Date(), this.TAG, "updateAppPatologiasCronicoDegenerativas");
        return this.appPatologiasCronicoDegenerativasService.updateAppPatologiasCronicoDegenerativas(idAppPatologiasCronicoDegenerativas, appPatologiasCronicoDegenerativasDto);
    }

    @Delete(':id')
    deleteAppPatologiasCronicoDegenerativas(@Param('id') idAppPatologiasCronicoDegenerativas: string): Promise<AppPatologiasCronicoDegenerativasI> {
        console.log(new Date(), this.TAG, "deleteAppPatologiasCronicoDegenerativas");
        return this.appPatologiasCronicoDegenerativasService.deleteAppPatologiasCronicoDegenerativas(idAppPatologiasCronicoDegenerativas);
    }

}
