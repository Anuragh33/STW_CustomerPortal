'use server'

import { revalidatePath } from 'next/cache'
import { auth, signIn, signOut } from './auth'
import { supabase } from './supabase'
import { getBookings } from './data-service'
import { redirect } from 'next/navigation'

export async function signInAction() {
  await signIn('google', {
    redirectTo: '/account',
  })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

export async function updateGuest(formData) {
  const session = await auth()

  if (!session) throw new Error('Please log in to continue!!!')

  const nationalID = formData.get('nationalID')

  const [nationality, countryFlag] = formData.get('nationality').split('%')

  if (!/^[a-zA-Z0-9]{6,8}$/.test(nationalID))
    throw new Error(' Please enter a valid National ID!!')

  const updateData = { nationality, countryFlag, nationalID }

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.id)

  if (error) throw new Error('Guest could not be updated')

  revalidatePath('/account/profile')
}

export async function deleteBooking(bookingId) {
  const session = await auth()
  if (!session) throw new Error('Please log in to continue!!!')

  const guestBookings = await getBookings(session.user.id)

  const guestBookingIds = guestBookings.map((booking) => booking.id)

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You don't have Privilages to delete this booking!! ")

  const { error } = await supabase.from('bookings').delete().eq('id', bookingId)

  if (error) throw new Error('Booking could not be deleted')

  revalidatePath('/account/reservations')
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get('bookingId'))

  const session = await auth()

  if (!session) throw new Error('Please log in to continue!!!')

  const guestBookings = await getBookings(session.user.id)

  const guestBookingIds = guestBookings.map((booking) => booking.id)

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You don't have Privilages to delete this booking!! ")

  const updatedFields = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  }

  const { error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', bookingId)

  if (error) throw new Error('Booking could not be updated')

  revalidatePath('/account/reservations')
  revalidatePath(`/account/reservations/edit/${bookingId}`)

  redirect('/account/reservations')
}

export async function createBooking(formData) {
  console.log(formData)

  const session = await auth()

  if (!session) throw new Error('Please log in to continue!!!')

  const numGuests = formData.get('numGuests')
  const observations = formData.get('observations')

  const newbooking = []

  // const { data, error } = await supabase
  //   .from('bookings')
  //   .insert([newBooking])

  //   .select()
  //   .single()

  // if (error) {
  //   console.error(error)
  //   throw new Error('Booking could not be created')
  // }
}
