import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AntecedentesHeredofamiliaresSchema = new Schema({   
    padre_diabetes_mellitus: { type: Boolean, default: false },
    padre_hipertension_arterial_sistemica: { type: Boolean, default: false },
    padre_dislipidemias: { type: Boolean, default: false },
    padre_neoplasias: { type: Boolean, default: false },
    padre_malformaicones_hereditarias: { type: Boolean, default: false },
    padre_alergias: { type: Boolean, default: false },
    padre_enf_psiquiatricas: { type: Boolean, default: false },
    padre_enf_neurologicas: { type: Boolean, default: false },
    padre_enf_cardiovasculares: { type: Boolean, default: false },
    padre_enf_broncopulmonares: { type: Boolean, default: false },
    padre_enf_tiroideas: { type: Boolean, default: false },
    padre_enf_renales: { type: Boolean, default: false },
    padre_enf_osteoarticulares: { type: Boolean, default: false },
    padre_enf_infectocontagiosas: { type: Boolean, default: false },

    madre_diabetes_mellitus: { type: Boolean, default: false },
    madre_hipertension_arterial_sistemica: { type: Boolean, default: false },
    madre_dislipidemias: { type: Boolean, default: false },
    madre_neoplasias: { type: Boolean, default: false },
    madre_malformaicones_hereditarias: { type: Boolean, default: false },
    madre_alergias: { type: Boolean, default: false },
    madre_enf_psiquiatricas: { type: Boolean, default: false },
    madre_enf_neurologicas: { type: Boolean, default: false },
    madre_enf_cardiovasculares: { type: Boolean, default: false },
    madre_enf_broncopulmonares: { type: Boolean, default: false },
    madre_enf_tiroideas: { type: Boolean, default: false },
    madre_enf_renales: { type: Boolean, default: false },
    madre_enf_osteoarticulares: { type: Boolean, default: false },
    madre_enf_infectocontagiosas: { type: Boolean, default: false },

    abuelos_p_diabetes_mellitus: { type: Boolean, default: false },
    abuelos_p_hipertension_arterial_sistemica: { type: Boolean, default: false },
    abuelos_p_dislipidemias: { type: Boolean, default: false },
    abuelos_p_neoplasias: { type: Boolean, default: false },
    abuelos_p_malformaicones_hereditarias: { type: Boolean, default: false },
    abuelos_p_alergias: { type: Boolean, default: false },
    abuelos_p_enf_psiquiatricas: { type: Boolean, default: false },
    abuelos_p_enf_neurologicas: { type: Boolean, default: false },
    abuelos_p_enf_cardiovasculares: { type: Boolean, default: false },
    abuelos_p_enf_broncopulmonares: { type: Boolean, default: false },
    abuelos_p_enf_tiroideas: { type: Boolean, default: false },
    abuelos_p_enf_renales: { type: Boolean, default: false },
    abuelos_p_enf_osteoarticulares: { type: Boolean, default: false },
    abuelos_p_enf_infectocontagiosas: { type: Boolean, default: false },

    abuelos_m_diabetes_mellitus: { type: Boolean, default: false },
    abuelos_m_hipertension_arterial_sistemica: { type: Boolean, default: false },
    abuelos_m_dislipidemias: { type: Boolean, default: false },
    abuelos_m_neoplasias: { type: Boolean, default: false },
    abuelos_m_malformaicones_hereditarias: { type: Boolean, default: false },
    abuelos_m_alergias: { type: Boolean, default: false },
    abuelos_m_enf_psiquiatricas: { type: Boolean, default: false },
    abuelos_m_enf_neurologicas: { type: Boolean, default: false },
    abuelos_m_enf_cardiovasculares: { type: Boolean, default: false },
    abuelos_m_enf_broncopulmonares: { type: Boolean, default: false },
    abuelos_m_enf_tiroideas: { type: Boolean, default: false },
    abuelos_m_enf_renales: { type: Boolean, default: false },
    abuelos_m_enf_osteoarticulares: { type: Boolean, default: false },
    abuelos_m_enf_infectocontagiosas: { type: Boolean, default: false },

    hermanos_diabetes_mellitus: { type: Boolean, default: false },
    hermanos_hipertension_arterial_sistemica: { type: Boolean, default: false },
    hermanos_dislipidemias: { type: Boolean, default: false },
    hermanos_neoplasias: { type: Boolean, default: false },
    hermanos_malformaicones_hereditarias: { type: Boolean, default: false },
    hermanos_alergias: { type: Boolean, default: false },
    hermanos_enf_psiquiatricas: { type: Boolean, default: false },
    hermanos_enf_neurologicas: { type: Boolean, default: false },
    hermanos_enf_cardiovasculares: { type: Boolean, default: false },
    hermanos_enf_broncopulmonares: { type: Boolean, default: false },
    hermanos_enf_tiroideas: { type: Boolean, default: false },
    hermanos_enf_renales: { type: Boolean, default: false },
    hermanos_enf_osteoarticulares: { type: Boolean, default: false },
    hermanos_enf_infectocontagiosas: { type: Boolean, default: false },
});