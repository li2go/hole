/**
 * Created by lanhao on 16/4/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

const styles={
    toolbarButton:{
        width:'4.5%',
        height:'80%',
        margin:'auto'

    },
    markWrap:{
        width:'100%',
        backgroundColor:'rgba(233,45,67,1)',
        height:'50px',
        textAlign:'left',
        marginBottom:'10px'
    }
};

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleUndoClick(){
        alert('撤销')
    }
    render() {
        return <div style={styles.markWrap} className='toolbar-buttons'>
            <button style={styles.toolbarButton}
                    onClick={this.handleUndoClick.bind(this)}
                    className='toolbar-button-undo'>
            undo
            </button>
            <button style={styles.toolbarButton}
                    className='toolbar-button-redo'>
                redo
            </button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>
                A
            </button>
            <span>!</span>
            <button style={styles.toolbarButton}
                    className='toolbar-button-redo'>
                B
            </button>
            <button style={styles.toolbarButton}
                    className='toolbar-button-redo'>
            C
            </button>

            <button style={styles.toolbarButton}
                    className='toolbar-button-redo'>
                D
            </button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>E
            </button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>F</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>G</button>
            <span>!</span>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>H</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>I</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>J</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>K</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>L</button>
            <button style={styles.toolbarButton} className='toolbar-button-redo'>M</button>
        </div>
    }

}