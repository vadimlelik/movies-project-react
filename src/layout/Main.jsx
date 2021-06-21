import React, { Component } from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';
import Preloader from '../components/Preloader';
import '../index.css'

class Main extends Component {
    state ={
        movies:[],
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?apikey=a08d64f0&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }

    searchMovies =(str)=>{
        fetch(`https://www.omdbapi.com/?apikey=a08d64f0&s=${str}`)
        .then (response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }



    render(){
        const {movies} = this.state;
        return( 
            
            <main className='container content'>  
               <Search searchMovies={this.searchMovies} />
            {
                movies.length ? <Movies movies={movies}/>:<Preloader/>
            }
                
            </main>
        )
    }

}   


export default Main