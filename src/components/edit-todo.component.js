import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);

        this.state = {
            movie: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    movie: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onDelete(e) {
        axios.post('/http://localhost:4000/movies/delete/' + this.props.match.params.id)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }
    adult = true;
    render() {
        return (
            <div>
                <h3 style={{color: 'white' }} align="center">{this.state.movie.title} Information</h3>
                <p style={{color: 'white' }}>
                    Adult: {String(this.state.movie.adult)}<br/>
                    Backdrop Path: {this.state.movie.backdrop_path}<br/>
                    Budget: {this.state.movie.budget}<br/>
                    Homepage: {this.state.movie.homepage}<br/>
                    ID: {this.state.movie._id}<br/>
                    IMDB ID: {this.state.movie.imdb_id}<br/>
                    Original Language: {this.state.movie.original_language}<br/>
                    Original Title: {this.state.movie.original_title}<br/>
                    Overview: {this.state.movie.overview}<br/>
                    Popularity: {this.state.movie.popularity}<br/>
                    Poster Path: {'https://www.image.tmdb.org/t/p/w300%7B' + this.state.movie.poster_path}<br/>
                    Release Date: {this.state.movie.release_date}<br/>
                    Revenue: {this.state.movie.revenue}<br/>
                    Runtime: {this.state.movie.runtime}<br/>
                    Status: {this.state.movie.status}<br/>
                    Tagline: {this.state.movie.tagline}<br/>
                    Title: {this.state.movie.title}<br/>
                    Video: {String(this.state.movie.video)}<br/>
                    Vote Average: {this.state.movie.vote_average}<br/>
                    Vote Count: {this.state.movie.vote_count}<br/>
                </p>
                <input type="Button" value="Delete" onClick={this.onDelete} className="btn btn-primary"/>
            </div>
        )
    }
}