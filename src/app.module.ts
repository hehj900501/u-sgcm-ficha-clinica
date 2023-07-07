import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AntecedentesPersonalesPatologicosController } from './controllers/antecedentes_personales_patologicos.controller';
import { AntecedentesPersonalesPatologicosSchema } from './schemas/antecedentes_personales_patologicos.schema';
import { AntecedentesPersonalesPatologicosService } from './services/antecedentes_personales_patologicos.service';
import { jwtConstants } from './constants';
import { TipoAntecedentesPersonalesPatologicosSchema } from './schemas/tipo_antecedentes_personales_patologicos.schema';
import { TipoAntecedentesPersonalesPatologicosController } from './controllers/tipo_antecedentes_personales_patologicos.controller';
import { TipoAntecedentesPersonalesPatologicosService } from './services/tipo_antecedentes_personales_patologicos.service';
import { AntecedentesPersonalesNoPatologicosSchema } from './schemas/antecedentes_personales_no_patologicos.schema';
import { AntecedentesPersonalesNoPatologicosController } from './controllers/antecedentes_personales_no_patologicos.controller';
import { AntecedentesPersonalesNoPatologicosService } from './services/antecedentes_personales_no_patologicos.service';
import { AntecedentesHeredofamiliaresSchema } from './schemas/antecedentes_heredofamiliares.schema';
import { AntecedentesHeredofamiliaresController } from './controllers/antecedentes_heredofamiliares.controller';
import { AntecedentesHeredofamiliaresService } from './services/antecedentes_heredofamiliares.service';
import { SignosVitalesSchema } from './schemas/signos_vitales.schema';
import { SignosVitalesController } from './controllers/signos_vitales.controller';
import { SignosVitalesService } from './services/signos_vitales.service';
import { AlergiasSchema } from './schemas/alergias.schema';
import { AlergiasController } from './controllers/alergias.controller';
import { AlergiasService } from './services/alergias.service';
import { HistoriaClinicaSchema } from './schemas/historia_clinica.schema';
import { AppGeneralesSchema } from './schemas/app_generales.schema';
import { AppPatologiasCronicoDegenerativasSchema } from './schemas/app_patologias_cronico_degenerativas.schema';
import { AppPatologiasExantematicasSchema } from './schemas/app_patologias_exantematicas.schema';
import { AppPatologiasInfectocontagiosasSchema } from './schemas/app_patologias_infectocontagiosas.schema';
import { AppGeneralesController } from './controllers/app_generales.controller';
import { AppPatologiasCronicoDegenerativasController } from './controllers/app_patologias_cronico_degenerativas.controller';
import { AppPatologiasExantematicasController } from './controllers/app_patologias_exantematicas.controller';
import { AppPatologiasInfectocontagiosasController } from './controllers/app_patologias_infectocontagiosas.controller';
import { HistoriaClinicaController } from './controllers/historia_clinica.controller';
import { AppGeneralesService } from './services/app_generales.service';
import { AppPatologiasCronicoDegenerativasService } from './services/app_patologias_cronico_degenerativas.service';
import { AppPatologiasExantematicasService } from './services/app_patologias_exantematicas.service';
import { AppPatologiasInfectocontagiosasService } from './services/app_patologias_infectocontagiosas.service';
import { HistoriaClinicaService } from './services/historia_clinica.service';
import { ExpedienteElectronicoSchema } from './schemas/expediente_electronico.schema';
import { ExpedienteElectronicoController } from './controllers/expediente_electronico.controller';
import { ExpedienteElectronicoService } from './services/expediente_electronico.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '34560s' },
    }),
    MongooseModule.forRoot('mongodb://localhost/ultron', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Alergias', schema: AlergiasSchema },
      { name: 'AntecedentesHeredofamiliares', schema: AntecedentesHeredofamiliaresSchema },
      { name: 'AntecedentesPersonalesNoPatologicos', schema: AntecedentesPersonalesNoPatologicosSchema },
      { name: 'AntecedentesPersonalesPatologicos', schema: AntecedentesPersonalesPatologicosSchema },
      { name: 'AppGenerales', schema: AppGeneralesSchema },
      { name: 'AppPatologiasCronicoDegenerativas', schema: AppPatologiasCronicoDegenerativasSchema },
      { name: 'AppPatologiasExantematicas', schema: AppPatologiasExantematicasSchema },
      { name: 'AppPatologiasInfectocontagiosas', schema: AppPatologiasInfectocontagiosasSchema },
      { name: 'ExpedienteElectronico', schema: ExpedienteElectronicoSchema },
      { name: 'HistoriaClinica', schema: HistoriaClinicaSchema },
      { name: 'SignosVitales', schema: SignosVitalesSchema },
      { name: 'TipoAntecedentesPersonalesPatologicos', schema: TipoAntecedentesPersonalesPatologicosSchema },
    ])
  ],
  controllers: [
    AlergiasController,
    AntecedentesHeredofamiliaresController,
    AntecedentesPersonalesPatologicosController,
    AntecedentesPersonalesNoPatologicosController,
    AppGeneralesController,
    AppPatologiasCronicoDegenerativasController,
    AppPatologiasExantematicasController,
    AppPatologiasInfectocontagiosasController,
    ExpedienteElectronicoController,
    HistoriaClinicaController,
    SignosVitalesController,
    TipoAntecedentesPersonalesPatologicosController,
  ],
  providers: [
    // SERVICIOS
    AlergiasService,
    AntecedentesHeredofamiliaresService,
    AntecedentesPersonalesPatologicosService,
    AntecedentesPersonalesNoPatologicosService,
    AppGeneralesService,
    AppPatologiasCronicoDegenerativasService,
    AppPatologiasExantematicasService,
    AppPatologiasInfectocontagiosasService,
    ExpedienteElectronicoService,
    HistoriaClinicaService,
    SignosVitalesService,
    TipoAntecedentesPersonalesPatologicosService,
  ],
})
export class AppModule { }
