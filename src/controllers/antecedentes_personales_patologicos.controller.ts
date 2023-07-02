import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AntecedentesPersonalesPatologicosService } from '../services/antecedentes_personales_patologicos.service';
import { AntecedentesPersonalesPatologicosI } from 'src/interfaces/antecedentes_personales_patologicos.interface';
import { AntecedentesPersonalesPatologicosDto } from 'src/dto/antecedentes_personales_patologicos-dto';

@Controller('antecedentespersonalespatologicos')
export class AntecedentesPersonalesPatologicosController {

    TAG = "AntecedentesPersonalesPatologicosController";

    constructor(private readonly antecedentesPersonalesPatologicosService: AntecedentesPersonalesPatologicosService) {}

    @Get()
    showAllAntecedentesPersonalesPatologicos() : Promise<AntecedentesPersonalesPatologicosI[]> {
        console.log(new Date(), this.TAG, "showAllAntecedentesPersonalesPatologicos");
        return this.antecedentesPersonalesPatologicosService.showAllAntecedentesPersonalesPatologicos();
    }

    @Get(':id')
    findAntecedentesPersonalesPatologicosById(@Param('id') idAntecedentesPersonalesPatologicos: string): Promise<AntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "findAntecedentesPersonalesPatologicosById");
        return this.antecedentesPersonalesPatologicosService.findAntecedentesPersonalesPatologicosById(idAntecedentesPersonalesPatologicos);
    }

    @Post()
    createAntecedentesPersonalesPatologicos(@Body() antecedentesPersonalesPatologicosDto: AntecedentesPersonalesPatologicosDto): Promise<AntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "createAntecedentesPersonalesPatologicos");
        return this.antecedentesPersonalesPatologicosService.createAntecedentesPersonalesPatologicos(antecedentesPersonalesPatologicosDto);
    }

    @Put(':id') 
    updateAntecedentesPersonalesPatologicos(@Param('id') idAntecedentesPersonalesPatologicos: string, @Body() antecedentesPersonalesPatologicosDto: AntecedentesPersonalesPatologicosDto): Promise<AntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "updateAntecedentesPersonalesPatologicos");
        return this.antecedentesPersonalesPatologicosService.updateAntecedentesPersonalesPatologicos(idAntecedentesPersonalesPatologicos, antecedentesPersonalesPatologicosDto);
    }

    @Delete(':id')
    deleteAntecedentesPersonalesPatologicos(@Param('id') idAntecedentesPersonalesPatologicos: string): Promise<AntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "deleteAntecedentesPersonalesPatologicos");
        return this.antecedentesPersonalesPatologicosService.deleteAntecedentesPersonalesPatologicos(idAntecedentesPersonalesPatologicos);
    }

}
