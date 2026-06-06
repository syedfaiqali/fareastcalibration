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
import brederoShawIndonesiaLogo from '../assets/clients/normalized/bredero-shaw-indonesia.webp';
import dveMarineEngineeringLogo from '../assets/clients/normalized/dvemarineengineering.webp';
import oceaneeringLogo from '../assets/clients/normalized/oceaneering-international-logo-wine.webp';
import pipamasLogo from '../assets/clients/normalized/pipamas.webp';
import ptAppipaLogo from '../assets/clients/normalized/ptappipa.webp';
import ptGreatDynamicsLogo from '../assets/clients/normalized/ptgreatdynamics.webp';
import ptLancangLogo from '../assets/clients/normalized/ptlancang.webp';
import rpcLogo from '../assets/clients/normalized/rpc.webp';
import bourbonLogo from '../assets/clients/normalized/bourbon-black.webp';
import cameronLogo from '../assets/clients/normalized/cameron.webp';
import eklLogo from '../assets/clients/normalized/ekl.webp';
import globalAutomationLogo from '../assets/clients/normalized/globalautomation.webp';
import imagesOneLogo from '../assets/clients/normalized/images-1.webp';
import ndtLogo from '../assets/clients/normalized/ndt.webp';
import osielectronicsLogo from '../assets/clients/osielectronics.svg';
import ourClient3Logo from '../assets/clients/normalized/ourclient3.webp';
import ourClient15Logo from '../assets/clients/normalized/ourclient15.webp';
import palmaLogo from '../assets/clients/normalized/palma.webp';
import ptCitraTurbineLogo from '../assets/clients/normalized/ptcitraturbine.webp';
import rainbowTubularsLogo from '../assets/clients/normalized/rainbowtubulars.webp';
import rinaLogo from '../assets/clients/rina-black.svg';
import seascapeLogo from '../assets/clients/normalized/seascape.webp';
import vallianzLogo from '../assets/clients/normalized/vallianz-logo.webp';
import volexLogo from '../assets/clients/volex-logo-black.svg';
import labImage from '../assets/lab 1.webp';
import analyticalImage from '../assets/analytical.webp';
import analyticalBenchImage from '../assets/analytical 1.webp';
import electricalImage from '../assets/electrical 11.webp';
import electricalBenchImage from '../assets/e;ectrical 14.webp';
import mechanicalImage from '../assets/mechanical 12.webp';
import mechanicalBenchImage from '../assets/mechanical 7.webp';
import pressureImage from '../assets/pressure 8.webp';
import pressureBenchImage from '../assets/pressure.webp';
import thermalImage from '../assets/thermal 10.webp';
import thermalBenchImage from '../assets/thermal 9.webp';
import generalImage from '../assets/general 5.webp';
import generalBenchImage from '../assets/general 8.webp';
import onsiteImage from '../assets/onsite 9.webp';
import onsiteBenchImage from '../assets/onsite 1.webp';
import teamImage from '../assets/IMG-20190318-WA0013.webp';
import fieldTeamImage from '../assets/IMG-20230306-WA0054.webp';
import inspectionImage from '../assets/DSC00437.webp';
import calibrationBenchImage from '../assets/DSC00356.webp';
import aboutHeroImage from '../assets/DSC00498.webp';
import image1a from '../assets/1a.jpg';
import image1b from '../assets/1b.JPG';
import image1c from '../assets/1c.jpg';
import image1d from '../assets/1d.JPG';

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
    description: 'We help industries protect quality, safety, and trust with accurate calibration services backed by reliable support and fast response.',
    image: image1a,
    objectPosition: '38% center',
  },
  {
    title: 'PT. Fareast Calibration Services',
    description: 'Accredited calibration and testing support from our Batam laboratory for dependable industrial measurement confidence.',
    image: aboutHeroImage,
    objectPosition: '38% center',
  },
  {
    title: 'Thermal calibration',
    description: 'Temperature and humidity instruments calibrated for reliable process, chamber, oven, and environmental measurements.',
    image: thermalImage,
  },
  {
    title: 'Mechanical calibration',
    description: 'Pressure gauges, vacuum gauges, torque tools, flow meters, weights, and balances supported in lab or on site.',
    image: mechanicalImage,
  },
  {
    title: 'Dimensional calibration',
    description: 'Calipers, micrometers, gauge blocks, thickness gauges, and inspection tools calibrated for dependable accuracy.',
    image: image1b,
  },
  {
    title: 'Electrical calibration',
    description: 'Multimeters, clamp meters, oscilloscopes, power meters, testers, and process calibrators verified with care.',
    image: electricalImage,
  },
];

