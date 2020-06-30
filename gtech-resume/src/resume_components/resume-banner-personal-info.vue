<template>
    <div class="is-left">
        <div class="columns">
            <span>
                <br>
                <font-awesome-icon :icon="['fa', 'map-marker']"/>
                <span>
                    1001 E. Byrd St. Richmond, Virginia 23219
                </span>
            </span>
        </div>
        <div class="columns">
            <span>
                <font-awesome-icon :icon="['fa', 'envelope']"/>
                <span>
                    abdalhalim.yaadata@gmail.com
                </span>
            </span>
        </div>
        <div class="columns">
            <span>
                <font-awesome-icon :icon="['fa', 'mobile']"/>
                <span>
                    (614) 632 - 2473
                </span>
            </span>
        </div>
        <div class="columns">
            <span>
                <font-awesome-icon :icon="['fa', 'globe-americas']" />
                <span>
                    Citizenship: United States of America
                </span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume-banner-personal-info"
    }
</script>

<style scoped>

</style>
