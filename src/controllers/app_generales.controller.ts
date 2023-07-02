import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppGeneralesService } from '../services/app_generales.service';
import { AppGeneralesI } from 'src/interfaces/app_generales.interface';
import { AppGeneralesDto } from 'src/dto/app_generales-dto';

@Controller('appgenerales')
export class AppGeneralesController {

    TAG = "AppGeneralesController";

    constructor(private readonly appGeneralesService: AppGeneralesService) {}

    @Get()
    showAllAppGenerales() : Promise<AppGeneralesI[]> {
        console.log(new Date(), this.TAG, "showAllAppGenerales");
        return this.appGeneralesService.showAllAppGenerales();
    }

    @Get(':id')
    findAppGeneralesById(@Param('id') idAppGenerales: string): Promise<AppGeneralesI> {
        console.log(new Date(), this.TAG, "findAppGeneralesById");
        return this.appGeneralesService.findAppGeneralesById(idAppGenerales);
    }

    @Post()
    createAppGenerales(@Body() appGeneralesDto: AppGeneralesDto): Promise<AppGeneralesI> {
        console.log(new Date(), this.TAG, "createAppGenerales");
        return this.appGeneralesService.createAppGenerales(appGeneralesDto);
    }

    @Put(':id') 
    updateAppGenerales(@Param('id') idAppGenerales: string, @Body() appGeneralesDto: AppGeneralesDto): Promise<AppGeneralesI> {
        console.log(new Date(), this.TAG, "updateAppGenerales");
        return this.appGeneralesService.updateAppGenerales(idAppGenerales, appGeneralesDto);
    }

    @Delete(':id')
    deleteAppGenerales(@Param('id') idAppGenerales: string): Promise<AppGeneralesI> {
        console.log(new Date(), this.TAG, "deleteAppGenerales");
        return this.appGeneralesService.deleteAppGenerales(idAppGenerales);
    }

}
