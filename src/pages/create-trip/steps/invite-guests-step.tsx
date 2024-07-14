import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestsStep( {openGuestsModal, emailsToInvite, openConfirmTripModal}: InviteGuestsStepProps ) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button onClick={openGuestsModal} type='button' className='flex items-center gap-2 flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailsToInvite.length > 0 ? (
          <span className='text-zinc-100 text-lg flex-1 text-left'>{emailsToInvite.length} pessoas na viagem</span>
        ) : <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
        }
      </button>
      <div className='w-px h-6 bg-zinc-800'></div>


      <Button onClick={openConfirmTripModal} variant="primary" size="default">
        Confirmar Viagem
        <ArrowRight className='size-5' />
      </Button>


    </div>
  )
}