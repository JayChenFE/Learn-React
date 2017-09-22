import React, { Component } from 'react';
import ListContacts from './listContacts'
class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  // removeContact = contact => {
  //   //方式1:传入函数
  //   this.setState(state => {
  //     return { contacts: state.contacts.filter(c => c.id !== contact.id) }
  //   })
  //   //方式2:传入对象
  //   //因为这里依赖之前的状态,所以不使用方式2
  //   this.setState({})
  // }
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App


