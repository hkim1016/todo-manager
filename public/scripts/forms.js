// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {   
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

            form.classList.add('was-validated')
        }, false)
      })
})()

let dateClass='.date';
$(document).ready(function ()
{
    if (document.querySelector(dateClass).type !== 'date')
    {
        var oCSS = document.createElement('link');
        oCSS.type='text/css'; oCSS.rel='stylesheet';
        oCSS.href='//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css';
        oCSS.onload=function()
        {
            var oJS = document.createElement('script');
            oJS.type='text/javascript';
            oJS.src='//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
            oJS.onload=function()
            {
                $(dateClass).datepicker();
            }
            document.body.appendChild(oJS);
        }
    document.body.appendChild(oCSS);
    }
});
