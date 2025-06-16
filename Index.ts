import { Recipient } from "./Recipient";
import EmailNotificationStrategy from "./EmailNotificationStrategy";
import Publisher from "./Publisher";
import Room from "./Room";
import BookingSystem from "./BookingSystem";

// Create publisher
const publisher = new Publisher();

// Add recipients
const recipient1 = new Recipient(
  "anand@example.com",
  new EmailNotificationStrategy()
);
const recipient2 = new Recipient(
  "preeti@example.com",
  new EmailNotificationStrategy()
);
publisher.subscribe(recipient1);
publisher.subscribe(recipient2);

// Create booking system
const system = new BookingSystem(publisher);

// Add rooms
system.addRoom(new Room(1, "Conference A", 10));
system.addRoom(new Room(2, "Meeting Room B", 6));

// List rooms
system.listRooms();
const now = new Date();
const in1Hour = new Date(now.getTime() + 60 * 60 * 1000);
const in2Hours = new Date(now.getTime() + 2 * 60 * 60 * 1000);

system.bookMeetingRoom(1, [recipient1, recipient2], now, in1Hour); // ✅ Success
system.bookMeetingRoom(1, [recipient1], now, in1Hour); // ❌ Conflict for recipient1
system.bookMeetingRoom(2, [recipient1, recipient2, recipient2], now, in2Hours); // ❌ Over capacity

// List rooms again
system.listRooms();
