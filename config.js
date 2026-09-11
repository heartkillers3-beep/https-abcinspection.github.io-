const SITE_CONFIG={
 company:{name:"S2 Global Inspection Group",shortName:"S2 GLOBAL",tagline:"Sustainable Solutions",description:"Independent inspection, supplier assurance, expediting and technical manpower solutions supporting projects, manufacturers and supply chains.",logo:"assets/logo/s2-global-logo.jpg"},
 contact:{email:"info@s2globalinspection.com",phone:"+91 XXXXX XXXXX",whatsapp:"",address:"India · Global Service Coverage",country:"India"},
 social:{linkedin:"#",youtube:"#",facebook:"#",instagram:"#"},
 branding:{primary:"#0B1F3A",secondary:"#123B63",accent:"#F2A900",light:"#F4F7FA"},
 services:{
  inspection:{title:"Inspection Services",items:[
   ["Third-Party Inspection","Independent inspection throughout procurement and manufacturing.","Pre-Production","Source Inspection","In-Process Inspection","Final Inspection","Pre-Shipment Inspection","Release Inspection","Witness & Hold Points","Manufacturing Surveillance"],
   ["Second-Party Inspection","Buyer, owner and client-representative inspection and surveillance.","Buyer Inspection","Owner Inspection","Client Representative","Supplier Surveillance","Contractor Surveillance"],
   ["Surveillance Inspection","Focused oversight of manufacturing, quality and production activities.","Manufacturing Surveillance","Quality Surveillance","Production Surveillance","Site Surveillance","Supplier Surveillance","Project Monitoring"],
   ["In-Process Inspection","Stage-by-stage verification before the next manufacturing activity.","Material Verification","Dimensional Inspection","Fit-Up Inspection","Welding Inspection","NDT","Heat Treatment","Pressure Testing","Coating Inspection","Final Inspection"],
   ["Pre-Shipment Inspection","Final verification before release and shipment.","Quantity Verification","Visual Inspection","Dimensional Inspection","Packing","Marking","Documentation","Preservation","Loading","Shipment Readiness"]
  ]},
  vendor:{title:"Vendor & Supplier Assurance",items:[
   ["Technical Supplier Assessment (TSA)","Structured assessment of supplier technical and manufacturing capability.","Technical Capability","Manufacturing Capability","Quality Capability","Engineering Capability","Production Capacity","Personnel Competency","Equipment & Facility","Welding Capability","NDT Capability","Documentation Capability"],
   ["Supplier QA/QC Inspection","Quality oversight from approved drawings through final documentation.","Supplier Quality Surveillance","QMS Review","ITP Review","Quality Plan","Manufacturing Inspection","NCR Follow-up","Corrective Action","Quality Documentation"],
   ["Factory Capability Assessment","Assessment of facilities, resources, systems and production capacity.","Facility Assessment","Manufacturing Equipment","Testing & Inspection Facilities","Production Capacity","Storage & Material Control","Traceability","Calibration","Personnel Competency"],
   ["Manufacturing Capability Assessment","Review of production processes and readiness for specific purchase orders.","Production Capacity","Manufacturing Process","Equipment","Material Control","Welding","NDT","Inspection","Quality","Production Planning","Documentation"]
  ]},
  expediting:{title:"Expediting Services",items:[
   ["PO Expediting","Commercial and technical follow-up against purchase-order milestones.","PO Status","Engineering Status","Procurement Status","Supplier Follow-up","Critical Item Tracking"],
   ["Manufacturing Progress","Independent monitoring of supplier progress against approved schedules.","Production Monitoring","Schedule Review","Milestones","Progress Reporting","Delay Identification","Recovery Planning"],
   ["Material Procurement","Follow-up of raw material and long-lead-item readiness.","Raw Material","Ordering","Receipt","Availability","Long Lead Items","Critical Materials"],
   ["Documentation Expediting","Tracking of drawings, quality records and final vendor documentation.","Drawing Status","Document Register","MDR","Quality Documents","Inspection Documents","Vendor Data","Final Documents"],
   ["FAT Monitoring","Planning and monitoring of factory acceptance testing.","FAT Schedule","Preparation","Documentation","Witnessing","Punch List","Closure"],
   ["Shipment Readiness","Final release-readiness review before dispatch.","Final Inspection","Packing","Preservation","Shipping Documents","Release","Loading","Dispatch"]
  ]},
  manpower:{title:"Technical Manpower Supply",items:[
   ["Mechanical Inspectors","Static and mechanical equipment inspection support.","Static Equipment","Pressure Equipment","Mechanical Packages","General Mechanical Equipment"],
   ["Rotating Inspectors","Inspection of rotating machinery and packages.","Pumps","Compressors","Turbines","Motors","Gearboxes","Rotating Packages"],
   ["Welding Inspectors","Welding quality and documentation surveillance.","WPS/PQR","Welder Qualification","Fit-Up","Welding Surveillance","Visual Inspection","Documentation"],
   ["NDT Inspectors","NDT and material-verification personnel subject to project qualification requirements.","VT","PT","MT","UT","RT","PMI","Thickness","Hardness"],
   ["Coating Inspectors","Surface preparation, coating and environmental inspection.","Surface Preparation","DFT","Holiday Testing","Paint","Coating System","Environmental Conditions"],
   ["Electrical Inspectors","Electrical equipment inspection.","Transformers","Switchgear","MCC","Motors","Generators","Cables","Panels"],
   ["E&I Inspectors","Instrumentation and control-system inspection.","Instrumentation","Control Valves","Instrument Panels","Calibration","PLC","DCS","E&I Packages"],
   ["Structural Inspectors","Structural steel fabrication and erection inspection.","Structural Steel","Fabrication","Welding","Dimensional","Bolting","Coating","Erection"],
   ["QA/QC Engineers","Project and supplier quality-management support.","QA/QC Management","ITP","QCP","Quality Plans","NCR","MDR","Supplier Quality","Project Quality"],
   ["Welding Engineers","Welding engineering and procedure support.","WPS/PQR","Welding Procedure","Welding Qualification","Welding Engineering","Consumables","Repair"],
   ["Auditors","Quality, supplier and process audit personnel subject to actual qualifications.","ISO 9001","Supplier Audit","Vendor Audit","Manufacturing Audit","Technical Audit","Process Audit","Quality Audit"],
   ["Expeditors","Supplier follow-up and manufacturing progress monitoring.","PO Expediting","Supplier Follow-up","Manufacturing Progress","Documentation","FAT","Shipment"],
   ["HVAC Inspectors","HVAC equipment and installation inspection.","HVAC Equipment","AHU","Chillers","Pumps","Ducting","Ventilation","Testing & Commissioning"]
  ]}
 },
 industries:[
 ["Oil & Gas","Upstream, midstream and downstream inspection and technical assurance across the asset lifecycle."],
 ["Petrochemical","Technical inspection supporting process plants, refinery-related projects and equipment integrity."],
 ["Infrastructure","Structural, civil and MEP inspection for roads, bridges, buildings and public infrastructure."],
 ["Offshore","Inspection support for offshore platforms, marine equipment and offshore construction."],
 ["Power Generation (Thermal, Battery)","Inspection and technical assurance for thermal generation and battery energy storage assets."],
 ["Renewable (Solar & Wind)","Inspection support for solar and wind project equipment, manufacturing, transport and installation."],
 ["Steel & Structural Fabrication","Shop and site inspection of structural steel fabrication, welding, dimensional control and coating."],
 ["Pressure Equipment","Inspection of pressure vessels, boilers, heat exchangers and related equipment against applicable requirements."],
 ["Piping & Pipeline","Inspection of piping components, fabrication, welding, NDT, coating and testing."],
 ["Mining & Minerals","Inspection of mineral processing equipment, bulk handling systems and mine infrastructure."],
 ["Marine & Shipbuilding","Inspection support for vessels, shipbuilding, marine equipment and fabrication."],
 ["Manufacturing / Heavy Engineering","Vendor and third-party inspection of engineered equipment, machinery and industrial packages."],
 ["Water & Wastewater","Inspection support for treatment plants, pumping stations, pipelines and equipment."],
 ["HVAC & MEP","Inspection and quality assurance for HVAC, mechanical, electrical and plumbing systems."],
 ["Chemicals","Inspection support for chemical process plants, equipment and storage infrastructure."],
 ["Pharmaceuticals","Technical verification of process equipment and facility infrastructure, subject to project scope."],
 ["Food & Beverage","Equipment, process-line and packaging-system inspection."],
 ["Aerospace","Component and supplier verification support, subject to applicable scope."],
 ["Automotive","Supplier, component and manufacturing inspection across automotive supply chains."],
 ["Rail","Inspection support for rolling-stock components and rail infrastructure."],
 ["Ports & Logistics","Inspection of cargo-handling equipment, storage systems and port infrastructure."],
 ["Telecom","Inspection of telecom infrastructure equipment and installation works."],
 ["Nuclear","Technical inspection support for nuclear-related supply chains, subject to defined scope and applicable requirements."],
 ["Data Centers","Inspection of critical infrastructure equipment and facility systems."],
 ["Utilities","Inspection support for electricity, gas, water and utility infrastructure."],
 ["Defense","Inspection support for non-classified defense-sector supply-chain equipment, subject to scope."],
 ["Consumer Goods","Pre-shipment and quality inspection for consumer-goods manufacturers."]
 ],
 standards:["ISO 9001","ISO/IEC 17020","ISO/IEC 17021","ASME","API","AWS","AS/NZS Standards","EN Standards","ASTM Standards","IEC Standards","Project Specifications","Approved ITP / QCP Requirements"]
};