<template>
    <section class="hero is-dark">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <resume-banner-name></resume-banner-name>
                    </div>
                    <div class="column is-narrow">
                        <div class="field">
                            <span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                                Hello
                            </span>
                        </div>
                        <div class="field">
                            Hi
                        </div>
                        <div class="field">

                        </div>
                    </div>
                    <div class="column">

                    </div>
                    <div class="column">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /* eslint-disable */
    import ResumeBannerName from "./resume-banner-name";
    export default {
        name: "resume-banner",
        components: {ResumeBannerName}
    }
</script>

<style scoped>

</style>
