import Vue from 'vue'
import { uid } from 'quasar'
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
    },
    rechercher: '',
    tri: 'nom'
}

const getters = {
    tacheTriees: (state) => {
        let tachesTriees = {},
            cleOrdonnee = Object.keys(state.taches)

        cleOrdonnee.sort((a, b) => {
            let tacheAProp = state.taches[a][state.tri].toLowerCase(),
                tacheBProp = state.taches[b][state.tri].toLowerCase()
            if(tacheAProp > tacheBProp) return 1
            else if(tacheAProp < tacheBProp) return -1
            else return 0
        })
        cleOrdonnee.forEach((key) => {
            tachesTriees[key] = state.taches[key]
        })
        console.log('tachesTriees', tachesTriees)
        return tachesTriees
    },
    tachesFiltrees: (state, getters) => {
        let tachesTriees = getters.tacheTriees,
            tachesFiltrees = {}
        if (state.rechercher) {
            Object.keys(tachesTriees).forEach(function (key) {
                let tache = tachesTriees[key],
                    tacheMinuscule = tache.nom.toLowerCase(),
                    rechercheMinuscule = state.rechercher.toLowerCase()
                if (tacheMinuscule.includes(rechercheMinuscule)) {
                    tachesFiltrees[key] = tache
                }
    
            });
            return tachesFiltrees
        }
        return tachesTriees   
    },
    // getters qui retourne les tâches non accomplies
    tachesARealiser: (state, getters) => {
        let tachesFiltrees = getters.tachesFiltrees
        let taches = {}
        Object.keys(tachesFiltrees).forEach(function (key) {
            let tache = tachesFiltrees[key]
            if (!tache.accomplie) {
                taches[key] = tache
            }

        });
        return taches
    },
    // getters qui retourne les tâches accomplies
    tachesAccomplies: (state, getters) => {
        let tachesFiltrees = getters.tachesFiltrees
        let taches = {}
        Object.keys(tachesFiltrees).forEach(function (key) {
            let tache = tachesFiltrees[key]
            if (tache.accomplie) {
                taches[key] = tache
            }

        });
        return taches
    }
}

const mutations = {
    modifierTache(state, payload){
       Object.assign(state.taches[payload.id], payload.updates)
    },
    supprimerTache(state, id){
        Vue.delete(state.taches, id)
    },
    ajouterTache(state, payload){
        Vue.set(state.taches, payload.id, payload.tache)
    },
    definirRechercher (state, value) {
        state.rechercher = value
    },
    definirTrierPar (state, value) {
        state.tri = value
    }
}

const actions = {
    modifierTache ({ commit }, payload) {
        commit('modifierTache', payload)
    },
    supprimerTache ({ commit }, id) {
        commit('supprimerTache', id)
    },
    ajouterTache ({ commit }, tache) {
        let tacheId = uid()
        let payload = {
            id: tacheId,
            tache: tache
        }
        commit('ajouterTache', payload)
    },
    definirRechercher ({ commit }, value) {
        commit('definirRechercher', value)
    },
    definirTrierPar ({ commit }, value) {
        commit('definirTrierPar', value)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}