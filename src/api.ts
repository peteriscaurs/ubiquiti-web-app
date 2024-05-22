export interface RootObject {
  devices: Device[];
  version: string;
}

export interface Device {
  guids: string[];
  icon: Icon;
  id: string;
  images: Images;
  line: Line;
  product: Product;
  shortnames: string[];
  sku: string;
  sysid?: string;
  sysids: string[];
  triplets: (Triplet | Triplets2 | Triplets3 | Triplets4 | Triplets5 | Triplets6 | Triplets7 | Triplets8 | Triplets9)[];
  uisp?: Uisp;
  videos: Videos;
  btle?: Btle;
  jrf?: string[];
  jpa?: string[];
  compliance?: Compliance;
  deviceType?: string;
  minAdoptVersion?: MinAdoptVersion;
  unifi?: Unifi;
  fcc?: string;
  ic?: string;
}

export interface Unifi {
  adoptability?: string;
  network?: Network;
  protect?: Protect;
}

export interface Protect {
  fov: number;
  suggestedDistance: number;
}

export interface Network {
  bleServices?: BleService[];
  deviceCapabilities: string[];
  model: string;
  radios: Radios;
  type: string;
  chipset?: string;
  ethernetMaxSpeedMegabitsPerSecond?: number;
  features?: Features2;
  minimumFirmwareRequired?: string;
  numberOfPorts?: number;
  systemIdHexadecimal?: string;
  hybrid?: string;
  ports?: Ports;
  diagram?: string[];
  knownUnsupportedFeatures?: string[];
  linkNegotiation?: LinkNegotiation;
  networkGroups?: NetworkGroups;
  optionalWanPortIndexes?: number[];
  subtypes?: string[];
  details?: Details;
  power?: Power;
  temperatureSensors?: TemperatureSensor[];
  primaryPortGroupCount?: number;
  outlets?: Outlets;
  outletsDiagram?: string[];
  primaryOutletGroupCount?: number;
  rps?: Rps;
  optionalWanPortNumbers?: number[];
}

export interface Rps {
  diagram: string[];
  primaryPortGroupCount: number;
}

export interface Outlets {
  lan?: number[];
  standard: number[] | number | string;
  usb?: number[] | string;
  wan?: number[];
}

export interface TemperatureSensor {
  maxTemp?: number;
  sensor: string;
}

export interface Power {
  capacity: number;
}

export interface Details {
  ipsThroughput: string;
  legacyPortRemap?: boolean;
}

export interface NetworkGroups {
  eth0: string;
  eth1: string;
  eth2?: string;
  eth3?: string;
  eth4?: string;
  eth10?: string;
  eth5?: string;
  eth6?: string;
  eth7?: string;
  eth8?: string;
  eth9?: string;
  eth11?: string;
  eth12?: string;
  eth13?: string;
  eth14?: string;
  eth15?: string;
  eth16?: string;
  eth17?: string;
  eth18?: string;
  eth19?: string;
}

export interface LinkNegotiation {
  eth3?: Eth3;
  eth4?: Eth3;
  eth10?: Eth10;
  eth7?: Eth3;
  eth8?: Eth3;
  eth9?: Eth10;
  eth15?: Eth10;
  eth16?: Eth10;
  eth18?: Eth10;
  eth19?: Eth10;
  eth0?: Eth10;
  eth1?: Eth10;
  eth2?: Eth3;
  eth5?: Eth10;
  eth6?: Eth6;
}

export interface Eth6 {
  bindWith: string;
}

export interface Eth10 {
  portIdx: number;
  supportedValues: string[];
}

export interface Eth3 {
  portIdx?: number;
  supportedValues?: string[];
  bindWith?: string;
}

export interface Ports {
  standard?: number[] | number | string;
  eth0?: string;
  eth1?: string;
  eth2?: string;
  eth3?: string;
  eth4?: string;
  eth10?: string;
  eth5?: string;
  eth6?: string;
  eth7?: string;
  eth8?: string;
  eth9?: string;
  plus?: number[] | number | string;
  eth11?: string;
  eth12?: string;
  eth13?: string;
  eth14?: string;
  eth15?: string;
  eth16?: string;
  eth17?: string;
  eth18?: string;
  eth19?: string;
  sfp?: number[];
  qsfp28?: string;
  sfp28?: string;
}

