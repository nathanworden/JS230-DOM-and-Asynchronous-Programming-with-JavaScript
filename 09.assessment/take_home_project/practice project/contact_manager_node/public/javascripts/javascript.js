$(function() {
    let App = {
        contactTemplate: Handlebars.compile($('#contact_template').html()),
        tagsTemplate: Handlebars.compile($('#tags-template').html()),
        $contacts: $('.contacts'),
        contactIdNumber: 1,
        theContext: [],
        seperateOutTags: function() {
            // console.log(this.theContext.contacts);
            this.theContext.contacts.forEach(contact => {
                // console.log(contact.tags.split(', '));
                let splitted = contact.tags.split(', ');
                contact.tags = splitted;
            })
        },
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
        
            if (this.firstTimeMakingContactBtnClickable || this.theContext.length < 1) {
                theAddContactButtons.on("click", event => {
                    // console.log('click!');
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
        buildTheContext: function(fromWhere, searchText) {
            let that = this;
            let output;
            let request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/api/contacts');
            request.responseType = 'json';
            request.addEventListener('load', event => {
                let filtered;
                if (fromWhere === 'fromSearch') {
                    filtered = request.response.filter(contact => {
                        return contact.full_name.toLowerCase().includes(searchText.toLowerCase());
                    });
                } else if (fromWhere === 'fromTags') {
                    filtered = request.response.filter(contact => {
                        let result = contact.tags.includes(searchText);
                        return result;
                    });
                }

                console.log(filtered);
                if (fromWhere === 'fromSearch' || fromWhere === 'fromTags') {
                    that.theContext["contacts"] = filtered
                } else {
                    that.theContext["contacts"] = request.response;
                }

                this.seperateOutTags();
                this.$contacts.html(this.contactTemplate(this.theContext));
                $('#tags').html(this.tagsTemplate(this.theContext));
                if (fromWhere === 'fromAdd') {
                    $('#create-section').slideToggle(600);
                    $("article").slideToggle(600);
                } else if (fromWhere === 'fromEdit') {
                    $('#edit-form').slideToggle(600);
                    $("article").slideToggle(600);
                    $('#edit-form').remove();
                }
                this.addDeleteEventListener();
                this.addEditEventListener();
                this.addTagsEventListener();

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
                        let form = document.getElementById('form');
                        let freshEditForm = form.cloneNode(true);
                        freshEditForm.setAttribute('id', 'edit-form');
                        // console.log(freshEditForm.firstElementChild.innerHTML = 'Edit Contact');

                        freshEditForm.elements.full_name.value = json["full_name"];
                        freshEditForm.elements.phone_number.value = json["phone_number"];
                        freshEditForm.elements.email.value = json["email"];
                        freshEditForm.elements.tags.value = json["tags"];
                        let id = json["id"];

                        $('.container').append(freshEditForm);

                        $(freshEditForm).slideToggle(600);
                        $("article").slideToggle(600);

                        $('#edit-form #cancel').on('click', event => {
                            $("article").slideToggle(600);
                            $(freshEditForm).remove();
                        });


                        $("#edit-form").on('submit', event => {
                            event.preventDefault();
   
                            let editForm = event.currentTarget
                            let keysAndValues = [];
                            let data;
                            
                            keysAndValues.push(`id=${id}`);

                            for (let i = 0; i < editForm.elements.length; i += 1) {
                                let element = editForm.elements[i]
                                let key;
                                let value;

                                if (element.type === 'text') {
                                    key = encodeURIComponent(element.name);
                                    value = encodeURIComponent(element.value);
                                    keysAndValues.push(`${key}=${value}`)
                                }
                            }

                            data = keysAndValues.join('&');
                            // console.log(data);

                            let request = new XMLHttpRequest();
                            request.open('PUT', `http://localhost:3000/api/contacts/${id}`)
                            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            request.addEventListener('load', () => {
                                if (request.status === 201) {
                                    this.buildTheContext('fromEdit');

                                } else {
                                    console.log("handleAddContact didn't work")
                                }
                            });
                        
                            request.send(data);
                        });
                    } else {
                        console.log(request.status);
                    }
                });

                request.send();
            });
        },
        addTagsEventListener: function() {
            $(".contact-tags").on('click', event => {
                this.buildTheContext('fromTags', event.target.innerHTML);
                console.log(event.currentTarget);
                $(event.currentTarget).css('background', 'pink');
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
                request.open('POST', 'http://localhost:3000/api/contacts');
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
        handleKeyStroke: function() {
            let searchBox = document.querySelector("#search-box");
            searchBox.addEventListener("keyup", event => {
                let searchText = $(searchBox).val();
                this.buildTheContext("fromSearch", searchText);
                
            });
            // console.log(`searchBox: ${searchBox}`);
        },

        init: function() {
            this.buildTheContext();
            this.handleAddContact();
            this.handleCancel();
            this.handleKeyStroke();
        }
    }

    App.init();

});