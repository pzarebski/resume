<template>
    <div class="w3-services" id="services">
        <div class="container">
            <div class="w3-services-grids">
                <h3 class="text-center">My Services</h3>
                <servicessummary title="Cras lacinia, nis ultrices" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam, a sodales er osplacerat vitae. Sed pretium fermentum luctus. Nunc at lectus ut ex blandit egestas. Pellent esque sed erat at diam lacinia accumsan."/>
                <div class="col-md-8 w3-services-right-grid">
                    <div class="w3-icon-grid-gap1">
                        <servicesitem title="Web design" icon="codepen" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <servicesitem title="Mobile Apps" icon="mobile" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <servicesitem title="Animation" icon="hourglass" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <div class="clearfix"></div>
                    </div>
                    <div class="w3-icon-grid-gap2">
                        <servicesitem title="Photoshop" icon="modx" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <servicesitem title="Marketing" icon="bar-chart" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <servicesitem title="Development" icon="shopping-bag" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
import servicessummary from './services.summary.vue'
import servicesitem from './services.item.vue'

export default {
    components: {
        servicessummary,
        servicesitem
    }
}
</script>
