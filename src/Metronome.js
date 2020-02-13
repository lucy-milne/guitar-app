import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoIosRemove, IoIosAdd } from 'react-icons/io';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';
import './Metronome.css';

class Metronome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            play: false
        }
    }

    buttonClicked() {
        this.setState({play: !this.state.play})
    }

    render () {
        return (
            <div className='card shadow' style={{marginLeft: '30%', marginTop: '10%', padding: '3%', width: '35%'}}> 
                <div style={{display: 'flex', flexDirection: 'row', marginLeft: '25px', marginRight: '40px'}}>
                    <div className='h1 mb-0 font-weight-bold text-gray-800' style={{flexDirection: "row-start"}}> 70</div>
                    <div className='h6 mb-0 font-weight-bold text-gray-800' style={{marginTop: '2%'}}> &nbsp; bpm </div>
                        
                    <button className='btn btn-success btn-circle btn-lg' style={{flexDirection: "row-end", marginLeft: '60%'}} onClick={() => this.buttonClicked()}>
                        {this.state.play ? <IoIosPause /> : <IoIosPlay />}
                    </button>
                </div>

                <br />
                <br /> 
                <br />

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <IoIosRemove size={60} color={'#1cc88a'} />
                    <input className='yay slider' type="range" min="60" max="240" value={220} />
                    <IoIosAdd size={60} color={'#1cc88a'} />
                </div>


            </div>
        )
    }
}

export default Metronome;