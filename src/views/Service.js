import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Service = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <article className='service'>
            <header>
                <h3 onClick={() => setExpanded(!expanded)}>
                    {title}
                </h3>
                <button className='btn' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {expanded && <h5>{info}</h5>}
            <hr />
        </article>
    )
}

export default Service;