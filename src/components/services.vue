<template>
    <div class="w3-services" id="services">
        <div class="container">
            <div class="w3-services-grids">
                <h3 class="text-center">My Services<a href="#services"></a></h3>
                <servicessummary title="SharePoint and Office 365" description="I have been creating SharePoint solutions for most of my developer career. Together we can create solutions that will benefit your organization."/>
                <div class="col-md-8 w3-services-right-grid">
                    <div class="w3-icon-grid-gap1">
                        <servicesitem title="Branding" icon="codepen" description="Branding and customizing SharePoint and Office 365 look and feel." />
                        <servicesitem title="Responsive UI" icon="mobile" description="Modern solutions available for any screen size (mobiles/tables/pcs)" />
                        <servicesitem title="Optimization" icon="hourglass" description="Optimize your business processes - less work more time." />
                        <div class="clearfix"></div>
                    </div>
                    <div class="w3-icon-grid-gap2">
                        <servicesitem title="Photoshop" icon="modx" description="Lorem ipsum dolor sit amet, consectetur adipisci ngelit. In euismod faucibus quam." />
                        <servicesitem title="Income" icon="bar-chart" description="Lower your costs - generate more income." />
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
