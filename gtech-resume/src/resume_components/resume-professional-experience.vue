<template>
    <div>
        <div class="columns">
            <div class="column is-8 left-align">
                <p class="is-size-5 theme-orange-darker has-text-weight-medium">
                    {{title}}
                </p>

                <p class="is-size-6 is-italic">
                    {{company }}
                </p>
            </div>
            <div class="column is-4 right-align">
                <span>
                    <p class="is-size-6">{{start}} - {{end}} </p>
                    <p class="is-size-7">{{location}}</p>
                </span>
            </div>

        </div>
        <div class="columns">
            <div class="column left-align">
                <ul>
                    <li v-for="point in description" :key="point">
                        <span class="is-size-6-half">
                            <font-awesome-icon :icon="['fa', 'arrow-right']"/>
                            {{point}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume-professional-experience",
        props: {
            title: String,
            company: String,
            location: String,
            start: String,
            end: String,
            description: String
        }
    }
</script>

<style scoped>

</style>
