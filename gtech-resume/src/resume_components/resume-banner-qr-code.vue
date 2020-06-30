<template>
    <div>
        <figure>
            <img :src="image" width="128" height="128"/>
            <figcaption>LinkedIn Profile</figcaption>
        </figure>
    </div>
</template>

<script>
    import image from '../assets/qr_code.png'
    export default {
        name: "resume-banner-qr-code",
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<style scoped>

</style>
