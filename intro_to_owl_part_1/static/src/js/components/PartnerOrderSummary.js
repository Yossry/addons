 odoo.define("intro_to_owl_part_1.PartnerOrderSummary", function (require) {
     const FormRenderer = require("web.FormRenderer");
     const { Component } = owl;
     const { ComponentWrapper } = require("web.OwlCompatibility");

     /**
      * OWL component responsible for displaying a partner order summary widget
      * which will show order history details about a specific customer.
      */
     class PartnerOrderSummary extends Component {
         //
     };

     /**
      * Register properties to our widget.
      */
     Object.assign(PartnerOrderSummary, {
         template: "intro_to_owl_part_1.PartnerOrderSummary"
     });

     /**
      * Override the form renderer so that we can mount the component on render
      * to any div with the class o_partner_order_summary.
      */
     FormRenderer.include({
         async _render() {
             await this._super(...arguments);

             for(const element of this.el.querySelectorAll(".o_partner_order_summary")) {
                 (new ComponentWrapper(this, PartnerOrderSummary))
                     .mount(element)
             }
         }
     });
 });
