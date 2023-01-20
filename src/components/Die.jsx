import React from 'react'

export default function Die(props){
    return <div className={props.isHeld?"die_onHeld":"die"} onClick={props.click}>
        {props.value}
    </div>
}