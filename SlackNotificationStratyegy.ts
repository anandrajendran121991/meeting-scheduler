import { INotification } from "./Interfaces";

class SlackNotificationStratyegy implements INotification {
  notify(channel: string, message: string): void {
    console.log(`Slack channel: ${channel}, message: ${message}`);
  }
}

export default SlackNotificationStratyegy;
