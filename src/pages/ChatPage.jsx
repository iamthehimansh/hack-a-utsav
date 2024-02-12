import React, { Component } from 'react'
import "./ChatPage.css"
export default class ChatPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                text: "Where are you planning to go?",
                by: 0
            }],
            newMessage: ""
        };
        this.q=[
            "Where are you planning to go?",
            "Any specific activity/movent in mind?",
            "What is your budget?",
            "How many people are going?",
            "What is the duration of your trip?",
        ]
        this.i=0;
    }

    handleInputChange = (event) => {
        this.setState({ newMessage: event.target.value });
    }

    handleSendMessage = () => {
        const { newMessage, messages } = this.state;
        var updatedMessages=[...messages]
        if (newMessage.trim() !== "") {
             updatedMessages = [ ...updatedMessages,{text:newMessage,by:1}];
        }
        this.i++;
        if(this.i<this.q.length){
            updatedMessages = [ ...updatedMessages,{text:this.q[this.i],by:0}];
        }
        this.setState({ messages: updatedMessages, newMessage: "" });
        if(this.i>=this.q.length){
            this.props.setHiddenloading(true)
            //Some Work
            localStorage.setItem("chat",this.state.messages)
            this.props.setHiddenloading(false)
            this.props.setPage("nav")
            
        }
    }

    render() {
        const { messages, newMessage } = this.state;
        return (
            <div className='container'>
                <div className='messages'>
                    {messages.map((message, index) => (
                        <div className={`mess by-${message.by}`} key={index}>{message.text}</div>
                    ))}
                </div>
                <input className='inpbox' onFocus={(e)=>e.target.scrollTo(e.target)} type="text" value={newMessage} onChange={this.handleInputChange} onSubmit={this.handleSendMessage} />
                <button className='btn'  onClick={this.handleSendMessage}>Send</button>
            </div>
        );
    }
}
