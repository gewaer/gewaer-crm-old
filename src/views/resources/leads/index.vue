<template>
    <div class="leads container">
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
    </div>
</template>
<script>
export default {
    name: "Leads",
    components: {
        personalInformation: () => import(/* webpackChunkName: "edit-resource" */ "./personal-information"),
        leadStatus: () => import(/* webpackChunkName: "lead-status" */ "./lead-status")
    },
    methods: {
        submitForm() {
            console.log("Submit form!")
        }
    }
}
</script>

<style lang="scss">
</style>
