<template>
    <modal
        name="lead-owners-modal"
        height="auto"
    >
        <div class="lead-owners-modal">
            <!-- <h3>Create Lead Owner</h3> -->
            <div class=" row">
                <div class="col-12">
                    <h3 class="title">
                        Lead Owner
                    </h3>
                </div>
            </div>
            <lead-owners-form />
        </div>
    </modal>
</template>

<script>

export default {
    name: "LeadOwnersModal",
    components: {
        leadOwnersForm: () => import(/* webpackChunkName: "lead-owners-form" */ "@v/resources/lead-owners/")
    },
    data() {
        return {
            action: ""
        }
    },
    methods: {
        onFormCancelled() {
            this.$modal.hide("author-modal");
        }
    }
}
</script>
<style lang="scss">
.lead-owners-modal {

    .title {
        color: var(--base-color);
        padding: 20px;
        margin-bottom: 0px;
        border-bottom: 1px solid  var(--base-color);
    }

    hr {
        width: 100%
    }
}
</style>
