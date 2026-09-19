/**
 * MOSAIC 2.0 / Complete Event Structured Data
 * Contains all factual event information matching event specification
 */

const SDG_TRACKS = [
  { id: "sdg-3", number: 3, name: "Good Health & Well-being", icon: "❤️", color: "#4C9F38", count: 4, theme: "Community health access, emergency response & frontline triage" },
  { id: "sdg-6", number: 6, name: "Clean Water & Sanitation", icon: "💧", color: "#26BDE2", count: 3, theme: "Water quality telemetry, rural sanitation & flood contamination tracking" },
  { id: "sdg-7", number: 7, name: "Affordable & Clean Energy", icon: "⚡", color: "#FCC30B", count: 3, theme: "Decentralized microgrids, renewable storage & low-cost energy monitoring" },
  { id: "sdg-9", number: 9, name: "Industry, Innovation & Infrastructure", icon: "🏗️", color: "#FD6925", count: 4, theme: "Resilient mesh telemetry, edge analytics & disaster-proof infrastructure" },
  { id: "sdg-11", number: 11, name: "Sustainable Cities & Communities", icon: "🏙️", color: "#FD9D24", count: 4, theme: "Urban heat resilience, localized disaster mapping & public transit access" },
  { id: "sdg-13", number: 13, name: "Climate Action", icon: "🌍", color: "#3F7E44", count: 4, theme: "Hyperlocal weather sensing, landslide early warning & carbon sequestration" },
  { id: "sdg-15", number: 15, name: "Life on Land", icon: "🌿", color: "#56C02B", count: 3, theme: "Forest fire detection, human-wildlife conflict mitigation & biodiversity monitoring" }
];

const WORKSHOP_DOMAINS = [
  {
    id: "ws-1",
    index: 1,
    name: "GIS, Weather Intelligence & Remote Sensing",
    shortName: "GIS & Remote Sensing",
    set: "Set A (3 hrs total across 2 sessions)",
    layer: "Spatial Telemetry & Spatial Intelligence",
    description: "Multi-spectral satellite imagery processing, geospatial hazard modeling, hyperlocal weather telemetry and offline map caching.",
    technologies: ["QGIS", "Sentinel-2 API", "GDAL", "MapLibre", "OpenWeather"],
    coveredProblems: [1, 2, 3, 4, 7, 8, 9, 11, 12, 13, 15, 16, 18, 20, 21, 24, 25]
  },
  {
    id: "ws-2",
    index: 2,
    name: "Edge AI & Computer Vision",
    shortName: "Edge AI & Vision",
    set: "Set B (5.5 hrs hands-on)",
    layer: "Local Inference & Perception",
    description: "Quantized neural networks on microcontrollers, real-time object detection for disaster reconnaissance, acoustic anomaly sensing.",
    technologies: ["TensorFlow Lite Micro", "YOLOv8 Edge", "OpenCV", "Edge Impulse", "ESP-EYE"],
    coveredProblems: [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 17, 18, 20, 21, 22, 24]
  },
  {
    id: "ws-3",
    index: 3,
    name: "Offline-First & Resilient Application Development",
    shortName: "Offline-First Apps",
    set: "Set A (3 hrs total across 2 sessions)",
    layer: "Distributed Protocol & Human Interface",
    description: "Mesh networking over BLE/LoRa, peer-to-peer data synchronization without internet, local CRDT storage and emergency UI/UX.",
    technologies: ["PWA", "IndexedDB", "RxDB", "LoRaWAN", "WebRTC Mesh"],
    coveredProblems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  },
  {
    id: "ws-4",
    index: 4,
    name: "Embedded Systems & Sensor Integration",
    shortName: "Embedded & Sensors",
    set: "Set B (5.5 hrs hands-on)",
    layer: "Physical Telemetry & Environmental Interfacing",
    description: "Ultra-low-power microcontrollers, multi-sensor analog front-ends, power harvesting circuits, industrial bus protocols (I2C/SPI/CAN).",
    technologies: ["ESP32-S3", "STM32", "Zephyr RTOS", "I2C/SPI Sensors", "Solar Harvesters"],
    coveredProblems: [1, 2, 3, 8, 9, 10, 11, 12, 14, 16, 18, 20, 21, 22, 23, 24]
  },
  {
    id: "ws-5",
    index: 5,
    name: "Rapid Hardware Prototyping & Digital Fabrication",
    shortName: "Hardware Fabrication",
    set: "Set B (5.5 hrs hands-on)",
    layer: "Enclosure Engineering & Structural Deployment",
    description: "CAD for rugged IP67 enclosures, rapid 3D printing with PETG/Nylon, PCB milling, thermal management and field deployment packaging.",
    technologies: ["Fusion 360", "KiCad 8", "FDM/SLA 3D Printing", "IP67 Gaskets", "Laser Cutting"],
    coveredProblems: [1, 4, 5, 7, 8, 9, 12, 14, 20, 23, 24, 25]
  },
  {
    id: "ws-6",
    index: 6,
    name: "Robotics, Automation & Control Systems",
    shortName: "Robotics & Automation",
    set: "Set B (5.5 hrs hands-on)",
    layer: "Autonomous Actuation & Field Mobility",
    description: "Closed-loop motor control, autonomous ground/aerial rover navigation, fail-safe actuation mechanics and sensor fusion.",
    technologies: ["ROS 2", "PID Controllers", "BLDC Motor Drivers", "Nav2", "Micro-ROS"],
    coveredProblems: [1, 2, 4, 10, 13, 15, 17, 18, 20, 21, 24, 25]
  }
];