export const homeGallery = [
  {
    title: 'Lab calibration bench',
    caption: 'Traceable work carried out in controlled laboratory conditions',
    image: labImage,
  },
  {
    title: 'Dimensional inspection',
    caption: 'Calipers, gauges, and hand tools checked for reliable accuracy',
    image: image1b,
  },
  {
    title: 'Electrical verification',
    caption: 'Meters and test instruments verified against reference standards',
    image: electricalBenchImage,
  },
  {
    title: 'Pressure calibration',
    caption: 'Industrial gauges and pressure instruments tested with care',
    image: image1d,
  },
  {
    title: 'Thermal calibration',
    caption: 'Temperature and humidity instruments supported for process teams',
    image: thermalBenchImage,
  },
  {
    title: 'Onsite support',
    caption: 'Field service for onboard, plant, and maintenance requirements',
    image: onsiteImage,
  },
];

export const aboutImages = {
  intro: aboutHeroImage,
  lab: labImage,
  team: teamImage,
  fieldTeam: fieldTeamImage,
  inspection: inspectionImage,
};

export const projectGallery = [
  { title: 'Analytical calibration', image: analyticalImage },
  { title: 'Analytical instrument check', image: analyticalBenchImage },
  { title: 'Electrical testing', image: electricalImage },
  { title: 'Mechanical calibration', image: mechanicalBenchImage },
  { title: 'Pressure gauge testing', image: pressureBenchImage },
  { title: 'Thermal measurement', image: thermalImage },
  { title: 'General calibration', image: generalBenchImage },
  { title: 'Onsite service', image: onsiteBenchImage },
  { title: 'Lab workflow', image: calibrationBenchImage },
];

