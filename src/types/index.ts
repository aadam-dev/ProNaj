export type Sector = "digital" | "living" | "global";

export interface SectorInfo {
  id: Sector;
  name: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
  href: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs?: Record<string, string>;
  images: string[];
  price?: string;
}

export interface ContainerHouse {
  id: string;
  name: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  features: string[];
  sustainabilityScore: number;
  images: string[];
  blueprintUrl?: string;
}

export interface TradeRoute {
  id: string;
  origin: {
    name: string;
    country: string;
    coordinates: [number, number];
  };
  destination: {
    name: string;
    country: string;
    coordinates: [number, number];
  };
  product: string;
  volume?: string;
}

export interface ComplianceBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface TechStackItem {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "database" | "devops" | "security";
}

export interface GreenhouseStats {
  label: string;
  value: string;
  unit?: string;
  icon?: string;
}

export interface SustainabilityStat {
  label: string;
  value: number;
  maxValue: number;
  unit: string;
  description?: string;
}
