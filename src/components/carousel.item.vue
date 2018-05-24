<template>
    <li>
        <div class="w3l-info">
            <h1>{{title}}<span>{{emphasis}}</span></h1>
            <p>{{desc}}</p>
            <ul>
                <li><a href="#hire" class="w3ls_more" >Hire Me</a></li>
                <li><a href="#contact" class="scroll w3l_contact">Contact Me</a></li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        title: "",
        emphasis: "",
        desc: ""
    }
}
</script>
