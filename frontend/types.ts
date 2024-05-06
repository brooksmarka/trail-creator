interface Address {
  city: string;
  state: string;
  address_purpose: string;
  address_1: string;
  postal_code: string;
  telephone_number: string;
  country_name?: string;
}

export interface SearchParams {
  firstName?: string;
  lastName?: string;
  npiNumber?: string;
  taxonomies?: Taxonomy[];
  city?: string;
  state?: string;
  zip?: string;
}

export interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export interface PaginationProps {
  setPage: (updateFn: (currentPage: number) => number) => void;
  data: ResponseData;
  page: number;
}

export interface ProviderData {
    number: string;
    basic: {
      first_name: string;
      last_name: string;
      organization_name?: string;
      status: string;
      organizational_subpart: string;
      last_updated: string;
      certification_date: string;
      enumeration_date: string;
      authorized_official_first_name: string;
      authorized_official_last_name: string;
      authorized_official_title_or_position: string;
      authorized_official_telephone_number: string;
    };
    enumeration_type: string;
    practiceLocations: Address[];
    addresses: Address[];
    taxonomies?: Taxonomy[];
    endpoints: Endpoint[];
    identifiers: Identifier[];
  }

export interface ProviderListProps {
    data: ProviderData[];
}

export interface AddressesProps {
  addresses: Address[]
}

interface Taxonomy {
    desc: string;
    primary: string;
    state: string;
    license: string;
    taxonomy_group: string;
    code: string;
}

interface Identifier {
  desc: string;
  state: string;
  identifier: string;
  code: string;
}

export interface ProviderDetailProps {
  provider: ProviderData;
  handleClose: () => void;
  open: boolean;
}

export interface ProviderTableProps {
  data: ProviderData[];
  handleClickOpen: (provider: ProviderData) => void;
}

export interface ResponseData {
  results: ProviderData[];
}

interface Endpoint {
  endpointType: string;
  endpointTypeDescription: string;
  endpoint: string;
  endpointDescription: string;
  use: string;
  useDescription: string;
  contentType: string;
  contentTypeDescription: string;
  affiliation: string;
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country_code: string;
  country_name?: string;
}

export interface EndpointProps {
  endpoints: Endpoint[];
}