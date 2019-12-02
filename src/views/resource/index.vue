<template>
    <div class="create-resource">
        <!-- TODO: change label when editing -->
        <h4 class="section-title p-l-10">Create {{ currentResource.title }}</h4>
        <div class="card">
            <div class="card-block">
                <!-- <form class="resource-form" novalidate/> -->
                <component :is="$route.params.resource"/>
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
        rotations: () => import(/* webpackChunkName: "rotations" */ "@v/resources/rotations/")
    },
    data() {
        return {
            currentResource: {}
        };
    },
    computed: {
        ...mapState({
            // TODO: get this from application instead of company.
            applicationData: state => state.Application.data
        })
    },
    created() {
        // this.setResource(this.$route.params.resource);
    },
    methods: {
        // setResource(resourceName) {
        //     // TODO: get this from application instead of company.
        //     const hello = this.applicationData;
        //     console.log(this.applicationData);
        //     const resourceIndex = this.applicationData.resources.findIndex(resource => {
        //         return resource.name == resourceName;
        //     });

        //     this.currentResource = this.applicationData.resources[resourceIndex];
        // }
    }
}
</script>

<style lang="scss" src="@/assets/scss/resource.scss" />

