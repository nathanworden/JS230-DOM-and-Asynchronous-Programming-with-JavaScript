$(function() {
    let App = {
        contactTemplate: Handlebars.compile($('#contact_template').html()),
        $contacts: $('.contacts'),
        contactIdNumber: 1,
        theContext: {},
        aTest: {'theKey': 'theValue'},
        handleCancel: function() {
            $('#cancel').on('click', event => {
                $("#create-section").slideToggle(600);
                $("article").slideToggle(600);
            });
        },
        buildTheContext: function(fromWhere) {
            console.log('buildTheContext ran');
            let that = this;
            let output;
            let request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/api/contacts');
            request.responseType = 'json';
            request.addEventListener('load', event => {
                that.theContext["contacts"]  = request.response;
                console.log(this.theContext);
                this.$contacts.html(this.contactTemplate(this.theContext));
                if (fromWhere === 'fromAdd') {
                    $('#create-section').slideToggle(600);
                    $("article").slideToggle(600);
                }
                this.addDeleteEventListener();
            });
            request.send();
        },
        addDeleteEventListener: function() {
            let deleteBtn = $('.select-delete-btn');
            deleteBtn.on('click', event => {
                let classAttribute = event.currentTarget.getAttribute('class');
                let id = event.currentTarget.parentNode.parentNode.firstElementChild.innerHTML;
                console.log(id);

                let request = new XMLHttpRequest();
                request.open('DELETE', `http://localhost:3000/api/contacts/${id}`)
                request.addEventListener('load', event => {
                    if (request.status === 204) {
                        console.log(request.status);
                        this.buildTheContext('fromDelete');
                    } else {
                        console.log(request.status);
                    }
                });

                request.send();
            });
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

                let data = keysAndValues.join('&');

                let request = new XMLHttpRequest();
                request.open('POST', 'http://localhost:3000/api/contacts')
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.addEventListener('load', () => {
                    if (request.status === 201) {
                        console.log(`Something worked. Here is the responseText: ${request.responseText}`);
                        this.buildTheContext('fromAdd');
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
            // this.buildTheContext();
            this.handleAddContact();
            this.handleCancel();
        }
    }

    App.init();

});