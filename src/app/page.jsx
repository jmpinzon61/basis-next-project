// import Users from '@/components/Users';
// import Users from '@/components/Users.js';
import Users from '@/components/Users'

export const metadata = {
    title: 'Mi pagina especial Home'
}

export default function HomePage() {
    // server componet
    return <section>
        {/* client componet*/}
        {/* <h1>Hello word</h1> */}
        {/* <button onClick={()=> {
            alert('Hola perro!')
        }}>
            Click
        </button> */}
        {/* {
            window.localStorage.getItem('token')
        } */}
        <Users/>
    </section>
}