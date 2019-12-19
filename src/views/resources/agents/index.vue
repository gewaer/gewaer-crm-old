<template>
    <form class="agents container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('first-name') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('first-name') }">
                        First Name
                        <span v-if="errors.has('first-name')">(required)</span>
                    </label>
                    <input
                        v-model="firstName"
                        v-validate="'required'"
                        class="form-control"
                        type="text"
                        name="first-name"
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
                        v-model="lastName"
                        v-validate="'required'"
                        class="form-control"
                        type="text"
                        name="last-name"
                        data-vv-as="Last Name"
                    >
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('user-name') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('user-name') }">
                        User Name
                        <span v-if="errors.has('user-name')">(required)</span>
                    </label>
                    <input
                        v-model="userName"
                        v-validate="'required'"
                        class="form-control"
                        type="text"
                        name="user-name"
                        data-vv-as="User Name"
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
                        v-model="email"
                        v-validate="'required'"
                        class="form-control"
                        type="email"
                        name="email"
                    >
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('password') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('password') }">
                        Password
                        <span v-if="errors.has('password')">(required)</span>
                    </label>
                    <input
                        v-model="password"
                        v-validate="'required'"
                        class="form-control"
                        type="password"
                        name="password"
                    >
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('confirm-password') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('confirm-password') }">
                        Confirm Password
                        <span v-if="errors.has('confirm-password')">(required)</span>
                    </label>
                    <input
                        v-model="lastName"
                        v-validate="'required'"
                        class="form-control"
                        type="password"
                        name="confirm-password"
                        data-vv-as="Confirm Password"
                    >
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "Agents"
}
</script>

<style lang="scss">
</style>
