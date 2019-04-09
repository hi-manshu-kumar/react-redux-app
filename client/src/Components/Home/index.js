import React, {Component} from 'react';


class Home extends Component {
    constructor(){
        super();
        this.state= {
            todos: [
                {id : 1, task : 'buy eggs'},
                {id : 2, task : 'go gym'}
            ]
        }
    }

    render(){
        return(
            <div className="main_content">
                hi tehre
            </div>
        );
    }
};

export default Home;