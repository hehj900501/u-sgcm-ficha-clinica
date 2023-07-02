import { Document } from "mongoose";

export interface AntecedentesHeredofamiliaresI extends Document {
    padre_diabetes_mellitus: boolean;
    padre_hipertension_arterial_sistemica: boolean;
    padre_dislipidemias: boolean;
    padre_neoplasias: boolean;
    padre_malformaicones_hereditarias: boolean;
    padre_alergias: boolean;
    padre_enf_psiquiatricas: boolean;
    padre_enf_neurologicas: boolean;
    padre_enf_cardiovasculares: boolean;
    padre_enf_broncopulmonares: boolean;
    padre_enf_tiroideas: boolean;
    padre_enf_renales: boolean;
    padre_enf_osteoarticulares: boolean;
    padre_enf_infectocontagiosas: boolean;

    madre_diabetes_mellitus: boolean;
    madre_hipertension_arterial_sistemica: boolean;
    madre_dislipidemias: boolean;
    madre_neoplasias: boolean;
    madre_malformaicones_hereditarias: boolean;
    madre_alergias: boolean;
    madre_enf_psiquiatricas: boolean;
    madre_enf_neurologicas: boolean;
    madre_enf_cardiovasculares: boolean;
    madre_enf_broncopulmonares: boolean;
    madre_enf_tiroideas: boolean;
    madre_enf_renales: boolean;
    madre_enf_osteoarticulares: boolean;
    madre_enf_infectocontagiosas: boolean;

    abuelos_p_diabetes_mellitus: boolean;
    abuelos_p_hipertension_arterial_sistemica: boolean;
    abuelos_p_dislipidemias: boolean;
    abuelos_p_neoplasias: boolean;
    abuelos_p_malformaicones_hereditarias: boolean;
    abuelos_p_alergias: boolean;
    abuelos_p_enf_psiquiatricas: boolean;
    abuelos_p_enf_neurologicas: boolean;
    abuelos_p_enf_cardiovasculares: boolean;
    abuelos_p_enf_broncopulmonares: boolean;
    abuelos_p_enf_tiroideas: boolean;
    abuelos_p_enf_renales: boolean;
    abuelos_p_enf_osteoarticulares: boolean;
    abuelos_p_enf_infectocontagiosas: boolean;

    abuelos_m_diabetes_mellitus: boolean;
    abuelos_m_hipertension_arterial_sistemica: boolean;
    abuelos_m_dislipidemias: boolean;
    abuelos_m_neoplasias: boolean;
    abuelos_m_malformaicones_hereditarias: boolean;
    abuelos_m_alergias: boolean;
    abuelos_m_enf_psiquiatricas: boolean;
    abuelos_m_enf_neurologicas: boolean;
    abuelos_m_enf_cardiovasculares: boolean;
    abuelos_m_enf_broncopulmonares: boolean;
    abuelos_m_enf_tiroideas: boolean;
    abuelos_m_enf_renales: boolean;
    abuelos_m_enf_osteoarticulares: boolean;
    abuelos_m_enf_infectocontagiosas: boolean;

    hermanos_diabetes_mellitus: boolean;
    hermanos_hipertension_arterial_sistemica: boolean;
    hermanos_dislipidemias: boolean;
    hermanos_neoplasias: boolean;
    hermanos_malformaicones_hereditarias: boolean;
    hermanos_alergias: boolean;
    hermanos_enf_psiquiatricas: boolean;
    hermanos_enf_neurologicas: boolean;
    hermanos_enf_cardiovasculares: boolean;
    hermanos_enf_broncopulmonares: boolean;
    hermanos_enf_tiroideas: boolean;
    hermanos_enf_renales: boolean;
    hermanos_enf_infectocontagiosas: boolean;
    hermanos_enf_osteoarticulares: boolean;
}