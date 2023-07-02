import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SignosVitalesService } from '../services/signos_vitales.service';
import { SignosVitalesI } from 'src/interfaces/signos_vitales.interface';
import { SignosVitalesDto } from 'src/dto/signos_vitales-dto';

@Controller('signosvitales')
export class SignosVitalesController {

    TAG = "SignosVitalesController";

    constructor(private readonly signosVitalesService: SignosVitalesService) {}

    @Get()
    showAllSignosVitales() : Promise<SignosVitalesI[]> {
        console.log(new Date(), this.TAG, "showAllSignosVitales");
        return this.signosVitalesService.showAllSignosVitales();
    }

    @Get(':id')
    findSignosVitalesById(@Param('id') idSignosVitales: string): Promise<SignosVitalesI> {
        console.log(new Date(), this.TAG, "findSignosVitalesById");
        return this.signosVitalesService.findSignosVitalesById(idSignosVitales);
    }

    @Post()
    createSignosVitales(@Body() signosVitalesDto: SignosVitalesDto): Promise<SignosVitalesI> {
        console.log(new Date(), this.TAG, "createSignosVitales");
        return this.signosVitalesService.createSignosVitales(signosVitalesDto);
    }

    @Put(':id') 
    updateSignosVitales(@Param('id') idSignosVitales: string, @Body() signosVitalesDto: SignosVitalesDto): Promise<SignosVitalesI> {
        console.log(new Date(), this.TAG, "updateSignosVitales");
        return this.signosVitalesService.updateSignosVitales(idSignosVitales, signosVitalesDto);
    }

    @Delete(':id')
    deleteSignosVitales(@Param('id') idSignosVitales: string): Promise<SignosVitalesI> {
        console.log(new Date(), this.TAG, "deleteSignosVitales");
        return this.signosVitalesService.deleteSignosVitales(idSignosVitales);
    }

}
