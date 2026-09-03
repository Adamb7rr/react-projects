import React, { Component } from "react";

export default class SizeChanger extends Component
{
    render ()
    {
        return (
            <input
                type="text"
                onChange={(e) => this.props.update(e.target.value)}
                disabled={!this.props.allowEdit}
            />
        )
    }
}