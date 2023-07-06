import { SubtitleComponent } from "../../components"

export const Mision = () => {
    return (
        <div className="flex mt-4">
        <div className="w-3/5 pr-4">
          <SubtitleComponent title="Misión"/> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, vitae viverra velit lobortis ac. Donec rutrum placerat metus, et cursus metus interdum vel. Ut dapibus, nunc in volutpat ornare, sem orci bibendum ipsum, a pulvinar metus nisl vitae arcu. 
          </p>
        </div>
        <div className="w-2/5">
          <img className="h-full w-full object-cover" src="https://www.pngkey.com/png/full/252-2524012_imagenes-de-mision.png" alt="Imagen descriptiva" />
        </div>
      </div>
      )
}