const PROBLEM_STATEMENTS = [
  {
    id: 1,
    sdg: 3,
    sdgName: "Good Health & Well-being",
    track: "Healthcare Delivery",
    title: "Autonomous Cold-Chain Telemetry for Remote Vaccine Transit",
    challenge: "Design a tamper-proof, solar-harvesting cold storage unit with real-time temperature/humidity logging and satellite/LoRa fallback for remote hill-tract vaccine delivery.",
    humanitarianContext: "Over 25% of vaccines sent to rural outreach clinics degrade due to temperature breaks during the final mile of foot or river transport.",
    beneficiaries: ["Rural primary health centers", "ASHA community workers", "Remote indigenous hamlets"],
    technologies: ["ESP32-S3", "Peltier Cooling", "LoRaWAN", "Edge ML Temperature Forecasting", "IP67 Enclosure"],
    workshopDomains: [1, 2, 3, 4, 5, 6],
    outcomes: ["Sub-0.5°C accuracy logging", "Continuous 18-hour autonomous thermal buffer", "Instant cellular/LoRa breach beacon"]
  },
  {
    id: 2,
    sdg: 3,
    sdgName: "Good Health & Well-being",
    track: "Healthcare Delivery",
    title: "Offline AI Triage Unit for Frontline Maternal & Neonatal Care",
    challenge: "Develop an offline-first diagnostic device using computer vision and acoustic analysis to identify neonatal respiratory distress and postpartum hemorrhage warning signs.",
    humanitarianContext: "High infant mortality in regions lacking pediatricians can be curtailed if auxiliary nurse midwives receive instant algorithmic diagnostic corroboration.",
    beneficiaries: ["Auxiliary Nurse Midwives (ANM)", "Rural maternity sub-centers", "Disaster relief medical tents"],
    technologies: ["Raspberry Pi Zero 2W", "Edge Impulse", "Thermal Camera", "Offline PWA", "Digital Stethoscope"],
    workshopDomains: [1, 2, 3, 4, 6],
    outcomes: ["Under-5-second inference latency", "Zero cloud dependency", "Intuitive multi-lingual voice prompts"]
  },
  {
    id: 3,
    sdg: 3,
    sdgName: "Good Health & Well-being",
    track: "Healthcare Delivery",
    title: "Wearable Heat-Stress Telemetry for Outdoor Sanitation Laborers",
    challenge: "Create a rugged, sweat-resistant non-invasive physiological monitor that predicts heat stroke and dehydration in municipal sanitation workers and agricultural laborers.",
    humanitarianContext: "Extreme wet-bulb temperatures increasingly hospitalize outdoor unorganized laborers who lack access to shaded breaks or biometric monitoring.",
    beneficiaries: ["Municipal sanitation workers", "Construction laborers", "Field rescue personnel"],
    technologies: ["PPG Pulse Oximeter", "GSR Skin Conductance", "BLE Mesh", "Low-power E-Ink", "Vibration Alert"],
    workshopDomains: [1, 2, 3, 4],
    outcomes: ["Early warning heat index alert", "7-day battery life on coin cell", "Waterproof ergonomic wrist strap"]
  },
  {
    id: 4,
    sdg: 3,
    sdgName: "Good Health & Well-being",
    track: "Healthcare Delivery",
    title: "Low-Cost Modular Prosthetic Arm with Adaptive Haptic Feedback",
    challenge: "Engineer a 3D-printable bionic upper-limb prosthesis utilizing surface electromyography (sEMG) with closed-loop vibrotactile grip feedback for rural amputees.",
    humanitarianContext: "Commercial myoelectric prosthetics cost tens of thousands of dollars, leaving low-income agricultural accident victims with non-functional cosmetic limbs.",
    beneficiaries: ["Rural amputees", "Occupational rehabilitation centers", "Disaster trauma survivors"],
    technologies: ["Dual-channel sEMG", "Coreless DC Servos", "3D Printed PETG", "Micro-ROS", "Haptic Motors"],
    workshopDomains: [1, 2, 3, 5, 6],
    outcomes: ["Sub-$100 production BOM", "5 distinct grasp modes", "Field repairable with standard hand tools"]
  },
  {
    id: 5,
    sdg: 6,
    sdgName: "Clean Water & Sanitation",
    track: "Water Security",
    title: "Solar-Driven Smart Electro-Coagulation Water Purifier",
    challenge: "Build an automated, low-power electrochemical water purification system that detects turbidity and heavy metals, self-regulates electrode polarity, and logs safe yield.",
    humanitarianContext: "High arsenic and fluoride levels in groundwater afflict tens of millions across deltaic and arid belts where chemical consumables are unavailable.",
    beneficiaries: ["Flood-prone village schools", "Displaced person settlements", "Coastal brackish communities"],
    technologies: ["Iron/Aluminum Electrodes", "Turbidity Sensors", "Solar MPPT Controller", "Offline PWA Logger"],
    workshopDomains: [3, 5],
    outcomes: ["99% pathogen and heavy metal reduction", "Self-cleaning alternating current cycle", "200L/day off-grid throughput"]
  },
  {
    id: 6,
    sdg: 6,
    sdgName: "Clean Water & Sanitation",
    track: "Water Security",
    title: "AI Edge Spectrometer for Instant Coliform & Pathogen Detection",
    challenge: "Design a portable optical fluorescence sensor module that detects microbial contamination and sewage leakage in drinking water sources in under 15 minutes.",
    humanitarianContext: "Standard laboratory bacterial culture tests require 24 to 48 hours, during which waterborne cholera and typhoid outbreaks propagate unchecked.",
    beneficiaries: ["Panchayat water monitors", "Disaster rapid-response teams", "Public health inspectors"],
    technologies: ["UV LED Fluorometry", "Edge AI Spectral Classifier", "Photodiode Array", "BLE Sync"],
    workshopDomains: [2, 3],
    outcomes: ["Coliform detection under 15 minutes", "Pocketable field chassis", "Geotagged hazard mapping"]
  },
  {
    id: 7,
    sdg: 6,
    sdgName: "Clean Water & Sanitation",
    track: "Water Security",
    title: "Autonomous Drone Payload for Aquatic Weed & Waste Skimming",
    challenge: "Fabricate an amphibious or tethered aquatic cleaning mechanism to clear invasive water hyacinth mats and floating debris clogging rural drainage canals.",
    humanitarianContext: "Invasive water hyacinths choke irrigation waterways, breed vector mosquitoes, and impede traditional fishing livelihoods across inland backwaters.",
    beneficiaries: ["Canal management committees", "Traditional fishermen", "Wetland conservationists"],
    technologies: ["Catamaran Hull", "Mesh Conveyor", "Solar Float", "Remote Teleoperation", "GIS Canal Mapper"],
    workshopDomains: [1, 3, 5],
    outcomes: ["50 kg/hour debris clearing rate", "Autonomous waypoint pathfinding", "Zero fossil-fuel propulsion"]
  },
  {
    id: 8,
    sdg: 7,
    sdgName: "Affordable & Clean Energy",
    track: "Renewable Energy Access",
    title: "Decentralized Peer-to-Peer Microgrid Energy Broker",
    challenge: "Create a tamper-resistant hardware meter and local ledger enabling solar-electrified households to trade surplus DC battery energy with un-electrified neighbors without internet.",
    humanitarianContext: "Fragmented rooftop solar installations waste peak midday energy while adjacent energy-poor households remain in the dark due to missing transmission grids.",
    beneficiaries: ["Off-grid island villages", "Tribal settlement clusters", "Informal urban settlements"],
    technologies: ["Bidirectional DC-DC Converter", "LoRa Mesh Ledger", "Current Sensing Shunt", "OLED Smart Meter"],
    workshopDomains: [1, 2, 3, 4, 5],
    outcomes: ["Sub-watt metering accuracy", "Autonomous offline peer billing", "Overcurrent load-shedding safety"]
  },
  {
    id: 9,
    sdg: 7,
    sdgName: "Affordable & Clean Energy",
    track: "Renewable Energy Access",
    title: "Predictive Biomass Gasifier Optimizer for Rural Micro-Enterprises",
    challenge: "Develop an automated air-to-fuel ratio controller and thermal sensor array that prevents tar buildup and maximizes clean producer gas yield from agricultural waste.",
    humanitarianContext: "Small rural mills and drying units burn biomass inefficiently, emitting hazardous polycyclic aromatic hydrocarbons and wasting 60% of available thermal energy.",
    beneficiaries: ["Agro-processing co-operatives", "Rural flour and oil expeller mills", "Remote farmsteads"],
    technologies: ["K-type Thermocouples", "Stepper Damper Actuator", "Edge AI Combustion Model", "CO/CO2 Sensor"],
    workshopDomains: [1, 2, 3, 4, 5],
    outcomes: ["35% thermal efficiency boost", "Continuous low-emission combustion", "Automated grate ash shaker"]
  },
  {
    id: 10,
    sdg: 7,
    sdgName: "Affordable & Clean Energy",
    track: "Renewable Energy Access",
    title: "Second-Life EV Battery Health Scanner & Balancing Station",
    challenge: "Build a diagnostic tester that evaluates discarded two-wheeler lithium battery cells, classifies degradation states via EIS, and reconfigures them into affordable home UPS units.",
    humanitarianContext: "Thousands of retired EV battery packs enter scrapyards prematurely while renewable community shelters cannot afford new lithium storage systems.",
    beneficiaries: ["Rural electronics repair technicians", "Community emergency shelters", "Off-grid micro-enterprises"],
    technologies: ["Electrochemical Impedance Spectroscopy", "Active Cell Balancer", "ESP32", "Thermal Imager"],
    workshopDomains: [2, 3, 4, 6],
    outcomes: ["Accurate State of Health (SOH) grading", "Active thermal runaway abort", "Modular scalable stack"]
  },
  {
    id: 11,
    sdg: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    track: "Resilient Infrastructure",
    title: "Post-Disaster Self-Healing LoRa Mesh Communication Pods",
    challenge: "Engineer battery-backed, deployable wireless mesh beacons that establish local emergency messaging, family reunion check-ins, and supply dispatch across damaged flood zones.",
    humanitarianContext: "When extreme cyclonic floods or landslides down cellular towers and power lines, civil defense teams lose communication with cut-off hamlets for days.",
    beneficiaries: ["National Disaster Response teams", "Stranded citizen clusters", "Local emergency control rooms"],
    technologies: ["SX1262 LoRa Transceiver", "ESP32", "LiFePO4 Solar Pack", "Mesh Retransmission Protocol", "PWA"],
    workshopDomains: [1, 3, 4],
    outcomes: ["15 km line-of-sight hopping range", "72-hour zero-sunlight autonomous uptime", "Zero-install browser app"]
  },
  {
    id: 12,
    sdg: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    track: "Resilient Infrastructure",
    title: "Acoustic & Vibration Structural Health Monitor for Rural Bridges",
    challenge: "Design a low-cost, clamp-on sensor node that measures natural frequency shifts and acoustic micro-fractures in aging culverts, footbridges, and mountain retaining walls.",
    humanitarianContext: "Monsoon river surges routinely undermine rural masonry bridges, leading to catastrophic collapses during morning commuter and school hours.",
    beneficiaries: ["District public works departments", "Rural transport authorities", "Isolated river communities"],
    technologies: ["Piezoelectric Accelerometer", "MEMS Vibration Sensor", "Edge FFT Analysis", "Solar Harvester"],
    workshopDomains: [1, 2, 3, 4, 5],
    outcomes: ["Real-time structural resonance alerts", "Years-long battery deployment", "Continuous geotechnical logging"]
  },
  {
    id: 13,
    sdg: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    track: "Resilient Infrastructure",
    title: "Cold-Formed Modular Emergency Shelter with Rapid Assembly Latches",
    challenge: "Create a digital blueprint and open-source CNC-cut latching system for insulated, hurricane-resistant transitional shelters assembled in under 4 hours without heavy machinery.",
    humanitarianContext: "Tarpaulin tents degrade within weeks after cyclones, exposing displaced families to monsoon floods, vector illnesses, and extreme temperature swings.",
    beneficiaries: ["Disaster relief agencies", "Refugee coordination committees", "Post-flood rehabilitation units"],
    technologies: ["Parametric CAD", "CNC Router Machining", "Corrugated Polypropylene", "Interlocking Cam Clamps"],
    workshopDomains: [1, 2, 3, 6],
    outcomes: ["Assembly time under 4 hours", "120 km/h wind resistance rating", "Flat-pack transit efficiency"]
  },
  {
    id: 14,
    sdg: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    track: "Resilient Infrastructure",
    title: "Non-Destructive Concrete Salinity & Rebar Corrosion Tester",
    challenge: "Develop an affordable capacitive and eddy-current probe for coastal civil masons to evaluate seawater infiltration and hidden rust expansion in public housing pillars.",
    humanitarianContext: "Coastal schools and fishing village tenements suffer premature structural spalling and ceiling collapses caused by saline groundwater exposure.",
    beneficiaries: ["Village masons", "Coastal housing societies", "Local infrastructure auditors"],
    technologies: ["Eddy Current Induction", "Galvanostatic Pulse Sensing", "Bluetooth Handheld", "Android Diagnostic UI"],
    workshopDomains: [3, 4, 5],
    outcomes: ["Instant rebar corrosion depth readout", "Non-destructive surface testing", "Color-coded risk indicator"]
  },
  {
    id: 15,
    sdg: 11,
    sdgName: "Sustainable Cities & Communities",
    track: "Community Urban Resilience",
    title: "Hyperlocal Urban Heat Island & Air Quality Mapping Fleet",
    challenge: "Equip municipal public transport buses and rickshaws with rugged telemetry boxes that log temperature, humidity, PM2.5, and VOCs at street-level resolution.",
    humanitarianContext: "Official rooftop weather stations overlook micro-climatic heat pockets and suffocating particulate traps in high-density informal urban alleys.",
    beneficiaries: ["Urban planning municipal boards", "Vulnerable urban dwellers", "Respiratory illness clinics"],
    technologies: ["Plantower PM Sensor", "GPS Logger", "Cellular/Wi-Fi Auto-Offload", "GIS Heat Map Engine"],
    workshopDomains: [1, 3, 6],
    outcomes: ["5-meter street-level resolution", "Real-time municipal alert dashboard", "Passive vehicular power feed"]
  },
  {
    id: 16,
    sdg: 11,
    sdgName: "Sustainable Cities & Communities",
    track: "Community Urban Resilience",
    title: "Smart Stormwater Drain Blockage Early Warning Telemetry",
    challenge: "Engineer an intrinsically safe ultrasonic and flow velocity sensor grid placed in covered urban storm drains that detects clandestine garbage damming before cloudbursts.",
    humanitarianContext: "Flash urban flooding is aggravated by sudden choke points in underground conduits blocked by plastic refuse and construction debris.",
    beneficiaries: ["City drainage maintenance crews", "Low-lying neighborhood associations", "Emergency first responders"],
    technologies: ["Ultrasonic Level Sensor", "Submersible Flowmeter", "NB-IoT / LoRaWAN", "Corrosion-resistant Housing"],
    workshopDomains: [1, 3, 4],
    outcomes: ["Pre-emptive overflow dispatch warnings", "Methane safety compliance", "Map-integrated blockage points"]
  },
  {
    id: 17,
    sdg: 11,
    sdgName: "Sustainable Cities & Communities",
    track: "Community Urban Resilience",
    title: "Accessible Assistive Navigation for Low-Vision Transit Users",
    challenge: "Develop an ultra-wideband (UWB) and computer-vision tactile guidance cane that detects overhead obstacles, open utility trenches, and announces bus route arrivals.",
    humanitarianContext: "Pedestrian infrastructure in rapid growth cities contains hazardous open trenches, irregular paving stones, and unmarked street vendors.",
    beneficiaries: ["Visually impaired citizens", "Elderly commuters", "Accessibility advocacy councils"],
    technologies: ["UWB Indoor Ranging", "Monocular Depth AI", "Voice Audio Prompts", "Haptic Handle Actuator"],
    workshopDomains: [2, 3, 6],
    outcomes: ["10 cm obstacle location accuracy", "Under-500g ergonomic balance", "Offline spoken obstacle warnings"]
  },
  {
    id: 18,
    sdg: 11,
    sdgName: "Sustainable Cities & Communities",
    track: "Community Urban Resilience",
    title: "Decentralized Wet-Waste Biogas Digester Telemetry & Safety Valve",
    challenge: "Build an automated gas-flow and pressure safety management module for community-scale anaerobic food waste digesters installed in residential apartment blocks.",
    humanitarianContext: "Community biogas initiatives frequently fail due to uncontrolled acidification, gas leaks, and user anxiety regarding flammable buildup.",
    beneficiaries: ["Apartment resident welfare bodies", "Urban compost collectives", "Community kitchen operators"],
    technologies: ["MQ-4 Methane Sensor", "Solenoid Cutoff Valve", "pH Monitoring Probe", "Buzzer + App Push Alert"],
    workshopDomains: [1, 2, 3, 4, 6],
    outcomes: ["Automatic fail-safe leak shutoff", "Methane production yield tracking", "Low maintenance design"]
  },
  {
    id: 19,
    sdg: 13,
    sdgName: "Climate Action",
    track: "Climate & Hazard Mitigation",
    title: "Geotechnical Slope Displacement Early Warning for Landslide Belts",
    challenge: "Deploy multi-depth extensometers and soil pore-water pressure sensors that detect sub-surface creep along vulnerable hillside road embankments during heavy rain.",
    humanitarianContext: "Unheralded hillside mudslips sweep away highland dwellings and block critical lifeline roads during intense monsoon precipitation spells.",
    beneficiaries: ["Highland plantation settlements", "Hill highway travelers", "Disaster management authorities"],
    technologies: ["Tensiometer Sensor", "Rotary Extensometer", "Solar-Powered Mesh", "Audible Siren Tower"],
    workshopDomains: [3],
    outcomes: ["6-hour pre-slip evacuation notice", "Dual sirens and SMS dispatch", "Resistant to rockfall damage"]
  },
  {
    id: 20,
    sdg: 13,
    sdgName: "Climate Action",
    track: "Climate & Hazard Mitigation",
    title: "Off-Grid Flash-Flood River Hydrometry Station with Drone Verification",
    challenge: "Create a solar, non-contact radar hydrometry pole that measures upstream river gauge velocity and dispatches a tethered drone to verify dam backflow surges.",
    humanitarianContext: "Mountain flash floods reach valley settlements within 45 minutes; legacy staff gauges require manual reading at personal peril during storms.",
    beneficiaries: ["Downstream riparian villages", "Dam spillway operators", "Fisher community rescue clusters"],
    technologies: ["24GHz Radar Level Sensor", "Edge AI Flow Velocity", "Autonomous Drone Release", "LoRa Satellite Relay"],
    workshopDomains: [1, 2, 3, 4, 5, 6],
    outcomes: ["Millimeter water-rise tracking", "Camera verification of debris block", "100% off-grid reliability"]
  },
  {
    id: 21,
    sdg: 13,
    sdgName: "Climate Action",
    track: "Climate & Hazard Mitigation",
    title: "Hyperlocal Agro-Weather Station for Vulnerable Smallholder Farmers",
    challenge: "Engineer a durable sub-$50 weather station measuring soil moisture, leaf wetness, wind gust, and solar irradiance to advise precision drip schedules and fungal risk.",
    humanitarianContext: "Erratic climate patterns trigger devastating pest outbreaks and crop desiccations among smallholder farmers relying on regional weather broadcasts.",
    beneficiaries: ["Smallholder farming families", "Agricultural extension officers", "Rural farmer producer groups"],
    technologies: ["Anemometer Pulse Counter", "Capacitive Soil Probe", "Optical Rain Gauge", "Voice IVR Gateway"],
    workshopDomains: [1, 2, 3, 4, 6],
    outcomes: ["Sub-$50 BOM fabrication", "Micro-climate pest forecasting", "Local regional language audio alerts"]
  },
  {
    id: 22,
    sdg: 13,
    sdgName: "Climate Action",
    track: "Climate & Hazard Mitigation",
    title: "Coastal Saline Intrusion Borewell Telemetry & Reverse Osmosis Safeguard",
    challenge: "Build an automated continuous electrical conductivity logging probe for drinking borewells situated within 2 km of coastal sea walls.",
    humanitarianContext: "Rising sea levels and over-extraction draw saline sea wedges into freshwater aquifers, rendering drinking water unpotable for coastal fishing villages.",
    beneficiaries: ["Coastal village panchayats", "Public water supply schemes", "School drinking water boards"],
    technologies: ["Toroidal Conductivity Sensor", "Submersible Sealed Enclosure", "NB-IoT", "Relay Valve Gate"],
    workshopDomains: [2, 3, 4],
    outcomes: ["Automated pump shutoff on salinity spike", "Continuous salinity trend logging", "Sub-surface durability"]
  },
  {
    id: 23,
    sdg: 15,
    sdgName: "Life on Land",
    track: "Ecosystems & Biodiversity",
    title: "Acoustic Forest Fire & Poaching Gunshot Triangulation Pods",
    challenge: "Design solar tree-canopy pods running edge sound-classifiers to identify chainsaw whines, gunshots, and fire crackles, calculating coordinate bearings via TDoA.",
    humanitarianContext: "Illegal logging, poaching, and uncontained forest edge fires destroy indigenous sanctuaries before rangers can detect distant canopy smoke.",
    beneficiaries: ["Forest range officers", "Indigenous eco-guards", "Wildlife conservation reserves"],
    technologies: ["Directional Mic Array", "TDoA Time-Sync", "Edge CNN Classifier", "Tree Strap Enclosure"],
    workshopDomains: [3, 4, 5],
    outcomes: ["1 km acoustic detection radius", "Instant coordinate dispatch via LoRa", "Minimal canopy light solar harvesting"]
  },
  {
    id: 24,
    sdg: 15,
    sdgName: "Life on Land",
    track: "Ecosystems & Biodiversity",
    title: "Non-Lethal Infrared Human-Elephant Conflict Early Warning Fence",
    challenge: "Construct an edge vision and seismic vibration tripwire along forest boundaries that differentiates wild elephants from cattle and triggers benign strobe/audio deterrents.",
    humanitarianContext: "Border agricultural communities experience fatal nighttime elephant encounters and retaliatory electrocutions when herds forage on perimeter crops.",
    beneficiaries: ["Forest perimeter farmers", "Wildlife sanctuary staff", "Highland estate workers"],
    technologies: ["Geophone Seismic Sensor", "Thermal Edge AI Camera", "Solar Infrasonic Strobe", "GSM Warning Siren"],
    workshopDomains: [1, 2, 3, 4, 5, 6],
    outcomes: ["Zero false alarms on small livestock", "Pre-emptive village loudspeaker alerts", "Non-injurious deterrence"]
  },
  {
    id: 25,
    sdg: 15,
    sdgName: "Life on Land",
    track: "Ecosystems & Biodiversity",
    title: "Autonomous Mangrove Seedling Dispenser Drone for Coastal Defense",
    challenge: "Fabricate a lightweight payload release drone attachment that plants encapsulated mangrove propagules into muddy tidal intertidal mudflats inaccessible by foot.",
    humanitarianContext: "Tidal surges continuously erode deforested coastlines, but human planting in deep tidal silt is hazardous, exhausting, and spatially constrained.",
    beneficiaries: ["Coastal ecosystem restoration teams", "Bio-shield village defense groups", "Marine park authorities"],
    technologies: ["Pneumatic Seed Dropper", "RTK GPS Precision", "Waterproof Enclosure", "Flight Path Optimizer"],
    workshopDomains: [1, 3, 5, 6],
    outcomes: ["500 mangrove pods planted/hour", "Precision intertidal mapping", "Low-cost pneumatic launcher"]
  }
];

