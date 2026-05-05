import React from 'react'

export default function article({title},{date},{preview}) {
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>

  )
}
