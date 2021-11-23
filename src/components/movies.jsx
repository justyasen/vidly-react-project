import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'; 

class Movies extends React.Component {
    state = {
        movies: getMovies(),

    }; 

    //handle delete function
    handleDelete(movie){
        //getting all the movies except the currently selected one. 
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies }); 
    };

    render() { 
        const { count } = this.state.movies.length; 
        if(this.state.movies.length === 0)
        {
            return <p>There are no movies in the database. </p>; 
        }
        return (   
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.state.movies.map(movie =>  (
                <tr key = { movie._id } >
                    <td> { movie.title } </td>
                    <td> { movie.genre.name }</td>
                    <td> { movie.numberInStock }</td>
                    <td> { movie.dailyRentalRate } </td>
                    <td><button
                    onClick = { () => this.handleDelete(movie) }
                     className="btn btn-danger btn sm">Delete
                     </button></td>
                </tr>
                ))}
            </tbody>
        </table>
        ); 
    }
}
export default Movies; 
