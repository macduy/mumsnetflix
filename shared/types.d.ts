export type Dialogue = {
    lines: Dialogue.Line[]
}

export namespace Dialogue {
    export type Line = {
        speaker: string
        text: string
    }
}