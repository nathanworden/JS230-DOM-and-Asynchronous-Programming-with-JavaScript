$(function() {
    let App = {
        contactTemplate: Handlebars.compile($('#contact_template').html()),
        $contacts: $('.contacts'),
        contactIdNumber: 1,
        theContext: {
            "contacts" : [
                { full_name: "Bebe McGee", phone_number: '541-231-1453', email: 'worden.nathan@gmail.com'},
            ]
        },
        handleCancel: function() {
            $('#cancel').on('click', event => {
                $("#create-section").slideToggle(600);
                $("article").slideToggle(600);
            });
        },
        buildTheContext: function() {
            console.log('buildTheContext ran');
            let request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/api/contacts');
            request.addEventListener('load', event => {
                console.log(`This is event.target: ${event.target}`);
                this.theContext = "Now I'm a stupid string";
                console.log(`theContext: ${this.theContext}`)
            });
            request.send();
        },
        renderContacts: function() {
            this.buildTheContext();
            this.$contacts.html(this.contactTemplate(this.theContext));
            console.log('rederContacts ran')
        },
        handleAddContact: function() {
            let form = document.getElementById('form');
            form.addEventListener('submit', event => {
                event.preventDefault();

                let keysAndValues = [];

                for (let index = 0; index < form.elements.length; index += 1) {
                    let element = form.elements[index];
                    let key;
                    let value;

                    if (element.type !== 'submit') {
                        key = encodeURIComponent(element.name);
                        value = encodeURIComponent(element.value);
                        keysAndValues.push(`${key}=${value}`);
                    }
                }

                keysAndValues.push(`id=${this.contactIdNumber}`)
                this.contactIdNumber += 1;

                console.log(event.target);
                let data = keysAndValues.join('&');
                console.log(data);

                let request = new XMLHttpRequest();
                request.open('POST', 'http://localhost:3000/api/contacts')
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.addEventListener('load', () => {
                    if (request.status === 201) {
                        console.log(`Something worked. Here is the responseText: ${request.responseText}`);
                        this.renderContacts();
                        $('#create-section').slideToggle(600);
                        $("article").slideToggle(600);
                        
                    } else {
                        console.log("didn't work")
                    }
                });

                request.send(data);
            });
        },

        init: function() {
            $(".btn").on("click", event => {
                $("#create-section").slideToggle(600);
                $("article").slideToggle(600);
            });
            this.handleAddContact();
            this.handleCancel();
        }
    }

    App.init();

});