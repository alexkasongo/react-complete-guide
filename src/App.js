import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1asdfds', name: 'Aleko', age: 28},
      { id:'2asfdc', name: 'Denzel', age: 26},
      { id:'3awefw', name: 'Andrea', age: 29}
    ],
    showPersons: false
  }

  nameChangedHandeler = (event, id) => {
    const personIndex  = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}) 
  }

  deletePersonHandler = (personIndex) => {
    // Old way to duplicate state
    // const persons =  this.state.persons.slice();

    // Modern way to duplicate state
    const persons =  [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandeler(event, person.id)} />
          })}

        </div> 
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm Aleko</h1>
        <p>This is working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
