import Navbar from "./Navbar"
import SalesComponent from "./SalesComponent"


const Main = () => {
  return (
    <main className="">
      <Navbar />

      <section className="bg-gray-200 min-h-screen mt-10">

        <div className="flex">
        <SalesComponent />
        </div>

      </section>
    </main>
  )
}

export default Main