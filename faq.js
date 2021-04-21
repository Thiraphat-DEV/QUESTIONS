(() => {
                                // queryselect All class toggle
        const toggles = document.querySelectorAll('.faq-toggle');

                                  // loop nodelist in foreach
        toggles.forEach((toggle)=>{
                                // Add Event click
            toggle.addEventListener('click', () =>{
                            // add classlist active && toggle btn
                toggle.parentNode.classList.toggle('active')
            })
        });

         



           




})();
