<template>
    <form class="rotation-users container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('zoho-id') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('zoho-id') }">
                        Zoho ID
                        <span v-if="errors.has('zoho-id')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.zohoId"
                        class="form-control"
                        type="text"
                        name="zoho-id"
                        data-vv-as="Zoho ID"
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
                        v-model="rotationUser.lastName"
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
                <div :class="{ 'border-danger': errors.has('name') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('name') }">
                        Name
                        <span v-if="errors.has('name')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.userName"
                        class="form-control"
                        type="text"
                        name="name"
                    >
                </div>
            </div>
            <!-- TODO: for some reason this should be a multiselect, need to find out why -->
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
        </div>
        <div class="row">
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
                    >
                </div>
            </div>
            <!-- TODO: How will percentage be store? as text or a number between 1 and 100 -->
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div :class="{ 'border-danger': errors.has('percentage') }" class="form-group form-group-default">
                    <label :class="{'text-danger': errors.has('percentage') }">
                        Percentage
                        <span v-if="errors.has('percentage')">(required)</span>
                    </label>
                    <input
                        v-validate="'required'"
                        v-model="rotationUser.percentage"
                        class="form-control"
                        type="password"
                        name="percentage"
                    >
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "RotationUsers"
}
</script>

<style lang="scss">
.rotation-users {

}
</style>
