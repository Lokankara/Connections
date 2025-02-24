export class Player {
  public wins: number;

  public rooms: number[];

  public games: number[];

  constructor(
    public index: number,
    public name: string,
    public password: string,
  ) {
    this.wins = 0;
    this.rooms = [];
    this.games = [];
  }

  public addRoom = (roomId: number) => {
    this.rooms.push(roomId);
  };

  public clearRoom = () => {
    this.rooms = [];
  };

  public addGame = (gameId: number) => {
    this.games.push(gameId);
  };

  public clearGame = () => {
    this.games = [];
  };
}
