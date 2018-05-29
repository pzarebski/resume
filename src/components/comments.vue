<template>
    <section class="comment-w3l" id="contact">
        <div class="container">
            <h3 class="text-center">Contact Me <a href="#contact"></a></h3>
            <commentsform />
            <commentdetails />
            <div class="clearfix"></div>
        </div>
    </section>
</template>

<script>
import commentsform from './comments.form.vue'
import commentdetails from './comments.details.vue'

export default {
    components: {
        commentsform,
        commentdetails
    }
}
</script>
