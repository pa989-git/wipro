// Define the Contact interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  
  // Implement the ContactManager class
  class ContactManager {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
      console.log(`Contact added successfully: ${contact.name}`);
    }
  
    viewContacts(): Contact[] {
      return this.contacts;
    }
  
    modifyContact(id: number, updatedContact: Partial<Contact>): void {
      let contact: Contact | null = null;
      
      for (let c of this.contacts) {
        if (c.id === id) {
          contact = c;
          break;
        }
      }
  
      if (!contact) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
  
      // Update the contact properties manually
      if (updatedContact.name) contact.name = updatedContact.name;
      if (updatedContact.email) contact.email = updatedContact.email;
      if (updatedContact.phone) contact.phone = updatedContact.phone;
  
      console.log(`Contact with ID ${id} updated successfully.`);
    }
  
    deleteContact(id: number): void {
      let index = -1;
  
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id === id) {
          index = i;
          break;
        }
      }
  
      if (index === -1) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
  
      this.contacts.splice(index, 1);
      console.log(`Contact with ID ${id} deleted successfully.`);
    }
  }
  
  // Testing the ContactManager class
  const manager = new ContactManager();
  
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
  