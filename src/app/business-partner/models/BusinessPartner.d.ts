export interface BusinessPartner {
  name: string;
  address: string;

  isPremium: boolean;
  rating?: number;
  partnerSince?: Date;
  revenue?: number; // Betrag

}
