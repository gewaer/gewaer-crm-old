const state = {
    data: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        status: {}
    }
};

const mutations = {
    SET_DATA(state, data) {
        state.data = data;
    },
    SET_FIRST_NAME(state, firstname) {
        state.data.firstname = firstname;
    },
    SET_LAST_NAME(state, lastname) {
        state.data.lastname = lastname
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
    },
    updateData({ commit }, id) {
        if (!id) {
            return;
        }

        axios.get(`/leads/${id}`).then(({ data: lead }) => {
            commit("SET_DATA", lead);
        });
    },
    clearData({ commit }) {
        const data = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            status: {}
        }
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
