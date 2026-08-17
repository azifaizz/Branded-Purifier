import re

def update_specs(match):
    full_match = match.group(0)
    name = match.group(1)
    
    # Base specs for all RO systems
    specs = [
        '{ label: "Technology", value: "RO + UV + UF + TDS Control" }',
        '{ label: "Purification Capacity", value: "15 Litres/Hour" }',
        '{ label: "Membrane Type", value: "100 GPD Thin Film Composite" }',
        '{ label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" }',
        '{ label: "Input Voltage", value: "230V AC (50Hz)" }'
    ]
    
    # Conditional specs based on name
    if "COPPER" in name:
        specs.append('{ label: "Special Feature", value: "Active Copper Cartridge for added minerals" }')
    if "HOT" in name or "WAVE" in name:
        specs.append('{ label: "Dispenser Mode", value: "Instant Hot & Normal Water Delivery" }')
        specs.append('{ label: "Heating Element", value: "Built-in Stainless Steel Heater" }')
    if "ZINC" in name or "ALKALINE" in name:
        specs.append('{ label: "Special Feature", value: "Alkaline & Zinc enriched water" }')
        
    # Tank capacity
    if "PYOORON" in name or "SWAN" in name:
        specs.append('{ label: "Storage Tank", value: "8 Litres (Detachable SS 304 Tank)" }')
    elif "INDUSTRIAL" in name or "COMMERCIAL" in name:
        # Avoid putting domestic specs on industrial units
        specs = [
            '{ label: "Plant Capacity", value: "Depends on model (25 LPH to 2000 LPH)" }',
            '{ label: "Technology", value: "Industrial Reverse Osmosis" }',
            '{ label: "Pump Type", value: "High Pressure Vertical Multistage" }',
            '{ label: "Automation", value: "Fully Automatic Control Panel" }'
        ]
    else:
        specs.append('{ label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }')

    specs_str = "[\n      " + ",\n      ".join(specs) + "\n    ]"
    
    # Replace the empty specs array with the new one
    return re.sub(r'"specs":\s*\[\]', f'"specs": {specs_str}', full_match)

with open('src/data/catalog.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find objects in the PRODUCTS array, capturing the name, up to the specs field
pattern = r'\{\s*"slug":\s*"[^"]+",\s*"name":\s*"([^"]+)",(?:.|\n)*?"specs":\s*\[\]'

updated_content = re.sub(pattern, update_specs, content)

with open('src/data/catalog.ts', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated catalog.ts successfully.")
