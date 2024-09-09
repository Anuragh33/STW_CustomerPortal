'use client'

import { useOptimistic } from 'react'
import { deleteBooking } from '../_lib/actions'
import ReservationCard from './ReservationCard'
export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBookings, bookingId) => {
      return currBookings.filter((booking) => booking.id !== bookingId)
    }
  )
  async function handleDelete(bookingId) {
    await deleteBooking(bookingId)
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  )
}
