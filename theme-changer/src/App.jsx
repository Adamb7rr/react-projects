import React, { Component } from 'react'
import ColorChanger from './components/ColorChanger'
import EditToggle from './components/EditToggle'
import FamilyChanger from './components/FamilyChanger'
import SizeChanger from './components/SizeChanger'
import TextContainer from './components/TextContainer'
import './App.css'

class App extends Component
{
  constructor ()
  {
    super()
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true,
      text: 'The purple toaster danced gracefully across the slippery kitchen floor.'
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind( this )
    this.updateText = this.updateText.bind(this)
  }

  updateColor ( val )
  {
    this.setState( {
      fontColor: val
    })
  }
  updateSize ( val )
  {
    this.setState( {
      fontSize: val
    })
  }
  updateFamily ( val )
  {
    this.setState( {
      fontFamily: val
    })
  }
  updateEditStatus ( val )
  {
    this.setState( {
      allowEdit: val
    })
  }
  updateText ( val )
  {
    this.setState( {
      text: val
    })
  }

  render ()
  {
    return (
      <>
        <EditToggle
          update={this.updateEditStatus}
          allowEdit={this.state.allowEdit}
        />
        <ColorChanger
          update={this.updateColor}
          allowEdit={this.state.allowEdit}
          onChange={( e ) => update( e.target.value )}
          disabled={!allowEdit}
        />
        <SizeChanger
          update={this.updateSize}
          allowEdit={this.state.allowEdit}
          onChange={( e ) => update( e.target.value )}
          disabled={!allowEdit}
        />
        <FamilyChanger
          update={this.updateFamily}
          allowEdit={this.state.allowEdit}
          onChange={( e ) => update( e.target.value )}
          disabled={!allowEdit}
        />
        <TextContainer
          updateText={this.updateText}
          text={this.state.text}
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}
        />
      </>
    )
  }
}


export default App