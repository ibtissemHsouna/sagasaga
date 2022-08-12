import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount(){
    console.log(this.props.onRequestUser())
    console.log(this.props.user)
  }
  render() {
    const { fetching, user, onRequestUser, error } = this.props;
    
    return (
      <div className="App">

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestUser}>Get Users</button>
        )}
          <table className='table table-bordered table-striped'>
                    
                    <tbody>
                        {
                            user.map(function(item,key){
                                return(
                                    <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.country}</td>
                                    <td>{item.city}</td>
                                    <td>{item.job}</td>
                                    <td>
                                    &nbsp;
                                   
                                  </td>
                                    </tr>  )
                                    }.bind(this))
                        }
                    </tbody>
                </table>

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    user:state.user,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestUser: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);