import React, { Component } from "react";

export default class TextContainer extends Component
{
    render ()
    {
        return (
            <textarea
                style={
                    {
                        color: this.props.fontColor,
                        fontSize: this.props.fontSize,
                        fontFamily: this.props.fontFamily
                    }
                }
                onChange={(e) => this.props.updateText(e.target.value)}
            >{this.props.text}</textarea>
        )
    }
}