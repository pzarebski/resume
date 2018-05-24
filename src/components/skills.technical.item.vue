<template>
    <div>
        <h6>{{title}} <span> {{ percentString }} </span></h6>
        <div class="progress">
            <div class="progress-bar progress-bar-striped active" :style="percentStyleWidth">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: "",
    percent: {
      type: Number,
      default: 100
    }
  },
  computed: {
    percentString: function() {
      return Number(this.percent).toLocaleString(undefined, {style: "percent"});
    },
    percentStyleWidth: function() {
      return "width: " + this.percentString;
    }
  }
};
</script>

