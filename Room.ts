import { IRoom } from "./Interfaces";

class Room implements IRoom {
  constructor(
    public id: number,
    public name: string,
    public capacity: number
  ) {}
}

export default Room;