const EVALUATION_RUBRICS = {
  phase1: {
    title: "Phase 1: Online Idea Hack",
    tagline: "Shortlisting Gate: Qualifies teams for HackTank & Mentorship",
    criteria: [
      { name: "Problem Validation & Field Empathy", weight: "25%", description: "Clarity of the targeted beneficiary community, evidence of genuine gap analysis, and understanding of field constraints." },
      { name: "SDG Alignment & Humanitarian Impact", weight: "25%", description: "Direct relevance to chosen SDG track and measurable humanitarian outcome potential." },
      { name: "Technical Feasibility & System Architecture", weight: "25%", description: "Pragmatic technical proposal integrating physical telemetry, edge computing, and offline resilience." },
      { name: "Ethics, Safety & Deployment Feasibility", weight: "25%", description: "Anticipation of ethical risks, data sovereignty, and environmental durability." }
    ]
  },
  phase2: {
    title: "Phase 2: HackTank Pitch",
    tagline: "Finalist Gate: Top teams earn seats in the 3-day In-Person Tech-a-thon",
    criteria: [
      { name: "Stakeholder Mapping & Contextual Rigor", weight: "25%", description: "Demonstration of feedback loops from assigned mentors and local stakeholder empathy." },
      { name: "Architectural Blueprint & Cyber-Physical Design", weight: "25%", description: "Interfacing between workshop domains (sensors, local compute, fabrication, software)." },
      { name: "Prototyping Roadmap & BOM Realism", weight: "25%", description: "Bill of materials feasibility, hardware component availability, and 36-hour sprint milestones." },
      { name: "Sustainability & Post-Hack Pathway", weight: "25%", description: "Viability of continuous community deployment, maintenance costs, and open hardware approach." }
    ]
  },
  phase3: {
    title: "Phase 3: Final Hack & Expo",
    tagline: "The Grand Finale: 36-hour sprint culminating in live jury defense",
    criteria: [
      { name: "Functional Cyber-Physical Prototype", weight: "35%", description: "Working hardware/software demonstration under simulated field adversity conditions." },
      { name: "Humanitarian Learning Report (BrainStorm Round)", weight: "25%", description: "Critical reflection on humanitarian learnings, ethics, workshop knowledge transfer, and volunteer pathways." },
      { name: "Usability in Constrained Environments", weight: "20%", description: "Zero-cloud survivability, battery efficiency, and intuitive UI for non-technical users." },
      { name: "Live Demo, Technical Defense & Team Cohesion", weight: "20%", description: "Quality of live stress testing, response to jury cross-examination, and collaborative defense." }
    ]
  }
};

