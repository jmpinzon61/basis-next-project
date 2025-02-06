"use client"
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Acerca de nosotros - Juanma",
// }

function AboutPage() {
  const router = useRouter()

  return (
    <section>
      <h1>About</h1>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minima dolorem dolores quisquam, veritatis possimus commodi architecto nulla inventore aliquam adipisci, repellat magnam autem! Tempora nihil dolorum adipisci nam iusto?
        Excepturi eveniet quos eum doloribus laudantium sint veritatis temporibus, illo illum necessitatibus obcaecati nesciunt in maiores? Alias necessitatibus exercitationem suscipit, ullam tempora beatae laborum dolorum fuga corporis corrupti at sequi.
        Fuga iusto deserunt ea excepturi delectus exercitationem porro, natus magnam recusandae minus. Obcaecati, inventore repellendus, mollitia dolor suscipit aspernatur et rerum illo, quos sapiente neque eum officia facere porro incidunt?
        Doloribus, est. Odit alias neque fuga praesentium optio reiciendis quod doloribus rem nihil. Doloribus voluptatum, fugit cum reprehenderit ad nulla minima cumque iure, temporibus quas laudantium veniam quasi expedita dolore!
        Praesentium velit quidem, corporis impedit dicta rerum, possimus tempora rem doloribus tempore nisi sunt. Eveniet nihil, dolorem aut dolores illo distinctio earum rem laboriosam cupiditate sit assumenda mollitia id explicabo?
        Quos, repellendus beatae exercitationem molestias ut fugiat minus magnam maxime perspiciatis dolor, possimus nobis tempore dolore incidunt vero quo, praesentium sit tempora architecto animi laborum quibusdam non officia. Corporis, beatae!
        In illum recusandae necessitatibus quaerat quo unde, soluta eos maiores cumque aut sit quia? Ipsum, ipsa vitae? Eius consequatur corporis ipsam tempore molestias qui! Sit, consectetur tempora. Temporibus, aliquam nisi?
        Quaerat quis alias nisi nihil. Rerum nesciunt perspiciatis vero aliquid? Molestias, ut odio nisi labore vero repellat corrupti iste quaerat perspiciatis illo possimus, maxime nesciunt eaque reprehenderit incidunt temporibus nobis?</p>

      <button className="bg-sky-400 px-3 py-2 rounded-md"
      onClick={()=> {
        alert('Executing code!!!')
        router.push("/")
      }}
      >
        Click
      </button>
    </section>
  )
}

export default AboutPage;