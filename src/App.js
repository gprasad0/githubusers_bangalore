import React, { Component } from "react";
import ImageCards from "./components/ImageCards";
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import "./components/gitUsers.css";
class App extends Component {

  state={
    data:[],
    isLoading:true
  }
  userSearchTerm = async (value,value1) => {
console.log("--------->",value,value1);

await axios.get(`https://api.github.com/search/users?q=${value}+location:Bangalore&page=${value1}`)
.then(response =>{
console.log("data",response.data);
this.setState({
  data:response.data.items,
  isLoading:false
})
})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar userSearchTerm={this.userSearchTerm} />
        {!this.state.isLoading?( <ImageCards data={this.state.data}/>):""}
       
      </div>
    );
  }
}

export default App;