const SCHEDULE_DATA = [
  {
    day: "Day 1",
    date: "Friday",
    title: "Arrival, Foundation & Hack Kickoff",
    events: [
      { time: "09:00 AM – 10:30 AM", title: "Registration & Hardware Kit Distribution", desc: "Team check-in, credential issuance, component inspection and desk allotment." },
      { time: "10:30 AM – 11:30 AM", title: "Inaugural Ceremony & IEEE HTB Keynote", desc: "Welcome address by IEEE SPS Kerala Chapter and opening keynote on humanitarian technology pathways." },
      { time: "11:45 AM – 01:15 PM", title: "Workshop Set A — Session 1 (GIS & Spatial Telemetry)", desc: "1.5 hrs intensive session covering geospatial mapping, disaster layer caching, and GPS feeds." },
      { time: "01:15 PM – 02:15 PM", title: "Networking Lunch", desc: "Shared meal with mentors and organizing committee." },
      { time: "02:15 PM – 03:45 PM", title: "Workshop Set A — Session 2 (Offline-First Architectures)", desc: "1.5 hrs session on local-first data sync, CRDTs, and BLE/LoRa mesh payloads." },
      { time: "04:00 PM – 05:00 PM", title: "IEEE HTB Events Committee Breakout", desc: "Exposure to EPICS in IEEE, SIGHT project grants, and humanitarian tech volunteer careers." },
      { time: "05:30 PM – 08:30 PM", title: "Mentor Networking Night & Table Rotations", desc: "SDG-themed table rotations with industry, academic, and humanitarian domain mentors (25-min rounds)." },
      { time: "08:30 PM – 09:30 PM", title: "Community Dinner & Social Mixer", desc: "Informal interactions, music, and team strategy discussions." },
      { time: "11:30 PM – Midnight", title: "Pre-Sprint Briefing & Lab Rules", desc: "Final safety protocols, emergency stops, component inventory check." },
      { time: "12:00 Midnight (Sharp)", title: "🚀 36-Hour Continuous Hack Sprint Kickoff", desc: "Hack clocks start! Clocks run continuously without stopping for meals." }
    ]
  },
  {
    day: "Day 2",
    date: "Saturday",
    title: "Deep Building, Hands-On Labs & Mentor Audits",
    events: [
      { time: "08:00 AM – 09:00 AM", title: "Breakfast on the Move", desc: "Continuous sprint continues uninterrupted." },
      { time: "09:30 AM – 01:00 PM", title: "Workshop Set B — Hands-On Lab Part 1 (Embedded & Edge AI)", desc: "3.5 hrs hands-on laboratory session interfacing sensors, flash burning, and edge model inference." },
      { time: "01:00 PM – 02:00 PM", title: "Working Lunch", desc: "Lunch delivered to workstations; hack clock keeps running." },
      { time: "02:00 PM – 04:00 PM", title: "Workshop Set B — Hands-On Lab Part 2 (Hardware Fab & Robotics)", desc: "2.0 hrs rapid fabrication lab: 3D printing queue, laser cutting, and motor controller tuning." },
      { time: "04:30 PM – 06:30 PM", title: "Mid-Sprint Checkpoint & Red-Team Audit", desc: "Dual technical + humanitarian mentors inspect progress, test fail-safes, and course-correct prototypes." },
      { time: "07:00 PM – 09:00 PM", title: "BrainStorm Round & Humanitarian Report Writing", desc: "Teams work on their Humanitarian Learning Report (contributing 20–25% of final score)." },
      { time: "09:00 PM – 10:00 PM", title: "Night Energy Dinner & Live Music Break", desc: "Acoustic music session, refreshments, and caffeine replenishment." },
      { time: "10:00 PM – Dawn", title: "Overnight Prototyping & Stress Testing", desc: "Continuous building with round-the-clock mentor and fabrication support." }
    ]
  },
  {
    day: "Day 3",
    date: "Sunday",
    title: "Sprint Finish, Grand Jury Defense & Valedictory",
    events: [
      { time: "08:00 AM – 09:00 AM", title: "Sunrise Breakfast", desc: "Final sprint hours begin." },
      { time: "09:00 AM – 11:30 AM", title: "Final Integration & Documentation Polish", desc: "Packaging hardware enclosures, pushing final code commits, and testing live demos." },
      { time: "12:00 Noon (Sharp)", title: "🛑 HACK SPRINT ENDS — Hard Code & Hardware Freeze", desc: "All 36 continuous hack hours concluded. System lock." },
      { time: "12:00 PM – 01:00 PM", title: "Lunch & Expo Booth Setup", desc: "Teams set up demonstration tables, banner cards, and live hardware rigs." },
      { time: "01:00 PM – 03:00 PM", title: "Grand Jury Demonstration & Defense Expo", desc: "Jury walkthrough, adversarial testing, live environmental stress-testing, and Q&A defense." },
      { time: "03:15 PM – 04:15 PM", title: "Valedictory Ceremony, IEEE SPS Awards & Closing", desc: "Announcement of winners, track champions, citation honors, and mentor acknowledgements." },
      { time: "04:15 PM", title: "Programme Concludes & High Tea", desc: "Photos, community farewell, and safe journey homeward." }
    ]
  }
];

