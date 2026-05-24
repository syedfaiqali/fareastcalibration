import {
  ArrowRight,
  BadgeCheck,
  Cable,
  CheckCircle2,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  LayoutGrid,
  MapPinned,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  TimerReset,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';
import ourClient1 from '../assets/ourclient1.webp';
import ourClient2 from '../assets/ourclient2.webp';
import ourClient3 from '../assets/ourclient3.webp';
import ourClient4 from '../assets/ourclient4.webp';
import ourClient5 from '../assets/ourclient5.webp';
import ourClient6 from '../assets/ourclient6.webp';
import ourClient7 from '../assets/ourclient7.webp';
import ourClient8 from '../assets/ourclient8.webp';
import ourClient9 from '../assets/ourclient9.webp';
import ourClient10 from '../assets/ourclient10.webp';
import ourClient11 from '../assets/ourclient11.webp';
import ourClient12 from '../assets/ourclient12.webp';
import ourClient14 from '../assets/ourclient14.webp';
import ourClient15 from '../assets/ourclient15.webp';
import ourClient16 from '../assets/ourclient16.webp';
import ourClient17 from '../assets/ourclient17.webp';

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  // { label: 'Accreditation', path: '/accreditation' },
  { label: 'Clients', path: '/clients' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
];

export const heroHighlights = [
  'KAN accredited ISO/IEC 17025:2017 laboratory',
  'ISO 9001:2015 certified management system',
  'On-site and in-lab calibration',
  'Free pickup and delivery within Batam',
  'Traceable certificates with fast turnaround',
];

export const heroStats = [
  { label: 'Established', value: '2014', icon: LayoutGrid },
  { label: 'Customers served', value: '500+', icon: MapPinned },
  { label: 'Instruments calibrated', value: '20000+', icon: ShieldCheck },
  { label: 'Service modes', value: 'Lab + site', icon: TrendingUp },
];

export const heroSlides = [
  {
    title: 'PT. Fareast Calibration Services',
    description: 'Temperature and humidity instruments calibrated for reliable process, chamber, oven, and environmental measurements.',
    image:
      '/fareastcalibrationLogo.jpeg',
  },
  {
    title: 'Thermal calibration',
    description: 'Temperature and humidity instruments calibrated for reliable process, chamber, oven, and environmental measurements.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Mechanical calibration',
    description: 'Pressure gauges, vacuum gauges, torque tools, flow meters, weights, and balances supported in lab or on site.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Dimensional calibration',
    description: 'Calipers, micrometers, gauge blocks, thickness gauges, and inspection tools calibrated for dependable accuracy.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Electrical calibration',
    description: 'Multimeters, clamp meters, oscilloscopes, power meters, testers, and process calibrators verified with care.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
  },
];

export const homeGallery = [
  {
    title: 'Flow calibration',
    caption: 'Process and utility instruments',
    image:
      'https://images.unsplash.com/photo-1565043589221-1bb8b8f2e3d1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Inspection bench',
    caption: 'Working surfaces and reference tools',
    image:
      'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Instrumentation details',
    caption: 'Close-up technical precision',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Lab workflow',
    caption: 'Calibration and verification moment',
    image:
      'https://images.unsplash.com/photo-1518321745211-8e2a1f8b0d8d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Validation setup',
    caption: 'Environment mapping and control',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Service desk',
    caption: 'Clear workflow, clear response',
    image:
      'https://images.unsplash.com/photo-1520607162513-0f2a2d5a0c6a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const serviceGroups = [
  {
    anchor: 'flowM-calibration',
    title: 'Flow Meter Calibration',
    icon: ThermometerSun,
    summary:
      'Keep every transfer, process line, and utility reading under control with precision flow calibration supported by a computerized German technology test bench, air separators, and control valves for stable, dependable results.',
    items: ['Manual flow meters', 'Ultrasonic flow meters', 'Turbine flow meters', 'Magnetic flow meters'],
  },
  {
    anchor: 'pressure-calibration',
    title: 'Pressure Calibration',
    icon: Gauge,
    summary:
      'Protect your process, safety systems, and inspection records with accurate pressure calibration for industrial gauges, transmitters, switches, and testing equipment handled by experienced technicians.',
    items: ['Bunker Hose pressure testing', 'Digital pressure gauges testing', 'Pressure switches testing', 'Pressure transmitters testing', 'Dead weight tester', 'Pressure transducer testing', 'Barometer testing', 'Pressure indicator testing'],
  },
  {
    anchor: 'temperature-calibration',
    title: 'Temperature Calibration',
    icon: Ruler,
    summary:
      'From production ovens to sensitive measuring instruments, we help your team trust every temperature reading with careful calibration, testing, and traceable documentation.',
    items: ['Analog temperature indicators', 'Digital thermometers', 'Oven ,Baking testing', 'Thermocouples', 'Thermo hygrometer etc.', 'RTD testing'],
  },
  {
    anchor: 'dimensional-calibration',
    title: 'Dimensional Calibration',
    icon: Zap,
    summary:
      'Improve inspection confidence with dimensional calibration for hand tools, gauges, and precision measuring instruments used in daily quality control and production checks.',
    items: ['Vernir  /dial / digital caliper', 'Micrometer', 'Caliper checker/gauge block/length bars', 'Dial gauge/tester', 'Height gauge/Precision height master', 'Dimensional hand tools calibration', 'Plug gauge/pin gauge/Bore gauge'],
  },
  {
    anchor: 'mass-calibration',
    title: 'Mass Calibration',
    icon: FlaskConical,
    summary:
      'Make every weighing decision reliable with calibration for scales, balances, load cells, and indicators using tested reference loads and practical service support.',
    items: ['All type of weighing scales', 'Bench scales', 'Weight indicators', 'Floor scales', 'Post, Mail, and shipping scales', 'Load cells.', 'Lab balance.'],
  },
  {
    anchor: 'electrical-calibration',
    title: 'Electrical Calibration',
    icon: Droplets,
    summary:
      'Reduce downtime and keep electrical troubleshooting accurate with calibration and testing for meters, testers, calibrators, analyzers, and process instruments.',
    items: ['Frequency Meter /Counter', 'LCR / Capacitance/ Resistance /Inductance Meter', 'Timer/ Stop Watch', 'Mega Ohm /Milli Ohm Meter', 'Sound Level Meter/ Lux Meter', 'Vibration Meter', 'PH /Conductivity/ TDS Meter', 'Tachometer/Stroboscope', 'Digital / Analog Multimeter', 'Clampmeter', 'Multifunction Calibrator', 'Oscilloscope / Scope Meter', 'AC/DC Power Supply/ Power Meter', 'Ammeter / Voltmeter / Kilowatt Meter', 'High Voltage Meter/ Probe', 'Insulation Tester/ Megger'],
  },
  {
    anchor: 'general-calibration',
    title: 'General Calibration',
    icon: Factory,
    summary:
      'Bring calibration support directly to your vessel, plant, or worksite with practical onboard and industrial testing for safety, maintenance, inspection, and compliance needs.',
    items: ['OWS Calibration on vessel on site', 'Noise level survey on vessel on site', 'Thickness gauge testing on vessel on site', 'Vibration test', 'Safety device testing', 'Valves pressure testing', 'Safety relief valves calibration', 'Fire Alarm testing'],
  },
];

export const serviceMenuLinks = [
  { label: 'Flow Meter Calibration', path: '/services#flowM-calibration' },
  { label: 'Pressure Calibration', path: '/services#pressure-calibration' },
  { label: 'Temperature Calibration', path: '/services#temperature-calibration' },
  { label: 'Dimensional Calibration', path: '/services#dimensional-calibration' },
  { label: 'Electrical Calibration', path: '/services#electrical-calibration' },
  { label: 'Mass Calibration', path: '/services#mass-calibration' },
  { label: 'General Calibration', path: '/services#general-calibration' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Inspect',
    text: 'We receive or collect the instrument, inspect the unit under test, and enter the technical record.',
  },
  {
    step: '02',
    title: 'Quote',
    text: 'A clear quotation is submitted, then the approved PO and starting date are confirmed with the customer.',
  },
  {
    step: '03',
    title: 'Calibrate',
    text: 'The unit under test is calibrated or tested using the right procedures and supporting standards.',
  },
  {
    step: '04',
    title: 'Certify',
    text: 'Calibration certificates and supporting documents are issued before the instrument is delivered back.',
  },
];

export const trustPoints = [
  {
    title: 'Traceability first',
    text: 'Every calibration path is built around documented results, repeatability, and ISO/IEC 17025:2017 discipline.',
    icon: BadgeCheck,
  },
  {
    title: 'Responsive scheduling',
    text: 'We keep turnaround practical, with express calibration available without additional charges.',
    icon: TimerReset,
  },
  {
    title: 'Audit ready documentation',
    text: 'Certificates and supporting documents are prepared for audits, vendor files, and quality teams.',
    icon: ShieldCheck,
  },
  {
    title: 'People who know the tools',
    text: 'The work is handled by trained and competent laboratory technicians who understand industrial instruments.',
    icon: Wrench,
  },
];

export const industries = [
  'Manufacturing',
  'Marine and onboard services',
  'Oil and gas support',
  'Energy and utilities',
  'Laboratories',
  'Process industries',
  'Shipyards and maintenance teams',
  'Inspection teams',
];

export const clientSectors = [
  'Production plants',
  'QA and QC labs',
  'Process industries',
  'Research facilities',
  'Marine Industries',
  'Utilities and maintenance contractors',
];

export const testimonials = [
  {
    name: 'Plant QA Lead',
    company: 'Manufacturing client',
    text: 'The reporting is clean, the team is practical, and the turnaround fits the way our plant works.',
  },
  {
    name: 'Marine Service Coordinator',
    company: 'Onboard testing client',
    text: 'The pickup, calibration, certificate issue, and return process is straightforward and reliable.',
  },
];

export const clients = [
  { name: 'Client 1', logo: ourClient1 },
  { name: 'Client 2', logo: ourClient2 },
  { name: 'Client 3', logo: ourClient3 },
  { name: 'Client 4', logo: ourClient4 },
  { name: 'Client 5', logo: ourClient5 },
  { name: 'Client 6', logo: ourClient6 },
  { name: 'Client 7', logo: ourClient7 },
  { name: 'Client 8', logo: ourClient8 },
  { name: 'Client 9', logo: ourClient9 },
  { name: 'Client 10', logo: ourClient10 },
  { name: 'Client 11', logo: ourClient11 },
  { name: 'Client 12', logo: ourClient12 },
  { name: 'Client 14', logo: ourClient14 },
  { name: 'Client 15', logo: ourClient15 },
  { name: 'Client 16', logo: ourClient16 },
  { name: 'Client 17', logo: ourClient17 },
];



export const careerBenefits = [
  'Structured learning on real industrial instruments',
  'Balanced work between lab, field, and validation tasks',
  'Room to grow in quality, metrology, and service delivery',
  'A work style built around clarity and accountability',
];

export const openRoles = [
  {
    title: 'Calibration Engineer',
    location: 'Lab and field',
    type: 'Full time',
    focus: 'Pressure, temperature, dimensional, and electrical instruments.',
  },
  {
    title: 'Validation Specialist',
    location: 'On-site',
    type: 'Full time',
    focus: 'Mapping, qualification, and documentation for controlled environments.',
  },
  {
    title: 'Service Coordinator',
    location: 'Office support',
    type: 'Full time',
    focus: 'Scheduling, job tracking, and customer communication.',
  },
  {
    title: 'Technical Sales Executive',
    location: 'Hybrid',
    type: 'Full time',
    focus: 'Client discovery, scope alignment, and service proposals.',
  },
];

export const contactBlocks = [
  {
    title: 'Service desk',
    lines: ['+62-778-351-831', '+62 812-6705-1658'],
  },
  {
    title: 'Email',
    lines: ['fareastcalibration@gmail.com', 'andi@fareastcalibration.com', 'mak@fareastcalibration.com'],
  },
  {
    title: 'Location',
    lines: ['Tiban Raya Lestari, Block C/4', 'Sekupang, Batam, Indonesia'],
  },
];

export const buttonIcons = {
  arrow: ArrowRight,
  check: CheckCircle2,
  pin: MapPinned,
  shield: ShieldCheck,
  trend: TrendingUp,
  factory: Factory,
  cable: Cable,
  heart: HeartPulse,
};
