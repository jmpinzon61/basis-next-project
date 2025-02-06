import Link from 'next/link'
import React from 'react'


export default function Notfound() {
  return (
    <section>
        <h1>404</h1>
        <p>Pagin No encontrada</p>
        <Link href="/">Volver</Link>
    </section>
  )
}


