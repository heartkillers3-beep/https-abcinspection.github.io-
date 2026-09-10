/* =========================================================
   SITE CONFIGURATION
   Central Website Control Panel
========================================================= */

const SITE_CONFIG = {

    /* =====================================================
       COMPANY
    ===================================================== */

    company: {

        name:
            "YOUR COMPANY NAME",

        shortName:
            "YOUR COMPANY",

        tagline:
            "Independent Inspection. Technical Assurance. Global Confidence.",

        description:
            "Independent inspection, vendor assurance, expediting and technical manpower services for industrial projects.",

        logo:
            "assets/logo/logo.png"

    },


    /* =====================================================
       CONTACT
    ===================================================== */

    contact: {

        email:
            "info@yourcompany.com",

        phone:
            "+91 XXXXX XXXXX",

        whatsapp:
            "+91XXXXXXXXXX",

        address:
            "Your Office Address",

        country:
            "India"

    },


    /* =====================================================
       SOCIAL MEDIA
    ===================================================== */

    social: {

        linkedin:
            "",

        youtube:
            "",

        facebook:
            "",

        instagram:
            ""

    },


    /* =====================================================
       BRANDING
    ===================================================== */

    branding: {

        primary:
            "#0B1F3A",

        secondary:
            "#123B63",

        accent:
            "#F2A900",

        light:
            "#F4F7FA"

    },


    /* =====================================================
       SERVICES
    ===================================================== */

    services: {


        /* =================================================
           INSPECTION
        ================================================= */

        inspection: {

            title:
                "Inspection",

            shortTitle:
                "Inspection Services",

            description:
                "Independent inspection and surveillance services across the industrial supply chain.",

            services: [

                {
                    title:
                        "Third Party Inspection",

                    description:
                        "Independent inspection activities performed against applicable project requirements.",

                    subServices: [

                        "Pre-Production Inspection",

                        "Source Inspection",

                        "In-Process Inspection",

                        "Final Inspection",

                        "Pre-Shipment Inspection",

                        "Release Inspection",

                        "Witness & Hold Point Inspection",

                        "Manufacturing Surveillance"

                    ]

                },


                {
                    title:
                        "Second Party Inspection",

                    description:
                        "Inspection and surveillance performed on behalf of buyers, owners, contractors or project stakeholders.",

                    subServices: [

                        "Buyer Inspection",

                        "Owner Inspection",

                        "Client Representative",

                        "Supplier Surveillance",

                        "Contractor Surveillance"

                    ]

                },


                {
                    title:
                        "Surveillance Inspection",

                    description:
                        "Planned surveillance of supplier manufacturing, quality and production activities.",

                    subServices: [

                        "Manufacturing Surveillance",

                        "Quality Surveillance",

                        "Production Surveillance",

                        "Site Surveillance",

                        "Supplier Surveillance",

                        "Project Surveillance"

                    ]

                },


                {
                    title:
                        "In-process Inspection",

                    description:
                        "Inspection at defined manufacturing and production stages.",

                    subServices: [

                        "Material Verification",

                        "Dimensional Inspection",

                        "Fit-Up Inspection",

                        "Welding Inspection",

                        "NDT Verification",

                        "Heat Treatment",

                        "Pressure Testing",

                        "Coating Inspection",

                        "Final Inspection"

                    ]

                },


                {
                    title:
                        "Pre-Shipment Inspection",

                    description:
                        "Final verification of equipment and materials before shipment.",

                    subServices: [

                        "Quantity Verification",

                        "Visual Inspection",

                        "Dimensional Verification",

                        "Packing Inspection",

                        "Marking Verification",

                        "Documentation Review",

                        "Preservation",

                        "Loading Inspection",

                        "Shipment Readiness"

                    ]

                }

            ]

        },


        /* =================================================
           VENDOR
        ================================================= */

        vendor: {

            title:
                "Vendor Assurance",

            shortTitle:
                "Vendor & Supplier Assurance",

            description:
                "Technical supplier assessment, factory capability and supplier QA/QC services.",

            services: [

                {
                    title:
                        "Technical Supplier Assessment",

                    description:
                        "Technical assessment of supplier capability and suitability for project requirements.",

                    subServices: [

                        "Technical Capability",

                        "Manufacturing Capability",

                        "Quality Capability",

                        "Engineering Capability",

                        "Production Capacity",

                        "Personnel Competency",

                        "Equipment & Facilities",

                        "Welding Capability",

                        "NDT Capability",

                        "Documentation Capability"

                    ]

                },


                {
                    title:
                        "Supplier QA/QC Inspection",

                    description:
                        "Independent review and surveillance of supplier quality systems and manufacturing activities.",

                    subServices: [

                        "Supplier Quality Surveillance",

                        "QMS Review",

                        "ITP Review",

                        "Quality Plan Review",

                        "Manufacturing Inspection",

                        "NCR Review",

                        "Corrective Action Follow-up",

                        "Quality Documentation"

                    ]

                },


                {
                    title:
                        "Factory Capability Assessment",

                    description:
                        "Assessment of factory facilities, equipment, resources and production capability.",

                    subServices: [

                        "Factory Facilities",

                        "Manufacturing Equipment",

                        "Testing & Inspection Facilities",

                        "Production Capacity",

                        "Storage & Material Control",

                        "Material Traceability",

                        "Calibration System",

                        "Personnel Competency"

                    ]

                },


                {
                    title:
                        "Manufacturing Capability Assessment",

                    description:
                        "Evaluation of manufacturing processes and the supplier's ability to meet specified requirements.",

                    subServices: [

                        "Production Capacity",

                        "Manufacturing Processes",

                        "Equipment Capability",

                        "Material Control",

                        "Welding Capability",

                        "NDT Capability",

                        "Inspection Capability",

                        "Quality Systems",

                        "Production Planning",

                        "Documentation"

                    ]

                }

            ]

        },


        /* =================================================
           EXPEDITING
        ================================================= */

        expediting: {

            title:
                "Expediting",

            shortTitle:
                "Supplier Expediting",

            description:
                "Professional supplier expediting and manufacturing progress monitoring.",

            services: [

                {
                    title:
                        "PO Expediting",

                    description:
                        "Monitoring purchase order progress and supplier commitments.",

                    subServices: [

                        "PO Status Monitoring",

                        "Engineering Status",

                        "Procurement Status",

                        "Supplier Follow-up",

                        "Critical Item Tracking"

                    ]

                },


                {
                    title:
                        "Manufacturing Progress",

                    description:
                        "Monitoring production progress against agreed schedules and milestones.",

                    subServices: [

                        "Production Monitoring",

                        "Manufacturing Schedule",

                        "Milestone Monitoring",

                        "Progress Reporting",

                        "Delay Identification",

                        "Recovery Planning"

                    ]

                },


                {
                    title:
                        "Material Procurement",

                    description:
                        "Monitoring raw material procurement, receipt and availability.",

                    subServices: [

                        "Raw Material Status",

                        "Material Ordering",

                        "Material Receipt",

                        "Material Availability",

                        "Long Lead Items",

                        "Critical Materials"

                    ]

                },


                {
                    title:
                        "Documentation",

                    description:
                        "Monitoring engineering, quality and final supplier documentation.",

                    subServices: [

                        "Drawing Status",

                        "Document Register",

                        "Manufacturing Data Record",

                        "Quality Documentation",

                        "Inspection Documentation",

                        "Vendor Data",

                        "Final Documentation"

                    ]

                },


                {
                    title:
                        "FAT Monitoring",

                    description:
                        "Monitoring preparation, execution and closure of factory acceptance testing.",

                    subServices: [

                        "FAT Schedule",

                        "FAT Preparation",

                        "FAT Documentation",

                        "FAT Witnessing",

                        "Punch List",

                        "Punch Closure"

                    ]

                },


                {
                    title:
                        "Shipment Readiness",

                    description:
                        "Final monitoring before equipment and materials are released for shipment.",

                    subServices: [

                        "Final Inspection",

                        "Packing",

                        "Preservation",

                        "Shipping Documentation",

                        "Release Status",

                        "Loading",

                        "Dispatch"

                    ]

                }

            ]

        },


        /* =================================================
           MANPOWER
        ================================================= */

        manpower: {

            title:
                "Technical Manpower Supply",

            shortTitle:
                "Technical Manpower",

            description:
                "Qualified technical inspection, QA/QC, auditing and expediting personnel.",

            services: [

                {
                    title:
                        "Mechanical Inspectors",

                    subServices: [

                        "Static Equipment",

                        "Pressure Equipment",

                        "Mechanical Packages",

                        "General Mechanical Equipment"

                    ]

                },


                {
                    title:
                        "Rotating Inspectors",

                    subServices: [

                        "Pumps",

                        "Compressors",

                        "Turbines",

                        "Motors",

                        "Gearboxes",

                        "Rotating Packages"

                    ]

                },


                {
                    title:
                        "Welding Inspectors",

                    subServices: [

                        "WPS / PQR Review",

                        "Welder Qualification",

                        "Fit-Up Inspection",

                        "Welding Surveillance",

                        "Visual Inspection",

                        "Welding Documentation"

                    ]

                },


                {
                    title:
                        "NDT Inspectors",

                    subServices: [

                        "Visual Testing",

                        "Penetrant Testing",

                        "Magnetic Testing",

                        "Ultrasonic Testing",

                        "Radiographic Testing",

                        "PMI",

                        "Thickness Measurement",

                        "Hardness Testing"

                    ]

                },


                {
                    title:
                        "Coating Inspectors",

                    subServices: [

                        "Surface Preparation",

                        "DFT Measurement",

                        "Holiday Testing",

                        "Paint Inspection",

                        "Coating Systems",

                        "Environmental Conditions"

                    ]

                },


                {
                    title:
                        "Electrical Inspectors",

                    subServices: [

                        "Transformers",

                        "Switchgear",

                        "MCC",

                        "Motors",

                        "Generators",

                        "Cables",

                        "Electrical Panels"

                    ]

                },


                {
                    title:
                        "E&I Inspectors",

                    subServices: [

                        "Instrumentation",

                        "Control Valves",

                        "Instrument Panels",

                        "Calibration",

                        "PLC",

                        "DCS",

                        "E&I Packages"

                    ]

                },


                {
                    title:
                        "Structural Inspectors",

                    subServices: [

                        "Structural Steel",

                        "Fabrication",

                        "Welding",

                        "Dimensional Inspection",

                        "Bolting",

                        "Coating",

                        "Erection"

                    ]

                },


                {
                    title:
                        "Surveillance Officers",

                    subServices: [

                        "Supplier Surveillance",

                        "Production Monitoring",

                        "Quality Surveillance",

                        "Project Monitoring"

                    ]

                },


                {
                    title:
                        "QA/QC Engineers",

                    subServices: [

                        "QA/QC Management",

                        "ITP",

                        "QCP",

                        "Quality Plans",

                        "NCR Management",

                        "MDR",

                        "Supplier Quality",

                        "Project Quality"

                    ]

                },


                {
                    title:
                        "Welding Engineers",

                    subServices: [

                        "WPS / PQR",

                        "Welding Procedures",

                        "Welder Qualification",

                        "Welding Engineering",

                        "Consumables",

                        "Repair Procedures"

                    ]

                },


                {
                    title:
                        "Auditors",

                    subServices: [

                        "ISO 9001 Audits",

                        "Supplier Audits",

                        "Vendor Audits",

                        "Manufacturing Audits",

                        "Technical Audits",

                        "Process Audits",

                        "Quality Audits"

                    ]

                },


                {
                    title:
                        "Expeditors",

                    subServices: [

                        "PO Expediting",

                        "Supplier Follow-up",

                        "Manufacturing Progress",

                        "Documentation",

                        "FAT",

                        "Shipment Monitoring"

                    ]

                },


                {
                    title:
                        "HVAC Inspectors",

                    subServices: [

                        "HVAC Equipment",

                        "AHU",

                        "Chillers",

                        "Pumps",

                        "Ducting",

                        "Ventilation",

                        "Testing & Commissioning"

                    ]

                }

            ]

        }

    },


    /* =====================================================
       INDUSTRIES
    ===================================================== */

    industries: [

        "Oil & Gas",

        "Petrochemical",

        "Refinery",

        "Power Generation",

        "Renewable Energy",

        "Infrastructure",

        "Construction",

        "Steel & Structural Fabrication",

        "Pressure Equipment",

        "Piping & Pipeline",

        "Mining & Minerals",

        "Marine & Shipbuilding",

        "Manufacturing",

        "Heavy Engineering",

        "Water & Wastewater",

        "HVAC & MEP"

    ],


    /* =====================================================
       PROJECT LIFECYCLE
    ===================================================== */

    lifecycle: [

        "Supplier Selection",

        "Procurement",

        "Manufacturing",

        "Inspection",

        "Testing & FAT",

        "Documentation",

        "Shipment"

    ],


    /* =====================================================
       STANDARDS
       Add only standards actually covered by your services
    ===================================================== */

    standards: [

        "ISO 9001",

        "ISO/IEC 17020",

        "ASME",

        "API",

        "AWS",

        "AS/NZS Standards",

        "EN Standards",

        "ASTM Standards",

        "IEC Standards",

        "Project Specifications"

    ],


    /* =====================================================
       WEBSITE SETTINGS
    ===================================================== */

    website: {

        language:
            "en",

        defaultCountry:
            "India",

        enableWhatsApp:
            true,

        enableSocialLinks:
            true,

        enableCertificateVerification:
            true

    }

};
