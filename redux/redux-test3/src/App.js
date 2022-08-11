import { Component } from 'react';
import './App.css';
import BookList from "./Components/book-list";
import BookDetail from "./Components/book-detail"; 
export default class App extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh"
      }}>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}