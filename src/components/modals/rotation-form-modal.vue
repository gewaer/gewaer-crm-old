<template>
    <modal
        :scrollable="false"
        name="rotation-form-modal"
        height="auto"
    >
        <div class="author-modal container">
            <div class="row">
                <div class="col-12">
                    <h3> Create New Rotation </h3>
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
                            v-model="firstName"
                            class="form-control"
                            type="text"
                            name="name"
                        >
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    name: "RotationFormModal"
}
</script>
