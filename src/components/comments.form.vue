<template>
    <div class="col-lg-6 col-md-6 col-sm-6 comment-agile1" data-aos="flip-left">
        <form action="#" method="post" id="contact-form">
            <inputctrl ctrl-id="fullname" title="Full name" type="text" with-help="true" />
            <inputctrl ctrl-id="email" title="Email Address" type="email" with-help="false" />
            <inputctrl ctrl-id="phonenumber" title="Phone Number" type="text" with-help="true" />
            <textareactrl ctrl-id="message" title="Message" rows="10" cols="100" />
            
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </div>
</template>

<script>
import inputctrl from './comments.form.inputctrl.vue'
import textareactrl from './comments.form.textareactrl.vue'

export default {
    components: {
        inputctrl,
        textareactrl
    }
}
</script>
