<template>
    <div class="control-group form-group">
        <div class="controls">
            <textarea :rows="rows" :cols="cols" class="form-control" :id="ctrlId" :placeholder="title" required=""></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rows: 0,
        cols: 0,
        ctrlId: "",
        title: ""
    }
}
</script>
