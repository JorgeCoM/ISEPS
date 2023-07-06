import { memo } from "react"

export const BarSlider = memo(({data = [], goToSlide, current}) => {
  return (
    <div className="flex justify-center pb-2 absolute left-0 bottom-0 w-full">
    {data.map((_, i) => (
      <span
        key={i}
        className={`h-1 w-5 rounded-full mx-1 cursor-pointer ${
          i === current ? "bg-white" : "bg-gray-300"
        }`}
        onClick={() => goToSlide(i)}
      />
    ))}
  </div>
  )
})