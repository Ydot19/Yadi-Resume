<template>
    <div>
        <br>
        <div class="inherit">
<!--            Purpose-->
            <div class="columns is-narrow left-align">
                <div class="inherit">
                    <p class="is-size-2-2 has-text-weight-bold">
                        Objective
                    </p>
                    <p class="is-size-6 has-text-weight-normal">
                        Seeking graduate school admission  to Georgia Institute of Technologies Online Master of Science in Computer Science (OMS-CS)
                    </p>
                    <br>
                </div>
            </div>
<!--            Education section -->
            <div class="columns is-narrow left-align">
                <div class="inherit">
                    <p class="is-size-2-2 has-text-weight-bold">
                        Education
                    </p>
                    <div class="columns inherit">
                        <div class="column is-8">
                            <p class="is-size-5 has-text-weight-bold theme-orange-darker">
                                The Ohio State University (2013-2017)
                            </p>
                            <p class="is-size-7 has-text-weight-normal">
                                Bachelor of Science in Chemical Engineering
                            </p>
                            <p class="is-size-7 has-text-weight-normal">
                                Minor in Business
                            </p>
                        </div>
                        <div class="column is-3 is-offset-1 right-align">
                            <br>
                            <p class="is-size-7 has-text-weight-normal">
                                <span>GPA: <b class="is-size-6">3.92</b> / 4.00</span>
                            </p>
                            <p class="is-size-7 has-text-weight-normal">
                                <i>Summa Cum Luade</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-narrow">
                <div class="inherit left-align">
                    <br>
                    <p class="is-size-2-2 has-text-weight-bold">
                        Work Experience
                    </p>
                </div>
            </div>
            <div v-for="job in experiences" :key="job">
                <resume-professional-experience
                        :title="job.title"
                        :company="job.company"
                        :location="job.location"
                        :start="job.start"
                        :end="job.end"
                        :description="job.description"
                >

                </resume-professional-experience>
                <br>
            </div>
            <resume-awards></resume-awards>
        </div>
    </div>
</template>

<script>
    import ResumeProfessionalExperience from "./resume-professional-experience";
    import ResumeAwards from "./resume-awards";
    export default {
        name: "resume-body-left",
        components: {ResumeAwards, ResumeProfessionalExperience},
        data: function () {
            return {
                experiences: [
                    {
                        title: "Associate Software Engineer, TDP",
                        company: "Capital One Financial",
                        location: "Richmond, VA",
                        start: "Feb. 2020",
                        end: "Present",
                        description: [
                            "Developing/Deploying APIs and Data Jobs for the Small Business Card Division",
                            "Creating CI/CD pipelines using Jenkins for cross-team projects",
                            "Utilizing open/inner source technologies to develop scalable and resilient solutions to AWS lambda/EC2/EMR etc."
                        ]
                    },
                    {
                        title: "Associate Software Engineer, CODA",
                        company: "Capital One Financial",
                        location: "Richmond, VA",
                        start: "Aug. 2019",
                        end: "Feb. 2020",
                        description: [
                            "6-month immersive training program into web-based development",
                            "Focused on CSE basics (algorithms, data structures, time complexity etc.) with Javascript/Node",
                            "Focused on Frontend Technologies (Vue, Angular, HTML/CSS) and backend technologies (SQL/No-SQL Databases,  APIs, Data Streams etc.)"
                        ]
                    },
                    {
                        title: "Production Supervisor",
                        company: "Thermo Fisher Scientific",
                        location: "Middletown, VA",
                        start: "May 2019",
                        end: "Jun. 2019",
                        description: [
                            "Interim supervisor overseeing a production team of ~13 individuals",
                            "Production of clinical diagnostic reagents for Siemens and Roche"
                        ]
                    },
                    {
                        title: "Production Planner",
                        company: "Thermo Fisher Scientific",
                        location: "Middletown, VA",
                        start: "Nov. 2018",
                        end: "Apr. 2019",
                        description: [
                            "Managed and planned over 20+ unique products (generating +$1.3 million in revenue monthly)\n" +
                            "across multiple cost centers.",
                            "Developed dashboards and databases with Microsoft software tools to monitor and track production material requirements and output"
                        ]
                    },
                    {
                        title: "Process Engineer/Sourcing Associate",
                        company: "Thermo Fisher Scientific",
                        location: "Middletown, VA",
                        start: "Mar. 2018",
                        end: "Nov. 2018",
                        description: [
                            "Used tools such as Python  numpy/pandas + plotly dash to analyze and visualize production " +
                            "site-wide sourcing data. Discovered over $200k in year on year savings from sourcing",
                            "Used SAP + Microsoft Access + Excel VBA to accurately show production managers staffing requirements across multiple product lines"
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>
