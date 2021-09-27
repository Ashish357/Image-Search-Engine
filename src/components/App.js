import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        loading: false, random: [],
        images: []
    };
    async onSearchSubmit(term) {
        this.setState({ loading: true });
        const response = await unsplash.get('/search/photos', {
                params: {query: term},
            }
        );
        this.setState({images: response.data.results,search: TextTrackCueList });
        this.setState({ loading: false });
    }
    render() {
        return (
            <div> 
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar loading={this.state.loading} onSubmit={(term) => this.onSearchSubmit(term)}/>
                <ImageList images={this.state.images} />
            </div>
            <h1 style={{textAlign: 'center'}}>By Ashish</h1>
            </div>
        );
    };
}

export default App;