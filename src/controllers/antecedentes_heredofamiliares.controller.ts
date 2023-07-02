import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AntecedentesHeredofamiliaresService } from '../services/antecedentes_heredofamiliares.service';
import { AntecedentesHeredofamiliaresI } from 'src/interfaces/antecedentes_heredofamiliares.interface';
import { AntecedentesHeredofamiliaresDto } from 'src/dto/antecedentes_heredofamiliares-dto';

@Controller('antecedentesheredofamiliares')
export class AntecedentesHeredofamiliaresController {

    TAG = "AntecedentesHeredofamiliaresController";

    constructor(private readonly antecedentesHeredofamiliaresService: AntecedentesHeredofamiliaresService) {}

    @Get()
    showAllAntecedentesHeredofamiliares() : Promise<AntecedentesHeredofamiliaresI[]> {
        console.log(new Date(), this.TAG, "showAllAntecedentesHeredofamiliares");
        return this.antecedentesHeredofamiliaresService.showAllAntecedentesHeredofamiliares();
    }

    @Get(':id')
    findAntecedentesHeredofamiliaresById(@Param('id') idAntecedentesHeredofamiliares: string): Promise<AntecedentesHeredofamiliaresI> {
        console.log(new Date(), this.TAG, "findAntecedentesHeredofamiliaresById");
        return this.antecedentesHeredofamiliaresService.findAntecedentesHeredofamiliaresById(idAntecedentesHeredofamiliares);
    }

    @Post()
    createAntecedentesHeredofamiliares(@Body() antecedentesHeredofamiliaresDto: AntecedentesHeredofamiliaresDto): Promise<AntecedentesHeredofamiliaresI> {
        console.log(new Date(), this.TAG, "createAntecedentesHeredofamiliares");
        return this.antecedentesHeredofamiliaresService.createAntecedentesHeredofamiliares(antecedentesHeredofamiliaresDto);
    }

    @Put(':id') 
    updateAntecedentesHeredofamiliares(@Param('id') idAntecedentesHeredofamiliares: string, @Body() antecedentesHeredofamiliaresDto: AntecedentesHeredofamiliaresDto): Promise<AntecedentesHeredofamiliaresI> {
        console.log(new Date(), this.TAG, "updateAntecedentesHeredofamiliares");
        return this.antecedentesHeredofamiliaresService.updateAntecedentesHeredofamiliares(idAntecedentesHeredofamiliares, antecedentesHeredofamiliaresDto);
    }

    @Delete(':id')
    deleteAntecedentesHeredofamiliares(@Param('id') idAntecedentesHeredofamiliares: string): Promise<AntecedentesHeredofamiliaresI> {
        console.log(new Date(), this.TAG, "deleteAntecedentesHeredofamiliares");
        return this.antecedentesHeredofamiliaresService.deleteAntecedentesHeredofamiliares(idAntecedentesHeredofamiliares);
    }

}
