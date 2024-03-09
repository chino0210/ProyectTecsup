import SaveCards from "../components/SaveCards"

export default function Account() {
  return (
    <div className="bg-bunker-950 ">
      <div className="h-[10vh] p-10">
        <h1 className="text-4xl font-bold text-white"> Saved Cards: </h1>
      </div>
      <div className="px-10 pb-10">
        <SaveCards />
      </div>
    </div>
  )
}
