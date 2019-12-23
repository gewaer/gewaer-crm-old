<template>
    <div class="lead-owners">
        <lead-owners-modal />
        <form @submit.prevent="submitForm">
            <div class="form-box row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('first-name') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('first-name') }">
                            First Name
                            <span v-if="errors.has('first-name')">(required)</span>
                        </label>
                        <input
                            v-model="leadOwners.firstname"
                            v-validate="'required'"
                            autofocus="true"
                            class="form-control"
                            type="text"
                            name="first-name"
                            data-vv-as="First Name"
                        >
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('last-name') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('last-name') }">
                            Last Name
                            <span v-if="errors.has('last-name')">(required)</span>
                        </label>
                        <input
                            v-model="leadOwners.lastname"
                            v-validate="'required'"
                            class="form-control"
                            type="text"
                            name="last-name"
                            data-vv-as="Last Name"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('phone-number') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('phone-number') }">
                            Phone Number
                            <span v-if="errors.has('phone-number')">(required)</span>
                        </label>
                        <input
                            v-model="leadOwners.phone"
                            v-validate="'required'"
                            class="form-control"
                            type="tel"
                            name="phone-number"
                            data-vv-as="Phone Number"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('email') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('email') }">
                            Email
                            <span v-if="errors.has('email')">(required)</span>
                        </label>
                        <input
                            v-model="leadOwners.email"
                            v-validate="'required'"
                            class="form-control"
                            type="email"
                            name="email"
                            data-vv-validate-on="blur"
                        >
                    </div>
                </div>
                <div class="col-12">
                    <div :class="{ 'border-danger': errors.has('address') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('address') }">
                            Address
                            <span v-if="errors.has('address')">(required)</span>
                        </label>
                        <input
                            v-model="leadOwners.address"
                            v-validate="'required'"
                            class="form-control"
                            type="text"
                            name="address"
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
                        class="action-button btn m-1 btn-primary float-right"
                    >
                        Save
                    </button>
                    <router-link
                        :to="{ name: 'browse', params: { resource: 'leads'} }"
                        :disabled="isLoading"
                        :title="isLoading ? 'Processing, wait a moment...' : 'Cancel'"
                        class="action-button btn m-1 btn-danger float-right"
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
    components: {
        leadOwnersModal: () => import(/* webpackChunkName: "lead-owners-modal" */ "@v/resources/lead-owners/lead-owners-modal")
    },
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

<style lang="scss" scoped>
.lead-owners {
    // padding: 10px;

    .action-button {
        width: 120px;
    }

    .form-box {
        margin: 30px 40px 25px 40px;
    }
}
</style>>
