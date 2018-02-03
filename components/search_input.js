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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ data: {} });
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
    const assortedGifs = Object.values(this.state.data).map((gif, idx) => {
      return (
        <li key={idx}>
          <img src={gif.images.downsized.url} alt="" />
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
          <div className="search">
            <input onChange={ this.handleChange }/>
            <i>
              <img src="http://www.stickpng.com/assets/images/585e4ae1cb11b227491c3393.png"
                onClick={ this.handleSubmit } alt=""/>
            </i>
          </div>
        </form>
        <GifList gifs={ assortedGifs }/>
        <style jsx>{`
          form {
            display: flex;
            justify-content: center;
          }
          .search {
            display: flex;
          }
          img {
            height: 100%;
          }
          i {
            height: 20px;
          }
        `}</style>
      </div>
    )
  }
}
