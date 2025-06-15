Here’s a clean and professional version of your updated `README.md`:

---

# 📅 Meeting Room Booking System

A simple TypeScript-based booking system for reserving meeting rooms, managing attendees, and sending notifications.

---

## ✅ Features

- 🗓️ Book a meeting slot
- ❌ Cancel a meeting slot
- 🏢 Display all meeting rooms with details
- 📧 Notify recipients upon successful booking
- ➕ Add new meeting rooms

---

## 🧩 Entities & Responsibilities

### 1. **Recipient**

Represents a person involved in the meeting.

- `id: number`
- `email: string`

---

### 2. **Room**

Represents a meeting room.

- `id: number`
- `name: string`
- `isOccupied: boolean`
- `capacity: number`

#### Method:

- `isAvailable(startTime: Date, endTime: Date): boolean`

---

### 3. **Notification (Observer Pattern)**

Handles communication with recipients.

- `subscribers: string[]`

#### Methods:

- `notify(message: string): void`
- `subscribe(email: string): void`
- `unsubscribe(email: string): void`

---

### 4. **EmailNotificationStrategy**

Strategy to send emails to recipients.

- `email: string`
- `message: string`

#### Method:

- `sendEmail(): void`

---

### 5. **Booking**

Details of a scheduled meeting.

- `id: number`
- `roomId: number`
- `startTime: Date`
- `endTime: Date`
- `recipients: Recipient[]`

---

### 6. **BookingSystem (Facade)**

Central class orchestrating the system.

- `rooms: Room[]`
- `bookings: Booking[]`
- `notifier: INotification`

#### Methods:

- `addMeetingRoom(room: Room): void`
- `bookSlot(roomId, recipients, startTime, endTime): boolean`
- `cancelSlot(bookingId: number): void`

---

## 🏃‍♂️ How to Run

```bash
npx ts-node index.ts
```

Ensure your project has:

- `typescript`
- `ts-node`

> Install dependencies (if missing):

```bash
npm install typescript ts-node --save-dev
```