export interface Features2 {
  zh?: boolean;
  ac?: boolean;
  bandsteer?: boolean;
  gen?: number;
  atfDisabled?: boolean;
  ax?: boolean;
  outdoorModeSupport?: boolean;
  be?: boolean;
  brcm?: boolean;
  airTime?: boolean;
  airView?: boolean;
  dfs?: boolean;
  poe?: boolean;
  fan?: string;
  legacyPortRemap?: boolean;
  sfpPlusSupported?: boolean;
}

export interface Radios {
  na?: Na;
  ng?: Na;
  '6e'?: _6e;
}

export interface _6e {
  gain: number;
  maxPower: number;
  maxSpeedMegabitsPerSecond?: number;
}

export interface Na {
  gain?: number;
  maxPower?: number;
  maxSpeedMegabitsPerSecond: number;
}

export interface BleService {
  configured: string;
  default: string;
  features?: Features;
}

export interface Features {
  ucore: boolean;
}

export interface MinAdoptVersion {
  net?: string;
  protect?: string;
}

export interface Compliance {
  fcc?: string;
  ic?: string;
  icEmi: string;
  modelName: string;
  rcm?: boolean;
  rfCmFcc?: number;
  rfCmIc?: number;
  text: Text;
  anatel?: string;
  ncc?: string;
  jrf?: string[];
  wifi?: string;
  indoorOnly?: boolean;
  kc?: string;
  jnfc?: string;
  jpa?: string[];
}

export interface Text {
  CA: string[];
  US: string[];
}

export interface Btle {
  factoryDefault: string;
  userConfigured: string;
}

export interface Videos {
  'mobile-intro'?: string;
  'mobile-setup-wizard-plugin'?: string;
  'mobile-setup-wizard-testing-connection'?: string;
}

export interface Uisp {
  bleServices: BleServices;
  firmware: Firmware;
  line: string;
  nameLegacy: string[];
}

export interface Firmware {
  board: string[];
  platform: null | string;
}

