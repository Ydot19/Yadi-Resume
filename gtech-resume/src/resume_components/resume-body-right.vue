<template>
    <div>
        <div class="container is-fluid">
            <resume-body-skills></resume-body-skills>
        </div>
        <div class="container is-fluid">
            <resume-other-experiences></resume-other-experiences>
        </div>
    </div>
</template>

<script>
    import ResumeBodySkills from "./resume-body-skills";
    import ResumeOtherExperiences from "./resume-other-experiences";
    export default {
        name: "resume-body-right",
        components: {ResumeOtherExperiences, ResumeBodySkills}
    }
</script>

<style scoped>

</style>
