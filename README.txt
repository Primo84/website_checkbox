

##################          Form checkboxes with self colors            ############################



***********         How it use ?        ************

1. Add scripts files to html


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> // JQuery library ! important 

        <script src = "./checkbox.js"></script>
      
2. Add div element to html with id or class name

    For exampmle :

        <div id = "checkbox_policy" class = "form_checkboxes">  
        </div>

        <div id = "checkbox_dataprocessing" class = "form_checkboxes">  
        </div>

3. Call init_checkbox(selector, checkbox_attributes) for every group of checkboxes.

    For example :

            Html document : 

                    <div id = "checkbox_policy" class = "form_checkboxes">  
                    </div>

                    <div id = "checkbox_dataprocessing" class = "form_checkboxes">  
                    </div>

            Java Script code :

                    let checkbox_attributes = {
                    'background_color': '#86ad9c',
                    'selected_background_color' : '#86ad66',
                    'color' : 'aquamarine'

                }

                init_checkbox('#checkbox_policy', checkbox_attributes);  //first checkbox

                checkbox_attributes = {
                    'background_color': '#86dd9c',
                    'selected_background_color' : '#86ad66',
                    'color' : '#aa3456'

                }
                init_checkbox('#checkbox_dataprocessing', checkbox_attributes); // second checkbox


    *************************** or ********************************

                let checkbox_attributes = {
                'background_color': '#86ad9c',
                'selected_background_color' : '#86ad66',
                'color' : 'aquamarine'

            }

            init_checkbox('.form_checkboxes', checkbox_attributes);  // for all checkboxes with class name = "form_checkboxes"



************************  Checking checkbox state ********************************

Call is_checked() function with selector id or by JQuery function


    For example : 

    let checked = is_checked('#checkbox_policy');  

    or by JQuery

    $('#checkbox_policy').is_checked();