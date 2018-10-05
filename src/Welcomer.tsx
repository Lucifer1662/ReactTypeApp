import * as React from "react";


interface IProps{
    name: string;
}

export default class Welcomer extends React.Component<IProps>{
    
    public render(): string{
        return this.props.name;
    }
}