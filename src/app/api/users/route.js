import { NextResponse } from "next/server"

// export function GET() {
//     // return new Response("Hola parcero")
//     // return NextResponse.json("Hello world")

//     //.extract.params
//     //.query.database
//     //.communite.with.other.service

//     return NextResponse.json({
//         message: "works!"
//     })
// }

// Lanzando variable de entorno

console.log(process.env.TOKEN)
console.log(process.env.SECRET_KEY)



export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?apikey=' + process.env.TOKEN)
    console.log(
        'https://jsonplaceholder.typicode.com/users?apikey=' + process.env.TOKEN
    )
    const data = await res.json() 
    return NextResponse.json(data)
}

export async function POST(request) {
    // const data = await request.json() //este es el request body
    // console.log(data)
    const {nombre, apellido} = await request.json()
    console.log(nombre, apellido)


    return NextResponse.json({
        message: "creando datos!"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "actualizando datos!"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "eliminando datos!"
    })
}