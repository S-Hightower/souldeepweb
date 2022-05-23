import React, { useState } from 'react'
import { CgChevronDoubleDown, CgChevronDoubleUp } from 'react-icons/cg'
const Service = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <article className='service'>
            <header>
                <h3 onClick={() => setExpanded(!expanded)}>
                    {title}
                </h3>
                <button className='btn' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <CgChevronDoubleUp /> : <CgChevronDoubleDown />}
                </button>
            </header>
            {expanded && <h5>{info}</h5>}
            <hr />
        </article>
    )
}

export default Service;