const ORGANIZERS = [
  {
    name: "Dr. Arun M.",
    role: "General Chair",
    org: "IEEE SPS Kerala Chapter",
    bio: "Signal processing researcher & humanitarian technology advocate with 15+ years empowering student-led innovation.",
    badgeColor: "#F7C638",
    avatar: "assets/images/organizer-1.svg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Reshma Suresh",
    role: "Programme Director",
    org: "MOSAIC Core Lead",
    bio: "Cyber-physical systems engineer. Passionate about women in engineering leadership and disaster-resilient systems.",
    badgeColor: "#F16538",
    avatar: "assets/images/organizer-2.svg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Nikhil K. Philip",
    role: "Technical Tracks Lead",
    org: "Embedded Edge Specialist",
    bio: "Hardware architect specializing in ultra-low power LoRa telemetry and open digital fabrication for remote communities.",
    badgeColor: "#7DA379",
    avatar: "assets/images/organizer-3.svg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Ananya Pillai",
    role: "Humanitarian Mentorship Lead",
    org: "Public Health & Tech Policy",
    bio: "Bridging field epidemiology with engineering solutions. Curates the dual-mentor matching framework.",
    badgeColor: "#E84E38",
    avatar: "assets/images/organizer-4.svg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Vishnu Prasad",
    role: "Operations & Community Lead",
    org: "IEEE Kerala Section",
    bio: "Community builder, logistics wizard, and hackathon evangelist ensuring every participant thrives.",
    badgeColor: "#52ABA4",
    avatar: "assets/images/organizer-5.svg",
    twitter: "#",
    linkedin: "#"
  }
];

