import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './listContacts'
import CreateContact from './CreateContact'
import * as ContactAPI from './utils/ContactsAPI'
class App extends Component {
  state = {
    contacts: []
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
      <div className="app">
        <Route path='/' exact render={() => (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />)}
        />
        <Route path='/create' component={CreateContact} />
      </div>
    )
  }
}

export default App
