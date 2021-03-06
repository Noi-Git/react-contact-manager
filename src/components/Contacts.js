import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
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

  render() {
    const {contacts} = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
