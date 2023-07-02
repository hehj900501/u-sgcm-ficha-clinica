import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoAntecedentesPersonalesPatologicosService } from '../services/tipo_antecedentes_personales_patologicos.service';
import { TipoAntecedentesPersonalesPatologicosI } from 'src/interfaces/tipo_antecedentes_personales_patologicos.interface';
import { TipoAntecedentesPersonalesPatologicosDto } from 'src/dto/tipo_antecedentes_personales_patologicos-dto';

@Controller('tipoantecedentespersonalespatologicos')
export class TipoAntecedentesPersonalesPatologicosController {

    TAG = "TipoAntecedentesPersonalesPatologicosController";

    constructor(private readonly tipoAntecedentesPersonalesPatologicosService: TipoAntecedentesPersonalesPatologicosService) {}

    @Get()
    showAllTipoAntecedentesPersonalesPatologicos() : Promise<TipoAntecedentesPersonalesPatologicosI[]> {
        console.log(new Date(), this.TAG, "showAllTipoAntecedentesPersonalesPatologicos");
        return this.tipoAntecedentesPersonalesPatologicosService.showAllTipoAntecedentesPersonalesPatologicos();
    }

    @Get(':id')
    findTipoAntecedentesPersonalesPatologicosById(@Param('id') idTipoAntecedentesPersonalesPatologicos: string): Promise<TipoAntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "findTipoAntecedentesPersonalesPatologicosById");
        return this.tipoAntecedentesPersonalesPatologicosService.findTipoAntecedentesPersonalesPatologicosById(idTipoAntecedentesPersonalesPatologicos);
    }

    @Post()
    createTipoAntecedentesPersonalesPatologicos(@Body() tipoAntecedentesPersonalesPatologicosDto: TipoAntecedentesPersonalesPatologicosDto): Promise<TipoAntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "createTipoAntecedentesPersonalesPatologicos");
        return this.tipoAntecedentesPersonalesPatologicosService.createTipoAntecedentesPersonalesPatologicos(tipoAntecedentesPersonalesPatologicosDto);
    }

    @Put(':id') 
    updateTipoAntecedentesPersonalesPatologicos(@Param('id') idTipoAntecedentesPersonalesPatologicos: string, @Body() tipoAntecedentesPersonalesPatologicosDto: TipoAntecedentesPersonalesPatologicosDto): Promise<TipoAntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "updateTipoAntecedentesPersonalesPatologicos");
        return this.tipoAntecedentesPersonalesPatologicosService.updateTipoAntecedentesPersonalesPatologicos(idTipoAntecedentesPersonalesPatologicos, tipoAntecedentesPersonalesPatologicosDto);
    }

    @Delete(':id')
    deleteTipoAntecedentesPersonalesPatologicos(@Param('id') idTipoAntecedentesPersonalesPatologicos: string): Promise<TipoAntecedentesPersonalesPatologicosI> {
        console.log(new Date(), this.TAG, "deleteTipoAntecedentesPersonalesPatologicos");
        return this.tipoAntecedentesPersonalesPatologicosService.deleteTipoAntecedentesPersonalesPatologicos(idTipoAntecedentesPersonalesPatologicos);
    }

}
