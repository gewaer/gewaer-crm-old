<template>
    <div class="create-resource">
        <!-- TODO: change label when editing -->
        <h4 class="section-title p-l-10">
            Create {{ currentResource.name }}
        </h4>
        <div class="card">
            <div class="card-block">
                <component :is="$route.params.resource" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "CreateResource",
    components: {
        leads: () => import(/* webpackChunkName: "leads" */ "@v/resources/leads/"),
        rotations: () => import(/* webpackChunkName: "rotations" */ "@v/resources/rotations/"),
        leadsOwner: () => import(/* webpackChunkName: "lead-owners" */ "@v/resources/lead-owners/"),
        rotationsUsers: () => import(/* webpackChunkName: "rotation-users" */ "@v/resources/rotations/users/")
    },
    data() {
        return {
            currentResource: {}
        };
    },
    computed: {
        ...mapState({
            applicationResources: state => state.Application.resources
        })
    },
    created() {
        this.setResource(this.$route.params.resource);
    },
    methods: {
        setResource(resourceName) {
            const resourceIndex = this.applicationResources.findIndex(resource => {
                return resource.slug == resourceName;
            });
            this.currentResource = this.applicationResources[resourceIndex];
        }
    }
}
</script>

<style lang="scss" src="@/assets/scss/resource.scss" />

