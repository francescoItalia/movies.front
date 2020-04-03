import React, { Component } from 'react';
import RandomSelect from '../selects/RandomSelect';
import Movie from '../movies/Movie';

class RandomPicker extends Component {

    render() {
        // console.log(this.props);

        return (
            <>
                <h1>Random Picker</h1>
                <RandomSelect
                    genres={this.props.genres}
                    getRandomMovie={this.props.getRandomMovie}
                />
                {this.props.randomMovie.id &&
                    <Movie
                        movie={this.props.randomMovie}
                        toggleMovie={this.props.toggleMovie}
                    />
                }
            </>
        );
    }
}

export default RandomPicker;