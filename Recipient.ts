import { IRecipient, INotification } from "./Interfaces.js";

export class Recipient implements IRecipient {
  constructor(public email: string, private strategy: INotification) {}

  notify(message: string) {
    this.strategy.notify(this.email, message);
  }
}

export default Recipient;
