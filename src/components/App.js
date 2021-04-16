import React, {Component} from 'react';
import '../style/style.scss';
import Header from './Header';
import Download from './Download';

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Download />
            </div>
        );
    }
}

export default App;