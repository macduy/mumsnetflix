import * as React from "react";
import { Component } from "react";
import { Dialogue } from "../../shared/types"


interface Props {
    movie: Dialogue
}

interface State {
}

export class Player extends Component<Props, State> {
    render() {
        return <div>PLAYER</div>
    }
}