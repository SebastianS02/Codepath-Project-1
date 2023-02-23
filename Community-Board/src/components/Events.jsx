import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h4>{props.event}</h4>
            <h5>{props.location}</h5>
            <h6>{props.league}</h6>
        </td>
    )
}

export default Event;