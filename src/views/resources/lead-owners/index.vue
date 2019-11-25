<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3 class="title">New Lead Owner</h3>
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
                        v-model="leadOwners.firstName"
                        class="form-control"
                        type="text"
                        data-vv-name="first-name"
                        data-vv-as="First Name"
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
                        v-model="leadOwners.lastName"
                        class="form-control"
                        type="text"
                        data-vv-name="last-name"
                        data-vv-as="Last Name"
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
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeadOwners",
    data() {
        return {
            leadOwners: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: ""
            }
        }
    },
    methods: {
        submitForm() {
            console.log("Submit form!")
        }
    }
}
</script>

<style>

</style>
