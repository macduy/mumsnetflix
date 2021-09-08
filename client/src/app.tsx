import { Player } from "player";
import * as React from "react";
import { Component } from "react";

interface AppProps {
}

interface AppState {
}

export class App extends Component<AppProps, AppState> {
    render() {
        return <Player movie={{ lines: []}}/>
    }
}