import {  Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests-list";
import { Activities } from "./activities";
import { DestinationHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  console.log(isCreateActivityModalOpen)

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      
      <DestinationHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400'>
              <Plus className='size-5' />
              Cadastrar Atividade
            </button>
          </div>

          <Activities />
          
        </div>
        <div className="w-80 space-y-6">
          
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />

          <div></div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}


    </div>
  )
}