<template>
    <div class="columns is-fluid is-narrow left-align">
        <div class="inherit">
            <p class="is-size-2-2 has-text-weight-bold">
                Other Experiences
            </p>
            <div class="margin-22-right">
                    <resume-professional-experience
                            :title="experiences[0].title"
                            :company="experiences[0].company"
                            :location="experiences[0].location"
                            :start="experiences[0].start"
                            :end="experiences[0].end"
                            :description="experiences[0].description">
                    </resume-professional-experience>
            </div>
        </div>
    </div>
</template>

<script>
    import ResumeProfessionalExperience from "./resume-professional-experience";
    export default {
        name: "resume-other-experiences",
        components: {ResumeProfessionalExperience},
        data: function () {
            return {
                experiences: [
                    {
                        title: "Undergraduate Teaching Assistant",
                        company: "The Ohio State University",
                        location: "Columbus, Ohio",
                        start: "Multiple",
                        end: "Terms",
                        description: [
                            "Undergrad. T.A for Chemical Engineering Thermodynamics (CBE 3506) - Autumn 2015 Semester",
                            "Undergrad. T.A for Chemical Engineering Kinetics (CBE 3610) - Spring 2016 Semester",
                            "Undergrad. T.A for Chemical Engineering Economics (CBE 4760) - Autumn 2017 Semester"
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    div.margin-22-right{
        margin-right: 5%;
    }
</style>
