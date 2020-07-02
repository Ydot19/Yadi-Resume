<template>
    <div class="hero">
        <div class="hero-body" id="banner">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third">
                        <resume-banner-name></resume-banner-name>
                    </div>
                    <div class="column is-narrow is-one-third" id="personal-information">
                        <resume-banner-personal-info></resume-banner-personal-info>
                    </div>
                    <div class="column">
                        <div class="container" id="qr-code-linkedin">
                            <div>
                                <resume-banner-qr-code></resume-banner-qr-code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import ResumeBannerName from "./resume-banner-name";
    import ResumeBannerPersonalInfo from "./resume-banner-personal-info";
    import ResumeBannerQrCode from "./resume-banner-qr-code";
    export default {
        name: "resume-banner",
        components: {ResumeBannerQrCode, ResumeBannerPersonalInfo, ResumeBannerName}
    }
</script>

<style scoped>
    div#qr-code-linkedin{
        margin-left: 24%;
    }

    div#personal-information{
        margin-left: 11%;
    }

    div#banner{
        padding-bottom: 8px;
        padding-top: 18px;
    }

    div.hero{
        background-color: rgb(176, 176, 138);
    }
</style>
