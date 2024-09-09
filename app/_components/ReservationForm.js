'use client'

import { differenceInDays } from 'date-fns'
import { useReservation } from './ReservationContext'
import SubmitButton from './SubmitButton'
import { createBooking } from '../_lib/actions'

function ReservationForm({ cabin, user }) {
  // CHANGE
  const { range } = useReservation()

  const { maxCapacity, discount, regularPrice, id } = cabin

  const starteDate = range.from

  const endDate = range.to

  const numNights = differenceInDays(range.to, range.from)

  const cabinPrice = numNights * (regularPrice - discount)

  console.log(user)

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {/* <p>
        {range.to || range.from
          ? `${String(range.from)} to ${String(range.to)}`
          : null}
      </p> */}

      <form
        action={createBooking}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <input hidden name="startDate" value={starteDate} />{' '}
        <input hidden name="endDate" value={endDate} />
        <input hidden name="numNights" value={numNights} />{' '}
        <input hidden name="cabinPrice" value={cabinPrice} />
        <input hidden name="maxCapacity" value={maxCapacity} />
        <input hidden name="discount" value={discount} />
        <input hidden name="regularPrice" value={regularPrice} />
        <input hidden name="cabinId" value={id} />
        {/* <input hidden name="" value={} /> */}
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 h-full w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <SubmitButton pendingStatusLabel="Reserving...">
            Reserve Now
          </SubmitButton>
        </div>
      </form>
    </div>
  )
}

export default ReservationForm
