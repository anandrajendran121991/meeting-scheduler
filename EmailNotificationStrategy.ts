import { INotification } from "./Interfaces";

class EmailNotificationStrategy implements INotification {
  notify(email: string, message: string): void {
    console.log(`Email sent to: ${email}, message: ${message}`);
  }
}

export default EmailNotificationStrategy;
