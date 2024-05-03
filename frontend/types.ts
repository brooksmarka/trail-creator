export default interface SearchParams {
    firstName?: string;
    lastName?: string;
    npiNumber?: string;
    taxonomies?: Taxonomy[];
    city?: string;
    state?: string;
    zip?: string;
  }

export default interface ProviderData {
    number: string;
    basic: {
      first_name: string;
      last_name: string;
      organization_name?: string;
    };
    addresses: Address[];
  }
  
interface Address {
    city: string;
    state: string;
    address_purpose: string;
    address_1: string;
    postal_code: string;
    telephone_number: string;
}

interface Taxonomy {
    desc: string;
}