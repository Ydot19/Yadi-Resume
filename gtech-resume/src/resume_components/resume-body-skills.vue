<template>
    <div class="columns is-narrow left-align ">
        <div class="inherit">
            <p class="is-size-2 has-text-weight-bold">
                Technical Skills
            </p>

            <div class="column">
                <!--                platform based skills-->
                <p class="is-size-4 has-text-weight-medium">
                    Platforms
                    <br>
                    <br>
                </p>
                <div v-for="skill in platformSkills" :key="skill" class="columns">
                    <div class="column is-4 is-paddingless">
                        {{skill.name}}
                    </div>
                    <div class="column is-2"></div>
                    <div class="column is-4">
                        <span>
                            <progress class="progress is-info is-medium" :value=skill.rating max="100"></progress>
                        </span>
                    </div>
                    <div class="column is-2"></div>
                </div>
                <!--                framework based skills-->
                <p class="is-size-4 has-text-weight-medium">
                    Frameworks
                    <br>
                    <br>
                </p>
                <div v-for="skill in frameworkSkills" :key="skill" class="columns">
                    <div class="column is-4 is-paddingless">
                        {{skill.name}}
                    </div>
                    <div class="column is-2"></div>
                    <div class="column is-4">
                        <span>
                            <progress class="progress is-info is-medium" :value=skill.rating max="100"></progress>
                        </span>
                    </div>
                    <div class="column is-2"></div>
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
                                class="button edged-5">
                            <span class="is-size-6-half">{{otherTechnicalSkill}}</span>
                        </button>
                    </div>
                </div>
<!--                <div class="text-center">-->
<!--                    <v-progress-circular :value="20"> hi</v-progress-circular>-->

<!--                    <v-progress-circular :value="40"></v-progress-circular>-->

<!--                    <v-progress-circular :value="60"></v-progress-circular>-->

<!--                    <v-progress-circular :value="80"></v-progress-circular>-->

<!--                    <v-progress-circular :value="100"></v-progress-circular>-->
<!--                </div>-->
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
                        name: "AWS",
                        rating: 65
                    },
                    {
                        name: "GIT",
                        rating: 88
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
                        rating: 82
                    },
                    {
                        name: "Flask.py",
                        rating: 74
                    },
                    {
                        name: "Spring Boot",
                        rating: 51
                    }
                ],
                otherTechnicalSkills: [
                    "CI/CD",
                    "JENKINS",
                    "ANGULAR",
                    "AUTOMATED TESTING",
                    "TYPESCRIPT",
                    "FUNCTIONAL PROGRAMMING",
                    "JAVA",
                    "OOP",
                    "UNIT TESTING",
                    "Mongodb",
                    "ELASTIC-SEARCH",
                    "SQL",
                    "Dynamodb",
                    "Python3",
                    "BEHAVIORAL TESTING",
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
        margin: 1rem;
    }
</style>
