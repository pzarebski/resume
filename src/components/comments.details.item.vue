<template>
    <h5 v-if="isEmail"><span :class="iconStyle"></span> {{text}}</h5>
    <h5 v-else><span :class="iconStyle"></span> <a :href="mailHref">{{text}}</a></h5>
</template>

<script>
export default {
  props: {
    icon: "",
    text: "",
    isEmail: false
  },
  computed: {
    iconStyle: function() {
      return "fa fa-" + this.icon;
    },
    mailHref: function() {
      return "mailto:" + this.text;
    }
  }
};
</script>
