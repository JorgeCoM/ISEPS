import { SubtitleComponent } from "../../components"

export const AboutUs = () => {
  return (
    <div className="flex mt-4">
    <div className="w-3/5 pr-4">
      <SubtitleComponent title="Sobre nosotros"/> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, vitae viverra velit lobortis ac. Donec rutrum placerat metus, et cursus metus interdum vel. Ut dapibus, nunc in volutpat ornare, sem orci bibendum ipsum, a pulvinar metus nisl vitae arcu. 
      </p>
    </div>
    <div className="w-2/5">
      <img className="h-full w-full object-cover" src="https://www.isesp.edu.do/wp-content/uploads/2016/10/cropped-LOGO-ISEP-NO-TEXT.jpg" alt="Imagen descriptiva" />
    </div>
  </div>
  )
}