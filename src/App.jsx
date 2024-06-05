import Main from "./components/Main"
import SidebarMenu from "./components/SidebarMenu"


const App = () => {
  return (
    <div className="py-4">

      <div className="container mx-auto mygrid">

        <SidebarMenu />

        <Main />

      </div>
     
    </div>
  )
}

export default App