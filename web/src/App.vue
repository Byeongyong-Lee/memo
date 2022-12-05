<template>
  <mainHeader/>
  <mainBody/>
  <mainFooter/>
</template>

<script>
import mainHeader from "@/components/mainHeader";
import mainBody from "@/components/mainFooter";
import mainFooter from "@/components/mainBody";

export default {
  name: 'App',
  components: {
    mainBody,
    mainFooter,
    mainHeader
  }
}
</script>
