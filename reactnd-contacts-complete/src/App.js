import React, { Component } from 'react';
import ListContacts from './listContacts'
import CreateContact from './CreateContact'
import * as ContactAPI from './utils/ContactsAPI'
class App extends Component {
  state = {
    contacts: [],
    screen: "list"
  }
  componentDidMount() {
    ContactAPI.getAll().then(contacts => {
      this.setState({ contacts })
    })
  }
  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    ContactAPI.remove(contact)
  }

  nagtive = () => { this.setState({ screen: "create" }) }
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
        {this.state.screen === "list" &&
          (<ListContacts
            onDeleteContact={this.removeContact}
            onNagtive={this.nagtive}
            contacts={this.state.contacts}
          />)}
        {this.state.screen === "create" &&
          (<CreateContact />)
        }
      </div>
    )
  }
}

export default App
