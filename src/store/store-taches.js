import Vue from 'vue'
const state = {
    taches:{
        'ID1': {
            nom: 'aller au shopping',
            accomplie: false,
            dateEcheance: '2020/02/25',
            heureEcheance: '11:00'
        },
        'ID2': {
            nom: 'jogging 13h',
            accomplie: false,
            dateEcheance: '2020/02/25',
            heureEcheance: '11:31'
        },
        'ID3': {
            nom: 'réserver une table chez Maurice',
            accomplie: false,
            dateEcheance: '2020/02/25',
            heureEcheance: '17:38'
        }
    }
}

const getters = {
    taches: (state) => {
        return state.taches
    }
}

const mutations = {
    updateTache(state, payload){
       Object.assign(state.taches[payload.id], payload.updates)
    },
    supprimerTache(state, id){
        Vue.delete(state.taches, id)
     }
}

const actions = {
    updateTache ({ commit }, payload) {
        commit('updateTache', payload)
    },
    supprimerTache ({ commit }, id) {
        commit('supprimerTache', id)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}