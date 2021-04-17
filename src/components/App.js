import React, {Component} from 'react';
import '../style/style.scss';
import Header from './Header';
import Download from './Download';
import Timeline from './Timeline';

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Download />
                <Timeline />
            </div>
        );
    }
}

export default App;