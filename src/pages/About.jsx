import { Outlet } from "react-router-dom"
import { NavAboutComponent } from "../components"

export const About = () => {

  return (
    <div className="p-4">
      <div>
        <div>
          <NavAboutComponent/>
        </div>
          <Outlet/>
      </div>
    </div>
  )
}
