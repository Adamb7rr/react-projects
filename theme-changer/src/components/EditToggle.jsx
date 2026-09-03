import React, { Component } from "react";

export default class EditToggle extends Component
{
    render ()
    {
        return (
            <input
                type="checkbox"
                onChange={( e ) => this.props.update( e.target.checked )}
                checked={this.props.allowEdit}
            />
        )
    }
}