import React, {Component} from 'react';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '444-444-4444'
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'jkaren@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 3,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '666-666-6666'
        }
      ]
    };
  }

  render() {
    const {contacts} = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contacts
            // key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
