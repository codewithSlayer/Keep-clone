import React from 'react'
import "../App.css"
const Note = (props) => {

    const remove = () => {
        props.deleteItems(props.id)
    }

    return (
        <>
            <div className="container my-5" id='border' >
                <div id="content">
                    <h4>{props.title}</h4>
                    <span>{props.content}</span>
                </div>
                <div id="remove">
                    <i className="fa-solid fa-trash mx-5" onClick={remove}></i>
                </div>
            </div>
        </>
    )
}

export default Note
