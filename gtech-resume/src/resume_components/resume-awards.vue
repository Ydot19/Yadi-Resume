<template>
    <div>
        <p class="is-size-2-2 has-text-weight-bold">
            Awards/Accolades
            <br>
        </p>
        <ul>
            <li v-for="award in awards" :key="award">
                <p class="is-size-6-half">
                    <span>
                        <font-awesome-icon :icon="['fa','award']"
                                           size="2x"
                                           style="vertical-align: middle; color: rgb(237,192,77)"
                        />
                    </span>
                    {{award}}
                    <br>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "resume-awards",
        data: function () {
            return {
                awards: [
                    "Lambda Psi Minority Engineering Honorary",
                    "(Thermo Fisher Scientific) Process Manager/Process Improvement Certified",
                ]
            }
        }
    }
</script>

<style scoped>
</style>
