import { Document } from "mongoose";

export class AntecedentesHeredofamiliaresDto extends Document {
    
    readonly padre_diabetes_mellitus: boolean;
    readonly padre_hipertension_arterial_sistemica: boolean;
    readonly padre_dislipidemias: boolean;
    readonly padre_neoplasias: boolean;
    readonly padre_malformaicones_hereditarias: boolean;
    readonly padre_alergias: boolean;
    readonly padre_enf_psiquiatricas: boolean;
    readonly padre_enf_neurologicas: boolean;
    readonly padre_enf_cardiovasculares: boolean;
    readonly padre_enf_broncopulmonares: boolean;
    readonly padre_enf_tiroideas: boolean;
    readonly padre_enf_renales: boolean;
    readonly padre_enf_osteoarticulares: boolean;
    readonly padre_enf_infectocontagiosas: boolean;

    readonly madre_diabetes_mellitus: boolean;
    readonly madre_hipertension_arterial_sistemica: boolean;
    readonly madre_dislipidemias: boolean;
    readonly madre_neoplasias: boolean;
    readonly madre_malformaicones_hereditarias: boolean;
    readonly madre_alergias: boolean;
    readonly madre_enf_psiquiatricas: boolean;
    readonly madre_enf_neurologicas: boolean;
    readonly madre_enf_cardiovasculares: boolean;
    readonly madre_enf_broncopulmonares: boolean;
    readonly madre_enf_tiroideas: boolean;
    readonly madre_enf_renales: boolean;
    readonly madre_enf_osteoarticulares: boolean;
    readonly madre_enf_infectocontagiosas: boolean;

    readonly abuelos_p_diabetes_mellitus: boolean;
    readonly abuelos_p_hipertension_arterial_sistemica: boolean;
    readonly abuelos_p_dislipidemias: boolean;
    readonly abuelos_p_neoplasias: boolean;
    readonly abuelos_p_malformaicones_hereditarias: boolean;
    readonly abuelos_p_alergias: boolean;
    readonly abuelos_p_enf_psiquiatricas: boolean;
    readonly abuelos_p_enf_neurologicas: boolean;
    readonly abuelos_p_enf_cardiovasculares: boolean;
    readonly abuelos_p_enf_broncopulmonares: boolean;
    readonly abuelos_p_enf_tiroideas: boolean;
    readonly abuelos_p_enf_renales: boolean;
    readonly abuelos_p_enf_osteoarticulares: boolean;
    readonly abuelos_p_enf_infectocontagiosas: boolean;

    readonly abuelos_m_diabetes_mellitus: boolean;
    readonly abuelos_m_hipertension_arterial_sistemica: boolean;
    readonly abuelos_m_dislipidemias: boolean;
    readonly abuelos_m_neoplasias: boolean;
    readonly abuelos_m_malformaicones_hereditarias: boolean;
    readonly abuelos_m_alergias: boolean;
    readonly abuelos_m_enf_psiquiatricas: boolean;
    readonly abuelos_m_enf_neurologicas: boolean;
    readonly abuelos_m_enf_cardiovasculares: boolean;
    readonly abuelos_m_enf_broncopulmonares: boolean;
    readonly abuelos_m_enf_tiroideas: boolean;
    readonly abuelos_m_enf_renales: boolean;
    readonly abuelos_m_enf_osteoarticulares: boolean;
    readonly abuelos_m_enf_infectocontagiosas: boolean;

    readonly hermanos_diabetes_mellitus: boolean;
    readonly hermanos_hipertension_arterial_sistemica: boolean;
    readonly hermanos_dislipidemias: boolean;
    readonly hermanos_neoplasias: boolean;
    readonly hermanos_malformaicones_hereditarias: boolean;
    readonly hermanos_alergias: boolean;
    readonly hermanos_enf_psiquiatricas: boolean;
    readonly hermanos_enf_neurologicas: boolean;
    readonly hermanos_enf_cardiovasculares: boolean;
    readonly hermanos_enf_broncopulmonares: boolean;
    readonly hermanos_enf_tiroideas: boolean;
    readonly hermanos_enf_renales: boolean;
    readonly hermanos_enf_osteoarticulares: boolean;
    readonly hermanos_enf_infectocontagiosas: boolean;
    
}
