const state = {
    data: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        status: {}
    }
};

const mutations = {
    SET_FIRST_NAME(state, firstName) {
        state.data.firstName = firstName;
    },
    SET_LAST_NAME(state, lastName) {
        state.data.lastName = lastName
    },
    SET_PHONE(state, phone) {
        state.data.phone = phone;
    },
    SET_EMAIL(state, email) {
        state.data.email = email;
    },
    SET_STATUS(state, status) {
        state.data.status = status;
    }
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
