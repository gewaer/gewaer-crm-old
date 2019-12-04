<template>
    <form class="resource-form rotation-users" @submit.prevent="submitForm()">
        <div class="row">
            <div class="col-12">
                <h3 class="title">Characteristics</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('zoho-id') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('zoho-id') }">
                        Zoho ID
                        <span v-if="errors.has('zoho-id')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.zoho_id"
                        class="form-control"
                        type="text"
                        name="zoho-id"
                        data-vv-as="Zoho ID"
                    >
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('name') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('name') }">
                        Name
                        <span v-if="errors.has('name')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.name"
                        class="form-control"
                        type="text"
                        name="name"
                    >
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('email') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('email') }">
                        Email
                        <span v-if="errors.has('email')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.email"
                        class="form-control"
                        type="email"
                        name="email"
                        data-vv-as="email"
                    >
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('phone') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('phone') }">
                        Phone
                        <span v-if="errors.has('phone')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.phone"
                        class="form-control"
                        type="phone"
                        name="phone"
                    >
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('percentage') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('percentage') }">
                        Percentage
                        <span v-if="errors.has('percentage')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.percentage"
                        min="0"
                        max="100"
                        type="number"
                        class="form-control"
                        name="percentage"
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
</template>

<script>
export default {
    name: "RotationUsers",
    data() {
        return {
            isLoading: false,
            rotationUser: {
                zoho_id: "",
                name: "",
                email: "",
                phone: "",
                percentage: null,
                rotations_id: "2"
            }
        }
    },
    computed: {
        isEditing() {
            return this.$route.params.id != undefined;
        }
    },
    created() {
        if (this.isEditing) {
            this.fetchRotationUser();
        }
    },
    methods: {
        async submitForm() {
            const isFormValid = await this.$validator.validateAll();
            if (!isFormValid) {
                return;
            }

            this.isLoading = true;

            const url = this.isEditing ? `/rotations-users/${this.$route.params.id}` : "/rotations-users";
            const method = this.isEditing ? "PUT" : "POST";
            axios({
                url,
                method,
                data: this.rotationUser
            }).then(() => {
                this.$notify({
                    text: "Rotation User form saved sucessfully",
                    type: "success"
                });
                this.$router.push({ name: "browse", params: { resource: "rotations-users" } });
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
                this.isLoading = false;
            });
        },
        fetchRotationUser() {
            this.isLoading = true;
            axios({ url: `/rotations-users/${this.$route.params.id}` }).then(({ data: rotationUser }) => {
                this.rotationUser = rotationUser;
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
                this.isLoading = false;
            })
        }
    }
}
</script>

<style lang="scss">
.rotation-users {

}
</style>