export interface BleServices {
  '4898bbc2-1cfc-4b5a-aedc-5d9f228dbd2b'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '5f4587c3-4819-4979-974a-e19a1557b70e'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'ac3e0973-cfee-4d5b-935a-ffca96959296'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'b80661db-965a-4cf1-997e-5dc9df7985bb'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '2d8db27f-0047-4db6-af20-f39f3a947364'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '51325c92-eed6-449d-aa77-62b7d202a2ae'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '0a81c6c1-f6cf-4295-8163-cdf62d8bee99'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'b663fde6-36e5-47f9-a4fe-1ea3a3d5098f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '0ef741b7-5b45-4b43-86c4-fee51b70da9f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'c9432429-0645-43ff-ae12-12a8d9c9c6d0'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '1de27764-5338-4fe5-b856-c2b2cc33d821'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '716dc54e-cce4-4e1d-9b40-39e2d4e50ad4'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '9984640a-4f18-4d70-81a0-214c548ff299'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'f3d8c841-7ffc-4b08-b283-ee32c493afd2'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '25b7f024-ee1e-42c5-a7d3-7571ed4b0942'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '73c6970a-4de4-4d7b-a69e-b9e5ab846bcc'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '0b3db31c-db2b-4811-bc2d-8c960f0319fd'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'e6c39d85-3145-41e3-8c35-265bdc213981'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '6796f4de-8a0d-4955-aa21-f8a7534f027a'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '95287a83-ee8d-4266-9e91-708ddde272b4'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'bff5764b-51ac-47f8-b4d0-0b43766420dd'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'fc3d726b-f843-4be1-a8b6-8594ca887c5a'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '7669789e-738f-44da-8c46-3513553720a5'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'cda15717-383b-42ef-8f1e-7513ff5e4129'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '15d91100-482c-4c29-b5ba-1458a1026188'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '598b0277-2a7c-47e9-a3af-04068b5c7a35'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '582ccb91-54df-4e82-a411-ac988cad5332'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '955da4b9-dce8-4372-b7c8-7e663f153296'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '25e5d218-8a6d-4463-9d73-b6955bffae01'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'cdd4aa77-ef2d-4e37-9198-93f3ecd7f734'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '05ffeb2d-191a-4207-b9f0-75b3ae31f1d9'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '8df8e1d4-b4f1-43c2-9556-4deb6675aa36'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '4ad53301-6364-40e8-be30-b50cddeda108'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'c8fdaea6-e13d-4a21-a14d-59a816097cae'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '64bf0ee9-0cec-4571-a12c-87fc690309be'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'be4804fd-abdb-438f-9b39-f4a6e5452ee0'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '7108b460-fe5b-4f7a-abd4-9153b8046e18'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'a34b9c82-5366-45ca-b377-586591569de3'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '5ba5d1e5-68a9-4adf-ba50-52391376fc9c'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'a637ed63-a0c5-4b06-9c71-32d2fd71628c'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '405a3564-cb33-448a-badb-b96fe05a8de0'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '8f30f895-c8e7-463e-9c5c-91b29b3f139e'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '54be8418-9930-4af7-aad4-44957c869716'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '699f2281-5b70-42b6-b798-481e5fee2f54'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '24cfc582-2598-451b-87a8-75faa06ce004'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '755fc123-590b-4f73-95a3-5246795717ac'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'bea546b6-b7a4-4f0e-b4b3-a9a5f01b3255'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'e481242f-6f2c-4019-aadf-b1fae07e549f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '5942299f-235e-49a1-b961-834a75a73671'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '8e615d89-ad4b-426f-92db-a36ec576ce0b'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '2a35b1b9-2856-43ab-a0f6-945a8c6bea59'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '64850447-626d-4385-8b09-0c77a3e26f7f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'dba08c38-0447-4e15-a897-d406e20a3e32'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'fbfc5eda-440a-4efd-a022-ef7646f8aef5'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '3bd4507d-9014-441a-90f4-42879aecc2e9'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '73df9595-308f-4261-9887-13bb25b95e2b'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '2139c5cd-4ad4-4ff9-9225-d1721d2e3db9'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '9220676d-2c22-40cb-aed8-7aad9b1da9ec'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '40236e8d-b84f-43bb-830f-b900d175ca9f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '7aaef447-0467-478d-9be8-fdf73282bab7'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'e0373cc2-d3bc-4eac-9c6e-423d0fe5d738'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '4b06ab8b-64ce-469e-862c-b64370180587'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'c86b8dd1-8c91-4ecc-8a85-6f32c54d50c3'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  '73b08668-52df-4626-a3e3-7638815b781a'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'dd71d062-2c19-4a26-a43b-d99c7cc12483'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'afedc9c7-1744-4d0d-9900-4fbe3b460617'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
  'b4bd9342-c02f-411a-9be5-8b6537d44a1f'?: _4898bbc21cfc4b5aaedc5d9f228dbd2b;
}

export interface _4898bbc21cfc4b5aaedc5d9f228dbd2b {
  mode: string;
}

export interface Triplets9 {
  k1?: string;
  k3: string;
}

export interface Triplets8 {
  k1: string;
  k3: string;
}

export interface Triplets7 {
  k1: string;
  k2: string;
  k3: string;
}

export interface Triplets6 {
  k1: string;
  k3?: string;
}

export interface Triplets5 {
  k1: string;
  k2: string;
}

export interface Triplets4 {
  k1?: string;
  k2?: string;
  k3?: string;
}

export interface Triplets3 {
  k1: string;
}

export interface Triplets2 {
  k1: string;
  k3?: string;
  k2?: string;
}

export interface Triplet {
  k1: string;
  k2?: string;
}

export interface Product {
  abbrev: string;
  name: string;
}

export interface Line {
  id: string;
  name: string;
}

export interface Images {
  default: string;
  nopadding: string;
  topology: string;
  'left-nopadding'?: string;
  'right-nopadding'?: string;
}

export interface Icon {
  id: string;
  resolutions: number[][];
}