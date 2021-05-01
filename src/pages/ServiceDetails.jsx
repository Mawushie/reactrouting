import React from 'react'

export default function ServiceDetails(props) {
    return (
        <div>
            <h2>ID: {props.match.params.id}</h2>
        </div>
    )
}
