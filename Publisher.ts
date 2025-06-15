import { IPublisher, IRecipient } from "./Interfaces";

class Publisher implements IPublisher {
  private subscribers: IRecipient[] = [];

  subscribe(recipient: IRecipient): void {
    // Avoid duplicates based on email
    const alreadyExists = this.subscribers.some(
      (r) => r.email === recipient.email
    );
    if (!alreadyExists) {
      this.subscribers.push(recipient);
    }
  }

  unsubscribe(email: string): void {
    this.subscribers = this.subscribers.filter((s) => s.email !== email);
  }

  notifyAll(message: string): void {
    for (const subscriber of this.subscribers) {
      subscriber.notify(message);
    }
  }
}

export default Publisher;
