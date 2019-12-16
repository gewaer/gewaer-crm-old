<template>
    <div class="rotations">
        <form class="resource-form" @submit.prevent="submitForm()">
            <div class="row">
                <div class="col-12">
                    <h3 class="title">
                        Create New Rotation
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div :class="{ 'border-danger': errors.has('first-name') }" class="form-group form-group-default">
                        <label :class="{'text-danger': errors.has('first-name') }">
                            Name
                            <span v-if="errors.has('first-name')">(required)</span>
                        </label>
                        <input
                            v-model="rotation.name"
                            v-validate="'required'"
                            class="form-control"
                            type="text"
                            name="first-name"
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
                        :to="{ name: 'browse', params: { resource: 'rotations'} }"
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
    name: "Rotations",
    data() {
        return {
            isLoading: false,
            rotation: {
                name: "",
                users_id: this.rotationUserId
            }
        }
    },
    computed: {
        ...mapState({
            userId: state => state.User.data.id
        }),
        isEditing() {
            return this.$route.params.id != undefined;
        },
        rotationUserId() {
            return this.userId;
        }
    },
    created() {
        if (this.isEditing) {
            this.fetchRotation();
        }
    },
    methods: {
        async submitForm() {
            const isFormValid = await this.$validator.validateAll();
            if (!isFormValid) {
                return;
            }

            this.isLoading = true;

            const url = this.isEditing ? `/rotations/${this.$route.params.id}` : "/rotations";
            const method = this.isEditing ? "PUT" : "POST";
            this.rotation["users_id"] = this.userId;
            axios({
                url,
                method,
                data: this.rotation
            }).then(() => {
                this.$notify({
                    text: "Rotation form saved sucessfully",
                    type: "success"
                });
                this.$router.push({ name: "browse", params: { resource: "rotations" } });
            }).catch((error) => {
                this.$notify({
                    text: error.message,
                    type: "error"
                });
            }).finally(() => {
                this.isLoading = false;
            });
        },
        fetchRotation() {
            this.isLoading = true;
            axios({ url: `/rotations/${this.$route.params.id}` }).then(({ data: rotation }) => {
                this.rotation = rotation;
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

</style>
