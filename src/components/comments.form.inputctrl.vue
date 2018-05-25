<template>
    <div class="control-group form-group">
        <div class="controls">
            <input :type="type" class="form-control" :id="ctrlId" :placeholder="title" required="">
            <p v-if="withHelp" class="help-block"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        withHelp: false,
        title: "",
        ctrlId: "",
        type: ""
    }
}
</script>

