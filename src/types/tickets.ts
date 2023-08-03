export interface Ticket {
  title: string;
  distributor: string;
  type: TicketType;
  event: string;
  date: Date;
  quantity: number;
  price: number;
}

enum TicketType {
  CONCERT = "CONCERT",
  MOVIE = "MOVIE",
  THEATER = "THEATER",
  CONFERENCE = "CONFERENCE",
}
