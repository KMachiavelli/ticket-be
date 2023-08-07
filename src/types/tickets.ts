export interface Ticket {
  id: number;
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

export interface CartVerificationRequestTO {
  content: {
    items: Array<Pick<Ticket, "title" | "id"> & { stackCount: number }>;
  };
  addedItemId: number;
}

export interface CartVerificationResponseTO {
  deliveryCost: number;
  total: number;
  addedItemTitle: string;
  addedItemId: number;
}

export interface FilteredTicketsRequestTO extends Omit<Ticket, "id"> {
  minPrice: string;
  maxPrice: string;
  sortOrder: string;
}

export interface FilteredTicketsResponseTO extends Array<Ticket> {}