const FAQS = [
  {
    q: "Who can participate?",
    a: "The challenge is open nationally to undergraduate and postgraduate students, recent graduates, and early-career innovators across engineering, sciences, design, and humanities from recognized institutions."
  },
  {
    q: "How many members can a team have?",
    a: "Teams must consist of 2 to 4 members. Individual registrations are not accepted; you register as a cohesive team. The first listed member serves as Team Lead and primary contact."
  },
  {
    q: "Is IEEE membership required to participate?",
    a: "No. IEEE membership is not required for eligibility. However, participation fees are category-based: active IEEE members receive substantial fee concessions."
  },
  {
    q: "Is a female team member mandatory?",
    a: "Yes. In strict alignment with our diversity and equity policy, every participating team must include at least one female team member."
  },
  {
    q: "How are participation fees calculated?",
    a: "Fees are priced per participant, not as a flat team rate. The total fee for your team equals the sum of each individual member's category (e.g., IEEE SPS member, general IEEE member, or non-IEEE member). Mixed teams pay the accurate sum of their member categories."
  },
  {
    q: "How many phases are there?",
    a: "There are 3 structured phases: Phase 1 (Online Idea Hack), Phase 2 (HackTank Pitch & Mentorship), and Phase 3 (3-Day In-Person Offline Tech-a-thon)."
  },
  {
    q: "What happens after Phase 1?",
    a: "Teams with validated humanitarian problem statements and robust preliminary architectures are shortlisted into Phase 2, where each team is assigned two dedicated mentors (one technical and one humanitarian)."
  },
  {
    q: "What is HackTank?",
    a: "HackTank is the Phase 2 virtual qualification gate where shortlisted teams pitch their refined designs and field empathy to an expert panel of IEEE leaders, humanitarian practitioners, and industry specialists to earn a seat in the Phase 3 finale."
  },
  {
    q: "What happens during Phase 3?",
    a: "Phase 3 is an intensive 55-hour in-person tech-a-thon in Kerala featuring 8.5 hours of cyber-physical workshops across two sets, a 36-hour continuous hack sprint starting Friday midnight, hardware prototyping labs, and live jury stress testing."
  },
  {
    q: "How long is the final hack?",
    a: "The final hack sprint is exactly 36 continuous hours, beginning Friday at midnight and concluding Sunday at noon. Meals and mentorship happen without pausing the countdown clock."
  },
  {
    q: "What is the BrainStorm Round & Humanitarian Learning Report?",
    a: "Unlike typical hackathons that only inspect the final software demo, MOSAIC evaluates your humanitarian understanding. Teams produce a Humanitarian Learning Report covering community empathy, ethical constraints, workshop synthesis, and volunteer pathways, contributing 20–25% of the final score."
  },
  {
    q: "Where can teams see the problem statements?",
    a: "All 25 problem statements spanning 7 UN SDG tracks are cataloged on our dedicated Problem Statements page, complete with technology stacks, workshop mappings, and live keyword search."
  }
];

const LEGACY_DATA = {
  edition: "MOSAIC 1.0",
  venue: "NIT Calicut",
  year: "2024",
  description: "The inaugural 2024 edition at National Institute of Technology Calicut served as the proven proof-of-concept for this multi-phase humanitarian innovation format. Over 40 finalist teams built functional physical devices that directly solved real Kerala coastal and highland humanitarian challenges.",
  highlights: [
    { label: "Edition", value: "MOSAIC 1.0" },
    { label: "Location", value: "NIT Calicut, Kerala" },
    { label: "Format", value: "Multi-phase Idea Hack + 36h Finale" },
    { label: "Key Outcome", value: "4 deployable prototypes adopted by local community bodies" }
  ]
};
