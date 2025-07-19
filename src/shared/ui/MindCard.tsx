import { StarShipIcon } from "./Icons"

export const MindCard = () => {
    return (
        <div className="xl:p-16 p-10 mx-3 rounded-xl colder text-center flex flex-col justify-center text-zinc-100">
        <h3 className="xl:text-4xl text-2xl font-semibold flex gap-2 items-center justify-center">
        <StarShipIcon className="w-12 h-12" fill="currentColor" />
          Tienes algo en mente?  
        </h3>
        <h2 className="font-semibold text-lg">Podríamos hacerlo realidad..</h2>
      </div>
    )
}