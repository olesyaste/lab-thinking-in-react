import React from 'react'

export default function ProductRow(props) {
    
    let color = {color: 'black'}
    if(!props.stock){
        color = {color: 'red'}
    } 

    return (
            <tbody>
                <tr style={color}>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                </tr>
            </tbody>
    )
}
