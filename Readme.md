# Booking system - Meeting Room

Lets book a meeting room

## Features

- Book a meeting slot
- Cancel a meeting slot
- Display all the meeting rooms with all details
- Notify the recipients - Meeting booked
- Add a room/meeting slot

## Entities & Responsibilities

1. **Recipients**
   - Describes a person in the meeting
   - **Properities:**
     - `id:number`
     - `email:string`
2. **Room**
   - Describes a room where the meeting is conducted
   - **Properties:**
     - `id:number`
     - `name:string`
     - `isOccupied:boolean`
     - `capacity:number`
   - **Methods**
     - `isAvailable()`
3. **Notification**
   - Describes a class to notify the recipients using observer pattern
   - **Properties:**
     - `subscribers:string[]`
   - **Methods**
     - `notify()`
     - `subscribe()`
     - `unsubscribe()`
4. **EmailNotificationStrategy**
   - Describe the email notification class
   - **Properties:**
     - `email:string`
     - `message:string`
   - **Methods**
     - `email()`
5. **Booking**
   - Describes the booking details for a room
   - `Properties`
     - `id: number`
     - `roomId: number`
     - `startTime: Date`
     - `endTime: Date`
     - `recipients: Recipient[]`
6. **BookingSystem**
   - Acts as a facade/controller — responsible for orchestrating operations.
   - **Properties:**
     - `rooms:Room[]`
     - `bookings:Booking[]`
     - `notifier:INotification`
   - **Methods**
     - `addMeetingRoom()`
     - `bookSlot()`
     - `cancelSlot()`

## Run

`npx ts-node index.ts`