export const serviceGroups = [
  {
    anchor: 'flowM-calibration',
    title: 'Flow Meter Calibration',
    icon: ThermometerSun,
    image: generalImage,
    summary:
      'Keep every transfer, process line, and utility reading under control with precision flow calibration supported by a computerized German technology test bench, air separators, and control valves for stable, dependable results.',
    items: ['Manual flow meters', 'Ultrasonic flow meters', 'Turbine flow meters', 'Magnetic flow meters'],
  },
  {
    anchor: 'pressure-calibration',
    title: 'Pressure Calibration',
    icon: Gauge,
    image: pressureImage,
    summary:
      'Protect your process, safety systems, and inspection records with accurate pressure calibration for industrial gauges, transmitters, switches, and testing equipment handled by experienced technicians.',
    items: ['Bunker Hose pressure testing', 'Digital pressure gauges testing', 'Pressure switches testing', 'Pressure transmitters testing', 'Dead weight tester', 'Pressure transducer testing', 'Barometer testing', 'Pressure indicator testing'],
  },
  {
    anchor: 'temperature-calibration',
    title: 'Temperature Calibration',
    icon: Ruler,
    image: thermalImage,
    summary:
      'From production ovens to sensitive measuring instruments, we help your team trust every temperature reading with careful calibration, testing, and traceable documentation.',
    items: ['Analog temperature indicators', 'Digital thermometers', 'Oven ,Baking testing', 'Thermocouples', 'Thermo hygrometer etc.', 'RTD testing'],
  },
  {
    anchor: 'dimensional-calibration',
    title: 'Dimensional Calibration',
    icon: Zap,
    image: image1c,
    summary:
      'Improve inspection confidence with dimensional calibration for hand tools, gauges, and precision measuring instruments used in daily quality control and production checks.',
    items: ['Vernir  /dial / digital caliper', 'Micrometer', 'Caliper checker/gauge block/length bars', 'Dial gauge/tester', 'Height gauge/Precision height master', 'Dimensional hand tools calibration', 'Plug gauge/pin gauge/Bore gauge'],
  },
  {
    anchor: 'mass-calibration',
    title: 'Mass Calibration',
    icon: FlaskConical,
    image: mechanicalImage,
    summary:
      'Make every weighing decision reliable with calibration for scales, balances, load cells, and indicators using tested reference loads and practical service support.',
    items: ['All type of weighing scales', 'Bench scales', 'Weight indicators', 'Floor scales', 'Post, Mail, and shipping scales', 'Load cells.', 'Lab balance.'],
  },
  {
    anchor: 'electrical-calibration',
    title: 'Electrical Calibration',
    icon: Droplets,
    image: electricalImage,
    summary:
      'Reduce downtime and keep electrical troubleshooting accurate with calibration and testing for meters, testers, calibrators, analyzers, and process instruments.',
    items: ['Frequency Meter /Counter', 'LCR / Capacitance/ Resistance /Inductance Meter', 'Timer/ Stop Watch', 'Mega Ohm /Milli Ohm Meter', 'Sound Level Meter/ Lux Meter', 'Vibration Meter', 'PH /Conductivity/ TDS Meter', 'Tachometer/Stroboscope', 'Digital / Analog Multimeter', 'Clampmeter', 'Multifunction Calibrator', 'Oscilloscope / Scope Meter', 'AC/DC Power Supply/ Power Meter', 'Ammeter / Voltmeter / Kilowatt Meter', 'High Voltage Meter/ Probe', 'Insulation Tester/ Megger'],
  },
  {
    anchor: 'general-calibration',
    title: 'General Calibration',
    icon: Factory,
    image: onsiteImage,
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
  'QA & QC labs',
  'Process industries',
  'Manufacturing Industries',
  'Marine Industries',
  'Oil and Gas Industries',
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

export type ClientLogo = {
  name: string;
  logo: string;
  logoFit?: {
    scale?: number;
    maxWidth?: string;
    maxHeight?: string;
  };
};

export const clients: ClientLogo[] = [
  { name: 'Bredero Shaw Indonesia', logo: brederoShawIndonesiaLogo },
  { name: 'Bourbon', logo: bourbonLogo, logoFit: { maxHeight: '82%' } },
  { name: 'Cameron', logo: cameronLogo },
  { name: 'DVE Marine Engineering', logo: dveMarineEngineeringLogo, logoFit: { maxHeight: '84%' } },
  { name: 'EKL', logo: eklLogo },
  { name: 'Global Automation', logo: globalAutomationLogo },
  { name: 'NDT', logo: ndtLogo, logoFit: { maxHeight: '88%' } },
  { name: 'Oceaneering International', logo: oceaneeringLogo },
  { name: 'OSI Electronics', logo: osielectronicsLogo, logoFit: { scale: 1.1 } },
  { name: 'Palma', logo: palmaLogo, logoFit: { maxHeight: '86%' } },
  { name: 'PIPAMAS', logo: pipamasLogo, logoFit: { maxHeight: '88%' } },
  { name: 'PT Appipa', logo: ptAppipaLogo },
  { name: 'PT Citra Turbine', logo: ptCitraTurbineLogo },
  { name: 'PT Great Dynamics', logo: ptGreatDynamicsLogo },
  { name: 'PT Lancang', logo: ptLancangLogo },
  { name: 'Rainbow Tubulars', logo: rainbowTubularsLogo },
  { name: 'RINA', logo: rinaLogo, logoFit: { scale: 1.25 } },
  { name: 'RPC', logo: rpcLogo, logoFit: { maxHeight: '84%' } },
  { name: 'Seascape', logo: seascapeLogo },
  { name: 'Vallianz', logo: vallianzLogo },
  { name: 'Volex', logo: volexLogo, logoFit: { scale: 1.25, maxHeight: '86%' } },
  { name: 'PaxOcean', logo: ourClient3Logo },
  { name: 'Caterpillar', logo: ourClient15Logo },
  { name: 'Client Logo', logo: imagesOneLogo },
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
