<template>
  <MainHeader/>
  <MainBody/>
  <MainFooter/>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainBody from "@/components/MainFooter";
import MainFooter from "@/components/MainBody";

export default {
  name: 'App',
  components: {
    MainBody,
    MainFooter,
    MainHeader
  }
}
</script>
