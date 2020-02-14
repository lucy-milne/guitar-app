import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoIosRemove, IoIosAdd } from 'react-icons/io';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';
import './Metronome.css';

class Metronome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bpm: 100,
            play: false
        }
    }

    changeBpm(event) {
        this.setState({bpm: event.target.value})
    } 

    buttonClicked() {
        this.setState({play: !this.state.play})
    }

    render () {
        return (
            <div className='card shadow' style={{marginLeft: '30%', marginTop: '10%', padding: '3%', width: '35%'}}> 
                <div style={{display: 'flex', flexDirection: 'row', marginLeft: '25px', marginRight: '40px'}}>
                    <div className='h1 mb-0 font-weight-bold text-gray-800 col-xl-4' style={{flexDirection: "row-start"}}> {this.state.bpm} </div>
                    <div className='h6 mb-0 font-weight-bold text-gray-800' style={{marginTop: '25px', marginLeft: '-25px'}}> &nbsp; bpm </div>
                        
                    <button className='btn btn-success btn-circle btn-lg' style={{flexDirection: "row-end", marginLeft: '115px'}} onClick={() => this.buttonClicked()}>
                        {this.state.play ? <IoIosPause /> : <IoIosPlay />}
                    </button>
                </div>

                <br />
                <br /> 
                <br />

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <IoIosRemove size={60} color={'#1cc88a'} />
                    <input className='yay slider' type="range" min="60" max="240" value={this.state.bpm} onChange={(event) => this.changeBpm(event)}/>
                    <IoIosAdd size={60} color={'#1cc88a'} />
                </div>


            </div>
        )
    }
}

export default Metronome;