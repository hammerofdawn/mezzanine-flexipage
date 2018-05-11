
jQuery(document).ready(function(){
    jQuery('#id_template_name').change(function(){
        jQuery('#id_template_name option').each(function(){
            if (jQuery(this).attr('selected') == 'selected' && jQuery(this).val() != '') {
                jQuery('.change-view-save-continue').trigger('click');
            }
        });
    });
});
