export interface IRecipient {
  email: string;
  notify(message: string): void;
}

export interface INotification {
  notify(email: string, message: string): void;
}

export interface IPublisher {
  subscribe(recipient: IRecipient): void;
  unsubscribe(email: string): void;
  notifyAll(message: string): void;
}

export interface IMeeting {
  id: number;
  room: IRoom;
  recipients: IRecipient[];
  startTime: Date;
  endTime: Date;
}

export interface IRoom {
  id: number;
  name: string;
  capacity: number;
  isOccupied: boolean;
  occupy(): void;
  release(): void;
}
