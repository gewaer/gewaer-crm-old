<template>
    <div class="lead-owners">
        <form class="resource-form" @submit.prevent="submitForm">
            <div class="row">
                <div class="col-12">
                    <h3 class="title">Lead Owner</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('first-name') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('first-name') }">
                            First Name
                            <span v-if="errors.has('first-name')">(required)</span>
                        </label>
                        <input
                            v-validate="'required'"
                            v-model="leadOwners.firstname"
                            class="form-control"
                            type="text"
                            data-vv-name="first-name"
                            data-vv-as="First Name"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('last-name') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('last-name') }">
                            Last Name
                            <span v-if="errors.has('last-name')">(required)</span>
                        </label>
                        <input
                            v-validate="'required'"
                            v-model="leadOwners.lastname"
                            class="form-control"
                            type="text"
                            data-vv-name="last-name"
                            data-vv-as="Last Name"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('phone-number') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('phone-number') }">
                            Phone Number
                            <span v-if="errors.has('phone-number')">(required)</span>
                        </label>
                        <input
                            v-validate="'required'"
                            v-model="leadOwners.phone"
                            class="form-control"
                            type="tel"
                            data-vv-name="phone-number"
                            data-vv-as="Phone Number"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('email') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('email') }">
                            Email
                            <span v-if="errors.has('email')">(required)</span>
                        </label>
                        <input
                            v-validate="'required'"
                            v-model="leadOwners.email"
                            class="form-control"
                            type="email"
                            data-vv-name="email"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-6">
                    <div :class="{ 'border-danger': errors.has('address') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('address') }">
                            Address
                            <span v-if="errors.has('address')">(required)</span>
                        </label>
                        <input
                            v-validate="'required'"
                            v-model="leadOwners.address"
                            class="form-control"
                            type="text"
                            data-vv-name="address"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
            </div>
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
    name: "LeadOwners",
    data() {
        return {
            isLoading: false,
            leadOwners: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                address: ""
            }
        }
    },
    computed: {
        ...mapState({
            companyId: state => state.Company.data.id
        }),
        isEditing() {
            return this.$route.params.id != undefined;
        }
    },
    created() {
        if (this.isEditing) {
            this.fetchLeadOwner();
        }
    },
    methods: {
        async submitForm() {
            const isFormValid = await this.$validator.validateAll();
            if (!isFormValid) {
                return;
            }

            this.isLoading = true;

            const url = this.isEditing ? `/leads-owner/${this.$route.params.id}` : "/leads-owner";
            const method = this.isEditing ? "PUT" : "POST";
            this.leadOwners["companies_id"] = this.companyId;
            axios({
                url,
                method,
                data: this.leadOwners
            }).then(() => {
                this.$notify({
                    text: "Lead Owners form saved sucessfully",
                    type: "success"
                });
                this.$router.push({ name: "browse", params: { resource: "leads-owner" } });
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
                this.isLoading = false;
            });
        },
        fetchLeadOwner() {
            this.isLoading = true;
            axios({ url: `/leads-owner/${this.$route.params.id}` }).then(({ data: leadOwners }) => {
                this.leadOwners = leadOwners;
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

<style>

</style>
