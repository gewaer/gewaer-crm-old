<template>
    <div class="leads">
        <form class="resource-form" @submit.prevent="submitForm()">
            <div class="row">
                <div class="col-12">
                    <h3 class="title">Personal Information</h3>
                </div>
            </div>
            <personal-information />
            <div class="row">
                <div class="col-12">
                    <h3 class="title">Lead's Status</h3>
                </div>
            </div>
            <lead-status />
            <div class="row float-right">
                <div class="m-2">
                    <button
                        :disabled="isLoading"
                        :title="isLoading ? 'Processing, wait a moment...' : 'Save'"
                        :class="{ 'deactivated': isLoading }"
                        class="btn m-1 btn-primary float-right"
                    >
                        Save
                    </button>
                    <router-link
                        :to="{ name: 'browse', params: { resource: 'leads'} }"
                        :disabled="isLoading"
                        :title="isLoading ? 'Processing, wait a moment...' : 'Cancel'"
                        class="btn m-1 btn-danger float-right"
                    >
                        Cancel
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>
<script>

import { mapState } from "vuex";

export default {
    name: "Leads",
    components: {
        personalInformation: () => import(/* webpackChunkName: "personal-information" */ "./personal-information"),
        leadStatus: () => import(/* webpackChunkName: "lead-status" */ "./lead-status")
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapState({
            lead: state => state.Lead.data
        })
    },
    created() {
        this.$store.dispatch("Lead/updateData", this.$route.params.id);
    },
    destroyed() {
        this.$store.dispatch("Lead/clearData");
    },
    methods: {
        async submitForm() {
            const isFormValid = await this.validateFormFields();
            if (!isFormValid) {
                return;
            }

            this.isLoading = true;
            axios({
                url: "/leads",
                method: "POST",
                data: this.lead
            }).then(() => {
                this.$notify({
                    text: "Leads form saved sucessfully",
                    type: "success"
                });
                this.$router.push({ name: "browse", params: { resource: "leads" } });
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
            })
        },
        async validateFormFields() {
            this.$validator.errors.clear();
            const validations = [];
            this.$children.forEach((vm) => {
                validations.push(vm.$validator.validateAll());
            });
            return Promise.all(validations).then((validationsResults) => {
                if (!validationsResults.includes(false)) {
                    return true;
                }
                return false;
            });
        }
    }
}
</script>
