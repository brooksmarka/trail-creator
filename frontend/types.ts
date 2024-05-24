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
  name?: string;
  manager?: string;
}

export interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export interface PaginationProps {
  setPage: (updateFn: (currentPage: number) => number) => void;
  data: ResponseData;
  page: number;
}

export interface SpatialReference {
  wkid: number;
  latestWkid: number;
}

export interface Field {
  name: string;
  type: string;
  alias: string;
  sqlType: string;
  length?: number;
  domain: any;
  defaultValue: any;
}

export interface Attributes {
  OBJECTID: number;
  feature_id: string;
  place_id: number;
  name: string;
  place_id_1: number;
  name_1: string;
  place_id_2: number;
  name_2: string;
  place_id_3: number;
  name_3: string;
  trail_num: string;
  surface: string;
  oneway: string;
  type: string;
  hiking: string;
  horse: string;
  bike: string;
  motorcycle: string;
  atv: string;
  ohv_gt_50: string;
  highway_ve: string;
  dogs: string;
  access: string;
  min_elevat: number;
  max_elevat: number;
  length_mi_: number;
  manager: string;
  INPUT_DATE: number;
  EDIT_DATE: number;
  trail_num_: string;
  trail_num1: string;
  trail_nu_1: string;
  snowmobile: string;
  ski: string;
  snowshoe: string;
  plowed: string;
  groomed: string;
  groomer_ur: string;
  url: string;
  seasonalit: string;
  seasonal_1: string;
  seasonal_2: string;
  seasonal_3: string;
  Shape__Length: number;
}

export interface Geometry {
  paths: number[][][];
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface TrailData {
  objectIdFieldName: string;
  uniqueIdField: {
      name: string;
      isSystemMaintained: boolean;
  };
  globalIdFieldName: string;
  geometryProperties: {
      shapeLengthFieldName: string;
      units: string;
  };
  geometryType: string;
  spatialReference: SpatialReference;
  fields: Field[];
  features: Feature[];
}


export interface ProviderListProps {
    data: TrailData[];
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
  provider: TrailData;
  handleClose: () => void;
  open: boolean;
}

export interface TrailTableProps {
  data: TrailData[];
  handleClickOpen: (feature: Feature) => void;
}

export interface ResponseData {
  results: TrailData[];
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