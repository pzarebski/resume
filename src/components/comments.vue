<template>
    <section class="comment-w3l" id="contact">
        <div class="container">
            <h3 class="text-center">Contact Me</h3>
            <div class="col-lg-6 col-md-6 col-sm-6 comment-agile1" data-aos="flip-left">
                <commentsform />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 comment-agile2" data-aos="flip-right">
                <h4>Contact me for more details</h4>
                <p class="comment-w3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed insapien urna. Aenean Sed insapien urna in diam lacus. Nullam nisl urna, in consequat eget enim vitae, faucibus malesuada consectetur adipisc ingelit in consequat enim vitae</p>
                
                <h5><span class="fa fa-phone"></span> +112 367 8976</h5>
                <h5><span class="fa fa-envelope"></span> <a href="mailto:name@example.com"> mail@example.com</a></h5>
                <h5><span class="fa fa-map-marker"></span> 3481 Jack Street Beverly Hills 90210, USA</h5>
                <h5><span class="fa fa-twitter"></span> twitter/@my_website</h5>
                <h5><span class="fa fa-instagram"></span> instagram/@my_website</h5>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>
</template>

<script>
import commentsform from './comments.form.vue'

export default {
    components: {
        commentsform
    }
}
</script>
