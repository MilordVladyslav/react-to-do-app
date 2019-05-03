import React from 'react';
// import logo from './logo.svg';
import 'sass';
import './App.css';
import 'reset-css';
import './scss/index.scss';
import SearchFilter from './components/SearchFilter';
import Categories from './components/Categories';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import WarningMessage from './components/WarningMessage';

class App extends React.Component {
  state = {
    items: [
      {
        text: 'Drink coffee',
        id: 0,
        status: 'Uncompleted'
      },
      {
        text: 'Learn React',
        id: 1,
        status: 'Completed'
      },
      {
        text: 'Take over the world',
        id: 2,
        status: 'Uncompleted'
      }
    ],
    filteredItems: [],
    activeCategory: 'Uncompleted',
    ItemForm: false,
    searchText: '',
    error: ''
  }
  receiveValue = (value) => {
      this.setState({
        searchText: value
      })
      this.filteredValue(value)
  }

  addItem = () => {
    if (this.validation(this.state.searchText)) {
      const newItem = this.newItem(this.state.searchText)
      this.setState({
        items: this.state.items.concat(newItem),
        searchText: '',
        error: ''
      })
    }
  }
  newItem(value) {
    const item = {
      text: value,
      id: 3,
      status: 'Uncompleted'
    }
    return item
  }
  validation = (value) => {
    if(value.length > 40) {
      this.setState({
        error: 'Max size: 40 characters'
      })
      console.log('over length')
      return false
    }
    if(!value.length) {
      this.setState({
        error: 'Empty field'
      })
      console.log('empty field')
      return false
    } else {
      if (this.state.filteredItems.length) {
        this.setState({
          error: 'You already have this item'
        })
        console.log('you have this note')
        return false
      }
    }
    return true
  }

  filteredValue(value) {
    this.setState((state) => { 
      return {
      filteredItems: this.state.items.filter((item) => {
        return item.text.toLowerCase().includes(value.toLowerCase())
      })
      }
    })
  }

  changeCategory = (value) => {
    this.setState({
      activeCategory: value
    })
  }
  
  render () {
    return (
      <div className="App">
        <WarningMessage message = {this.state.error}></WarningMessage>
        <SearchFilter search = {this.receiveValue} addItem = {this.addItem} text = {this.state.searchText} ></SearchFilter>
        <Categories activeCategory = {this.changeCategory}></Categories>
        <ItemList 
        items = {this.state.searchText.length ? this.state.filteredItems : this.state.items} 
        currentCategory = {this.state.activeCategory} ></ItemList>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
