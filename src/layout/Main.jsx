import React, { Component } from 'react';
import Movies from '../components/Movies';
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

    render(){
        return( 
            <main className='container content'>  
                <Movies movies={this.state.movies}/>
            </main>
        )
    }

}   


export default Main