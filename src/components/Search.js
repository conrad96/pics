import React from 'react';

class Search extends React.Component{    
    state = {term: ''};

    onFormSubmit = evt => {
        evt.preventDefault();
        //pass search term to prop
        this.props.onSubmit(this.state.term);
    }

    render(){        
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Search" value={this.state.term} onChange={ e => this.setState({term: e.target.value})} />
                    </div>
                </form>                
            </div>
        );        
    }
}

export default Search;
