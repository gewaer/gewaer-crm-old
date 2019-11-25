

<template>
    <div class="row">
        <div class="col-6">
            <div class="form-group-multiselect">
                <label :class="{'text-danger': errors.has('status') }">
                    Status
                    <span v-if="errors.has('status')">(required)</span>
                </label>
                <multiselect
                    v-validate="'required'"
                    :v-model="status"
                    :show-labels="false"
                    :options="rolesList"
                    :searchable="false"
                    :class="{'border-danger': errors.has('status')}"
                    name="status"
                    track-by="id"
                    label="status"
                    placeholder="Select a status."
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeadStatus",
    data() {
        return {
            statusList: [
                { id: 1, name: "created" },
                { id: 2, name: "updated" },
                { id: 3, name: "queue" },
                { id: 4, name: "processed" }
            ]
        }
    },
    computed: {
        status: {
            get() {
                return this.$store.state.Leads.data.status;
            },
            set(status) {
                this.$store.commit("Leads/status", status);
            }
        }
    }
}
</script>

<style lang="scss">

</style>
