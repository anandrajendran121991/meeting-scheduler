import { IRoom } from "./Interfaces";

class Room implements IRoom {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public isOccupied: boolean = false
  ) {}
  occupy(): void {
    this.isOccupied = true;
  }
  release(): void {
    this.isOccupied = false;
  }
}

export default Room;
