import { IPublisher, IRecipient } from "./Interfaces";
import Meeting from "./Meeting";
import Room from "./Room";
import { isTimeOverlap } from "./Utils";

class BookingSystem {
  private rooms: Room[] = [];
  private meetings: Meeting[] = [];
  private nextMeetingId = 1;

  constructor(private publisher: IPublisher) {}

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  listRooms(): void {
    console.log("🛋️ All Meeting Rooms:");
    for (const room of this.rooms) {
      console.log(`#${room.id} - ${room.name} | Capacity: ${room.capacity}`);
    }
  }

  bookRoom(
    roomId: number,
    recipients: IRecipient[],
    start: Date,
    end: Date
  ): boolean {
    const room = this.rooms.find((r) => r.id === roomId);
    if (!room) {
      console.log(`❌ Room not found`);
      return false;
    }

    if (recipients.length > room.capacity) {
      console.log(`❌ Room capacity exceeded`);
      return false;
    }

    // Check if any recipient is already in another meeting at this time
    for (const recipient of recipients) {
      for (const meeting of this.meetings) {
        if (
          meeting.recipients.find((r) => r.email === recipient.email) &&
          isTimeOverlap(start, end, meeting.startTime, meeting.endTime)
        ) {
          console.log(`❌ ${recipient.email} has a conflicting meeting.`);
          return false;
        }
      }
    }

    // Book the room
    const meeting = new Meeting(
      this.nextMeetingId++,
      room,
      recipients,
      start,
      end
    );
    this.meetings.push(meeting);

    console.log(
      `✅ Room "${
        room.name
      }" booked from ${start.toISOString()} to ${end.toISOString()}`
    );

    for (const r of recipients) {
      this.publisher.subscribe(r); // auto-subscribe if needed
    }

    this.publisher.notifyAll(
      `Meeting booked in room "${
        room.name
      }" from ${start.toISOString()} to ${end.toISOString()}`
    );
    return true;
  }
}
export default BookingSystem;
