const state = {
    data: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        leadStatus: {}
    }
};

const mutations = {

};

const actions = {
    setData({ commit }, data) {
        commit("SET_DATA", data);
    }
};

const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
