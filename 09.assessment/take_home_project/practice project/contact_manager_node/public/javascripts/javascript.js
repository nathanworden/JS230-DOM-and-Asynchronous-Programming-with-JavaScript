$(function() {
    let App = {
        contactTemplate: Handlebars.compile($('#contact_template').html()),
        $contacts: $('.contacts'),
        contactIdNumber: 1,
        theContext: {},
        firstTimeMakingContactBtnClickable: true,
        aTest: {'theKey': 'theValue'},
        handleCancel: function() {
            $('#cancel').on('click', event => {
                $("#create-section").slideToggle(600);
                $("article").slideToggle(600);
            });
        },
        makeAddContactClickable: function() {
            let theAddContactButtons = $(".add-contact-btn")
        
            if (this.firstTimeMakingContactBtnClickable) {
                theAddContactButtons.on("click", event => {
                    $("#create-section").slideToggle(600);
                    $("article").slideToggle(600);
                    this.firstTimeMakingContactBtnClickable = false;
                });
            } else {
                $(theAddContactButtons[1]).on("click", event => {
                    $("#create-section").slideToggle(600);
                    $("article").slideToggle(600);
                });
            }
        },
        buildTheContext: function(fromWhere) {
            let that = this;
            let output;
            let request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/api/contacts');
            request.responseType = 'json';
            request.addEventListener('load', event => {
                that.theContext["contacts"]  = request.response;
                this.$contacts.html(this.contactTemplate(this.theContext));
                if (fromWhere === 'fromAdd') {
                    $('#create-section').slideToggle(600);
                    $("article").slideToggle(600);
                }
                this.addDeleteEventListener();
                this.addEditEventListener();

                if (request.response.length < 1) {
                    let h2 = document.createElement('h2');
                    h2.appendChild(document.createTextNode("There are no contacts."));
                    let div = document.createElement('div');
                    div.classList.add("add-contact-btn", "btn-style");
                    let a = document.createElement('a');
                    a.setAttribute('href','#contacts/new');
                    a.appendChild(document.createTextNode('Add Contact'));
                    div.appendChild(a);

                    $('.contacts').html(h2);
                    $('.contacts').append(div);

                    this.makeAddContactClickable();
                }
            });
            request.send();
        },
        addDeleteEventListener: function() {
            let deleteBtn = $('.select-delete-btn');
            deleteBtn.on('click', event => {
                let id = event.currentTarget.parentNode.parentNode.firstElementChild.innerHTML;
                let request = new XMLHttpRequest();
                request.open('DELETE', `http://localhost:3000/api/contacts/${id}`);
                request.addEventListener('load', event => {
                    if (request.status === 204) {
                        this.buildTheContext('fromDelete');
                    } else {
                        console.log(request.status);
                    }
                });

                request.send();
            });
        },
        addEditEventListener: function() {
            let editBtn = $('.edit-btn');
            editBtn.on('click', event => {
                let id = event.currentTarget.parentNode.parentNode.firstElementChild.innerHTML;
                let request = new XMLHttpRequest();
                request.open('GET', `http://localhost:3000/api/contacts/${id}`);
                request.addEventListener('load', event => {
                    if (request.status === 200) {
                        let json = JSON.parse(request.responseText);

                        form.elements.full_name.value = json["full_name"];
                        form.elements.phone_number.value = json["phone_number"];
                        form.elements.email.value = json["email"];
                        form.elements.tags.value = json["tags"];

                        $("#create-section").slideToggle(600);
                        $("article").slideToggle(600);
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
                        element.value = '';
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
                        this.buildTheContext('fromAdd');
                    } else {
                        console.log("handleAddContact didn't work")
                    }
                });

                request.send(data);
            });
        },

        init: function() {
            this.buildTheContext();
            this.handleAddContact();
            this.handleCancel();
        }
    }

    App.init();

});