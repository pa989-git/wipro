// Implement the ContactManager class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully: ".concat(contact.name));
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = null;
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.id === id) {
                contact = c;
                break;
            }
        }
        if (!contact) {
            console.log("Error: Contact with ID ".concat(id, " not found."));
            return;
        }
        // Update the contact properties manually
        if (updatedContact.name)
            contact.name = updatedContact.name;
        if (updatedContact.email)
            contact.email = updatedContact.email;
        if (updatedContact.phone)
            contact.phone = updatedContact.phone;
        console.log("Contact with ID ".concat(id, " updated successfully."));
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = -1;
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            console.log("Error: Contact with ID ".concat(id, " not found."));
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact with ID ".concat(id, " deleted successfully."));
    };
    return ContactManager;
}());
// Testing the ContactManager class
var manager = new ContactManager();
// Adding contacts
manager.addContact({ id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" });
// Viewing contacts
console.log("Contact List:", manager.viewContacts());
// Modifying a contact
manager.modifyContact(1, { email: "john.doe@example.com" });
// Deleting a contact
manager.deleteContact(2);
// Trying to delete a non-existent contact
manager.deleteContact(3);
// Viewing updated contacts
console.log("Updated Contact List:", manager.viewContacts());
