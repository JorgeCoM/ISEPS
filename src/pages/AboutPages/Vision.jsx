import { SubtitleComponent } from "../../components"


export const Vision = () => {
    return (
        <div className="flex mt-4">
        <div className="w-3/5 pr-4">
          <SubtitleComponent title="Visión"/> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, vitae viverra velit lobortis ac. Donec rutrum placerat metus, et cursus metus interdum vel. Ut dapibus, nunc in volutpat ornare, sem orci bibendum ipsum, a pulvinar metus nisl vitae arcu. 
          </p>
        </div>
        <div className="w-2/5">
          <img className="h-full w-full object-cover" src="https://chpeti20182916533home.files.wordpress.com/2019/03/vision.png" alt="Imagen descriptiva" />
        </div>
      </div>
      )
}