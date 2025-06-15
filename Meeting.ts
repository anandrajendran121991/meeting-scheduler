import { IMeeting, IRoom, IRecipient } from "./Interfaces.js";

class Meeting implements IMeeting {
  constructor(
    public id: number,
    public room: IRoom,
    public recipients: IRecipient[],
    public startTime: Date,
    public endTime: Date
  ) {}
}
export default Meeting;
