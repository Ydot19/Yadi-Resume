<template>
    <div class="columns is-narrow left-align ">
        <div class="inherit">
            <br>
            <p class="is-size-2-2 has-text-weight-bold">
                Technical Skills
            </p>

            <div class="column">
                <!--                platform based skills-->
                <p class="is-size-4 has-text-weight-medium">
                    Platforms
                    <br>
                    <br>
                </p>
                <div v-for="skill in platformSkills" :key="skill" class="columns inherit">
                    <div class="column is-3 is-paddingless">
                        {{skill.name}}
                    </div>
                    <div class="column is-8">
                        <div class="progress">
                            <div class="progress-bar orange" :style="'width:'+skill.rating+'%'"></div>
                        </div>
                    </div>
                    <div class="column is-1"></div>
                </div>
                <!--                framework based skills-->
                <p class="is-size-4 has-text-weight-medium">
                    Frameworks
                    <br>
                    <br>
                </p>
                <div v-for="skill in frameworkSkills" :key="skill" class="columns inherit">
                    <div class="column is-3 is-paddingless">
                        {{skill.name}}
                    </div>
                    <div class="column is-8">
                        <div class="progress">
                            <div class="progress-bar orange" :style="'width:'+skill.rating+'%'"></div>
                        </div>
                    </div>
                    <div class="column is-1"></div>
                </div>
                <p class="is-size-4 has-text-weight-medium">
                    Others
                    <br>
                </p>

                <div class="columns">
                    <div class="column">
                        <button
                                v-for="otherTechnicalSkill in otherTechnicalSkills"
                                :key="otherTechnicalSkill"
                                class="button edged-5 ronchi">
                            <span class="is-size-6-half has-text-grey-dark">{{otherTechnicalSkill}}</span>
                        </button>
                    </div>
                </div>
<!--                soft skills -->
                <p class="is-size-2-2 has-text-weight-bold">
                    Soft Skills
                </p>

                <div class="columns">
                    <div class="column center-align" v-for="skill in graphicalSoftSkills" :key="skill">
                        <v-progress-circular :value=skill.score :size="96" :width="12">  {{skill.score}}%</v-progress-circular>
                        <p class="text-is-dark-grey">{{skill.skill}}</p>
                    </div>
                </div>
                <div class="inherit center-align">
                    <p class="is-size-7 has-text-weight-medium">
                        Based on Self Assessment and Insights &reg; Discovery Personal Profile Assessment
                    </p>
                </div>
                <div class="columns">
                    <div class="column center-align">
                       <div class="column left-align">Other soft skills...</div>
                        <button
                                v-for="softSkill in otherSoftSkills"
                                :key="softSkill"
                                class="button edged-5">
                            <span class="is-size-6-half">{{softSkill}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume-body-skills",
        data: function () {
            return{
                platformSkills: [
                    {
                      name: "DOCKER",
                      rating: 71
                    },
                    {
                        name: "AWS",
                        rating: 62
                    },
                    {
                        name: "GIT",
                        rating: 93
                    },
                    {
                        name: "SAP ERP",
                        rating: 66
                    },
                    {
                        name: "NODE.js",
                        rating: 89
                    }
                ],
                frameworkSkills: [
                    {
                        name: "Vue.js",
                        rating: 86
                    },
                    {
                        name: "Spring Boot",
                        rating: 63
                    },
                    {
                        name: "Flask.py",
                        rating: 82
                    }
                ],
                otherTechnicalSkills: [
                    "CI/CD",
                    "JENKINS",
                    "ANGULAR",
                    "Micro-Services Architecture",
                    "TYPESCRIPT",
                    "Calculus",
                    "FUNCTIONAL PROGRAMMING",
                    "JAVA",
                    "REST",
                    "OOP",
                    "UNIT TESTING",
                    "Mongodb",
                    "ETL",
                    "Agile + Scrum",
                    "ELASTIC-SEARCH",
                    "SQL",
                    "CSS",
                    "Dynamodb",
                    "Python3",
                    "Web UI",
                    "BEHAVIORAL TESTING",
                    "Statistics"
                ],
                graphicalSoftSkills: [
                    {
                        skill: "Adaptability",
                        score: 93
                    },
                    {
                        skill: "Creativity",
                        score: 88
                    },
                    {
                        skill: "Analytical",
                        score: 98
                    }
                ],
                otherSoftSkills: [
                    "goal-oriented",
                    "attentiveness",
                    "communication"
                ]
            }
        }
    }
</script>

<style scoped>
    button.button.edged-5 {
        border-radius: 12px;
        margin: 3px;
    }

    .v-progress-circular {
        margin: 0.9rem;
        color: rgb(237,192,77)
    }

    div.progress {
        background-color: #ccc;
        width: inherit;
        height: 14px;
        float: right;
    }

    div.progress-bar { float: left; }

    div.progress-bar.orange {
        background-color: rgb(237,192,77);
        height: 100%;
    }

    button.ronchi{
        background-color: rgb(237,192,77);
        font-weight: bold;
    }

</style>
