export default interface SearchParams {
    firstName?: string;
    lastName?: string;
    npiNumber?: string;
    taxonomy?: string;
    city?: string;
    state?: string;
    zip?: string;
  }

interface ProviderData {
    number: string; // NPI number
    basic: {
      first_name: string;
      last_name: string;
    };
    addresses: {
      city: string;
      state: string;
    }[];
  }
  
export default interface ProviderListProps {
    data: ProviderData[];
  }