import React, { Component } from 'react'
import './../styles/quick-tag-search.css';
import APIHandler from './../api/APIHandler';

export default class QuickTagSearch extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        APIHandler.get("/tags")
        .then(apiRes => {
            console.log(apiRes.data);
            this.setState({tags: apiRes.data})
        })
        .catch(apiErr => console.error(apiErr));
    };
    
    render() {
        return (
            <div>
                <h2>Quick search</h2>
                <div className="tag-list">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

