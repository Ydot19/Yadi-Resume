<template>
  <div>
    <resume-banner></resume-banner>
    <div class="container">
      <div class="columns">
        <div class="column">
          <resume-body-left></resume-body-left>
        </div>
        <div class="column">
          <resume-body-right></resume-body-right>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ResumeBanner from "../resume_components/resume-banner";
  import ResumeBodyLeft from "../resume_components/resume-body-left";
  import ResumeBodyRight from "../resume_components/resume-body-right";
  export default {
    name: "resume",
    components: {ResumeBodyRight, ResumeBodyLeft, ResumeBanner}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
