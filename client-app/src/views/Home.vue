<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/giphy.gif" />
    <HelloWorld msg="We're in business now, baby!" />
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
