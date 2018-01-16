import { Component } from 'react';
import axios from 'axios';
import GifList from './gif_list';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", data: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit() {
    const baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
    const search = `${this.state.search}`;
    const fullUrl = baseUrl + search + "&api_key=CDnD8N7trVBhX8xYpJMTTUwtNF5roJfA";
    axios.get(fullUrl).then((res) => {
      this.setState({ data: res.data.data });
    }, (error) => {
      //handle the error
    });
  }

  render() {
    const assortedGifs = Object.values(this.state.data).map((gif) => {
      return (
        <li>
          <img src={gif.images.original.url} alt="" />
            <style jsx>{`
              li {
                margin: 0 10px;
                margin-bottom: 10px;
                box-sizing: border-box;
                list-style: none;
              }
              img {
                width: 100% !important;
                height: auto !important;
                border-radius: 15px;
              }
            `}</style>
        </li>
      )
    });

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange }/>
        </form>
        <GifList gifs={ assortedGifs }/>
        <style jsx>{`
          h1 {
            color: purple;
          }
        `}</style>
      </div>
    )
  }
}
