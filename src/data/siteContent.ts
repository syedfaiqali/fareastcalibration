import {
  ArrowRight,
  BadgeCheck,
  Cable,
  CheckCircle2,
  CircleGauge,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  LayoutGrid,
  MapPinned,
  Ruler,
  Scale,
  ShieldCheck,
  ThermometerSun,
  TimerReset,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Accreditation', path: '/accreditation' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
];

export const heroHighlights = [
  'ISO/IEC 17025 & ISO 9001 aligned workflow',
  'On-site and in-lab calibration',
  'Annual contracts and validation support',
  'Traceable certificates and fast turnaround',
];

export const heroStats = [
  { label: 'Core service domains', value: '8+', icon: LayoutGrid },
  { label: 'Delivery modes', value: '2', icon: MapPinned },
  { label: 'Quality layers', value: '4', icon: ShieldCheck },
  { label: 'Coverage focus', value: 'Lab + field', icon: TrendingUp },
];

export const heroSlides = [
  {
    title: 'Temperature and humidity',
    description: 'Mapped, verified, and tracked for chambers, cold rooms, and process environments.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Pressure and vacuum',
    description: 'Gauge and transmitter support with a clean, industrial look and quick visual clarity.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Dimensional precision',
    description: 'Tools and inspection gear presented like a proper metrology portfolio, not a stock collage.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Electrical calibration',
    description: 'Instruments, indicators, and panels displayed with a premium technical rhythm.',
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
    anchor: 'temperature-humidity',
    title: 'Temperature and humidity',
    icon: ThermometerSun,
    summary:
      'Calibration and mapping for temperature chains, chambers, cold rooms, ovens, and humidity-sensitive environments.',
    items: ['Thermometers', 'RTD and thermocouple systems', 'Humidity indicators', 'Temperature mapping'],
  },
  {
    anchor: 'pressure-vacuum',
    title: 'Pressure and vacuum',
    icon: Gauge,
    summary:
      'Gauge, transmitter, manometer, and differential pressure calibration with traceable reference controls.',
    items: ['Pressure gauges', 'Vacuum gauges', 'Transmitters', 'Manometers and indicators'],
  },
  {
    anchor: 'dimensional',
    title: 'Dimensional',
    icon: Ruler,
    summary:
      'Precision support for metrology tools used in production, QA, maintenance, and inspection teams.',
    items: ['Micrometers', 'Verniers', 'Height gauges', 'Dial indicators'],
  },
  {
    anchor: 'electro-technical',
    title: 'Electro-technical',
    icon: Zap,
    summary:
      'Electrical calibration for source, measure, and inspection instruments across shop floors and labs.',
    items: ['Multimeters', 'Clamp meters', 'Oscilloscopes', 'Controllers and testers'],
  },
  {
    anchor: 'mass-balance-volume',
    title: 'Mass, balance and volume',
    icon: Scale,
    summary:
      'Instrument checks for weighing systems, balances, pipettes, and volume-handling equipment.',
    items: ['Balances', 'Standard weights', 'Pipettes', 'Volumetric glassware'],
  },
  {
    anchor: 'flow-fluid',
    title: 'Flow and fluid',
    icon: Droplets,
    summary:
      'Calibration support for process flow, water flow, and air flow devices used in utility and plant settings.',
    items: ['Flow meters', 'Anemometers', 'Rotameters', 'Pitot and sampler systems'],
  },
  {
    anchor: 'force-torque',
    title: 'Force and torque',
    icon: CircleGauge,
    summary:
      'Solutions for load, force, torque, and related mechanical measurement systems that need dependable accuracy.',
    items: ['Torque tools', 'Load cells', 'Force indicators', 'Mechanical gauges'],
  },
  {
    anchor: 'validation-mapping',
    title: 'Validation and mapping',
    icon: FlaskConical,
    summary:
      'Validation for cleanrooms, equipment, and thermal environments with documentation that helps teams stay audit-ready.',
    items: ['HVAC mapping', 'Cleanroom validation', 'Equipment qualification', 'Annual calibration contracts'],
  },
];

export const serviceMenuLinks = [
  { label: 'Temperature & Humidity', path: '/services#temperature-humidity' },
  { label: 'Pressure & Vacuum', path: '/services#pressure-vacuum' },
  { label: 'Dimensional', path: '/services#dimensional' },
  { label: 'Electro-Technical', path: '/services#electro-technical' },
  { label: 'Weight, Balance & Volume', path: '/services#mass-balance-volume' },
  { label: 'Flow & Fluid', path: '/services#flow-fluid' },
  { label: 'Force & Torque', path: '/services#force-torque' },
  { label: 'Validation & Mapping', path: '/services#validation-mapping' },
  { label: 'Annual Contract', path: '/services' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Survey',
    text: 'We review the instrument list, required tolerances, and site conditions before any work starts.',
  },
  {
    step: '02',
    title: 'Calibrate',
    text: 'The right references and procedures are used for each instrument family, in lab or on site.',
  },
  {
    step: '03',
    title: 'Verify',
    text: 'Results are checked against acceptance limits and traceability rules so there is no guesswork.',
  },
  {
    step: '04',
    title: 'Certify',
    text: 'You receive clear documentation, practical notes, and a record you can use in audits.',
  },
];

export const trustPoints = [
  {
    title: 'Traceability first',
    text: 'Every calibration path is built around reference continuity, documented results, and repeatability.',
    icon: BadgeCheck,
  },
  {
    title: 'Responsive scheduling',
    text: 'We keep turnaround tight and scheduling practical so operations are not waiting around.',
    icon: TimerReset,
  },
  {
    title: 'Audit ready documentation',
    text: 'Reports are structured for quality teams that want something tidy, clear, and defensible.',
    icon: ShieldCheck,
  },
  {
    title: 'People who know the tools',
    text: 'The work is handled by engineers who understand industrial instruments, not generic service desks.',
    icon: Wrench,
  },
];

export const industries = [
  'Pharmaceuticals',
  'Manufacturing',
  'Food and beverage',
  'Energy and utilities',
  'Laboratories',
  'Healthcare',
  'HVAC and facilities',
  'Inspection teams',
];

export const clientSectors = [
  'Production plants',
  'QA and QC labs',
  'Process industries',
  'Research facilities',
  'Utilities and utilities contractors',
  'Hospitals and biomedical teams',
];

export const testimonials = [
  {
    name: 'Plant QA Lead',
    company: 'Manufacturing client',
    text: 'The reporting is clean, the team is practical, and the turnaround fits the way our plant actually works.',
  },
  {
    name: 'Facilities Manager',
    company: 'Healthcare client',
    text: 'Calibration, validation, and follow-up all feel organised. It removed a lot of admin stress for us.',
  },
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
    lines: ['+91 98109 77012', '+91 90159 04300'],
  },
  {
    title: 'Email',
    lines: ['newdelhicalibrationlaboratory@gmail.com'],
  },
  {
    title: 'Location',
    lines: ['WZ-97 (NG-26), 206, 216 & 217', 'Sunder Palace, Jawalaheri Market', 'Paschim Vihar, New Delhi - 110063'],
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
