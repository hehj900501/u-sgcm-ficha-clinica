import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AntecedentesPersonalesNoPatologicosService } from '../services/antecedentes_personales_no_patologicos.service';
import { AntecedentesPersonalesNoPatologicosI } from 'src/interfaces/antecedentes_personales_no_patologicos.interface';
import { AntecedentesPersonalesNoPatologicosDto } from 'src/dto/antecedentes_personales_no_patologicos-dto';

@Controller('antecedentespersonalesnopatologicos')
export class AntecedentesPersonalesNoPatologicosController {

    TAG = "AntecedentesPersonalesNoPatologicosController";

    constructor(private readonly antecedentesPersonalesNoPatologicosService: AntecedentesPersonalesNoPatologicosService) {}

    @Get()
    showAllAntecedentesPersonalesNoPatologicos() : Promise<AntecedentesPersonalesNoPatologicosI[]> {
        console.log(new Date(), this.TAG, "showAllAntecedentesPersonalesNoPatologicos");
        return this.antecedentesPersonalesNoPatologicosService.showAllAntecedentesPersonalesNoPatologicos();
    }

    @Get(':id')
    findAntecedentesPersonalesNoPatologicosById(@Param('id') idAntecedentesPersonalesNoPatologicos: string): Promise<AntecedentesPersonalesNoPatologicosI> {
        console.log(new Date(), this.TAG, "findAntecedentesPersonalesNoPatologicosById");
        return this.antecedentesPersonalesNoPatologicosService.findAntecedentesPersonalesNoPatologicosById(idAntecedentesPersonalesNoPatologicos);
    }

    @Post()
    createAntecedentesPersonalesNoPatologicos(@Body() antecedentesPersonalesNoPatologicosDto: AntecedentesPersonalesNoPatologicosDto): Promise<AntecedentesPersonalesNoPatologicosI> {
        console.log(new Date(), this.TAG, "createAntecedentesPersonalesNoPatologicos");
        return this.antecedentesPersonalesNoPatologicosService.createAntecedentesPersonalesNoPatologicos(antecedentesPersonalesNoPatologicosDto);
    }

    @Put(':id') 
    updateAntecedentesPersonalesNoPatologicos(@Param('id') idAntecedentesPersonalesNoPatologicos: string, @Body() antecedentesPersonalesNoPatologicosDto: AntecedentesPersonalesNoPatologicosDto): Promise<AntecedentesPersonalesNoPatologicosI> {
        console.log(new Date(), this.TAG, "updateAntecedentesPersonalesNoPatologicos");
        return this.antecedentesPersonalesNoPatologicosService.updateAntecedentesPersonalesNoPatologicos(idAntecedentesPersonalesNoPatologicos, antecedentesPersonalesNoPatologicosDto);
    }

    @Delete(':id')
    deleteAntecedentesPersonalesNoPatologicos(@Param('id') idAntecedentesPersonalesNoPatologicos: string): Promise<AntecedentesPersonalesNoPatologicosI> {
        console.log(new Date(), this.TAG, "deleteAntecedentesPersonalesNoPatologicos");
        return this.antecedentesPersonalesNoPatologicosService.deleteAntecedentesPersonalesNoPatologicos(idAntecedentesPersonalesNoPatologicos);
    }

}
