<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div :class="{ 'border-danger': errors.has('first-name') }" class="form-group form-group-default">
                <label :class="{'text-danger': errors.has('first-name') }">
                    First Name
                    <span v-if="errors.has('first-name')">(required)</span>
                </label>
                <input
                    v-validate="'required'"
                    v-model="firstName"
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
                    v-model="lastName"
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
                    v-model="phoneNumber"
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
                    v-model="email"
                    class="form-control"
                    type="email"
                    data-vv-name="email"
                    data-vv-validate-on="blur"
                >
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: "PersonalInformation",
    computed: {
        firstName: {
            get() {
                return this.$store.state.Lead.data.firstname;
            },
            set(firstName) {
                this.$store.commit("Lead/SET_FIRST_NAME", firstName);
            }
        },
        lastName: {
            get() {
                return this.$store.state.Lead.data.lastname;
            },
            set(lastName) {
                this.$store.commit("Lead/SET_LAST_NAME", lastName);
            }
        },
        phoneNumber: {
            get() {
                return this.$store.state.Lead.data.phone;
            },
            set(phoneNumber) {
                this.$store.commit("Lead/SET_PHONE", phoneNumber);
            }
        },
        email: {
            get() {
                return this.$store.state.Lead.data.email;
            },
            set(email) {
                this.$store.commit("Lead/SET_EMAIL", email);
            }
        }
    }
}
</script>
<style lang="scss">

</style>
