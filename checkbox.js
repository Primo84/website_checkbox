

function is_checked(checkbox_id)
{
    let checkbox_el = !checkbox_id ? this : $('#'+checkbox_id);

    let retVal = $(checkbox_el).attr('data-checked') == 'true' ? true : false;
    return retVal;

}

function click(event)
{
    const checkbox_el = event.currentTarget;

    let checkbox_svg = $(checkbox_el).children();
    let  checkbox_line_1 = $(checkbox_svg).children();

    if($(checkbox_el).attr('data-checked') == 'false')
    {
        $(checkbox_line_1).attr('stroke-width', '15');
        $(checkbox_el).attr('data-checked', 'true');
        $(checkbox_el).css('background-color', $(checkbox_el).attr('data-selected_background_color'));
    }
    else
    {
        $(checkbox_line_1).attr('stroke-width', '0');
        $(checkbox_el).attr('data-checked', 'false');
        $(checkbox_el).css('background-color', $(checkbox_el).attr('data-background_color'));
    }
}

function init_checkbox(selector, checkbox_attributes)
{
   let form_checkboxes = $(selector);

    let form_checkboxes_width_height = $(form_checkboxes).width();
    
    $(form_checkboxes).height(form_checkboxes_width_height);
    $(form_checkboxes).attr('data-checked','false');
    $(form_checkboxes).attr('data-selected_background_color', checkbox_attributes['selected_background_color']);
    $(form_checkboxes).attr('data-background_color', checkbox_attributes['background_color']);
    $(form_checkboxes).bind('click',click)

    $(form_checkboxes).css({
        'background-color': checkbox_attributes['background_color'],
        'cursor' : 'pointer'
    });

    $(form_checkboxes).html(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"\>\
        <line class = "checkbox_span_1" x1=${(100 * 4) / form_checkboxes_width_height} y1='40' x2='50' y2=100 stroke = ${checkbox_attributes['color']} stroke-width=0 /\>\
        <line class = "checkbox_span_2" x1='49' y1=100 x2='95' y2='10' stroke = ${checkbox_attributes['color']} stroke-width=0 /\>\
      </svg>  `)

    $.fn.is_checked = is_checked;

}