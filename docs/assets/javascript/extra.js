(function () {
    // Begin async loading icon packs ASAP so they don't slow down the diagram rendering 
    const iconify_logos = fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));

    // Example of loading additional packs if needed
    const iconify_material = fetch('https://unpkg.com/@iconify-json/material-symbols@1/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_material_symbols_light = fetch('https://unpkg.com/@iconify-json/material-symbols-light@1.2.26/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_material_design = fetch('https://unpkg.com/@iconify-json/mdi@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_clarity = fetch('https://unpkg.com/@iconify-json/clarity@1.2.2/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_eos_icons = fetch('https://unpkg.com/@iconify-json/eos-icons@1.2.2/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_uil = fetch('https://unpkg.com/@iconify-json/uil@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_arcticons = fetch('https://unpkg.com/@iconify-json/arcticons@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_mdi = fetch('https://unpkg.com/@iconify-json/mdi@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_hugeicons = fetch('https://unpkg.com/@iconify-json/hugeicons@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_svgspinners = fetch('https://unpkg.com/@iconify-json/svg-spinners@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_lucide = fetch('https://unpkg.com/@iconify-json/lucide@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_mynaui = fetch('https://unpkg.com/@iconify-json/mynaui@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));
    const iconify_tabler = fetch('https://unpkg.com/@iconify-json/tabler@1.2.3/icons.json').then((res) => res.json())
        .catch(e => console.error("Failed to fetch Mermaid icon pack:", e));



        
    // Intercept Mermaid loading into the global scope so we can register
    // the icon packs before Mermaid is initialized is finalized by Material for MkDocs
    Object.defineProperty(window, 'mermaid', {
        configurable: true,
        set: async function (value) {
            delete window.mermaid;
            window.mermaid = value;

            try {
                value.registerIconPacks([
                    { name: 'logos', loader: () => iconify_logos },
                    { name: 'material-symbols', loader: () => iconify_material },
                    { name: 'material-symbols-light', loader: () => iconify_material_symbols_light },
                    { name: 'material-design', loader: () => iconify_material_design },
                    { name: 'clarity', loader: () => iconify_clarity },
                    { name: 'eos-icons', loader: () => iconify_eos_icons },
                    { name: 'uil', loader: () => iconify_uil },
                    { name: 'arcticons', loader: () => iconify_arcticons },
                    { name: 'mdi', loader: () => iconify_mdi },
                    { name: 'hugeicons', loader: () => iconify_hugeicons },
                    { name: 'svgspinners', loader: () => iconify_svgspinners },
                    { name: 'lucide', loader: () => iconify_lucide },
                    { name: 'mynaui', loader: () => iconify_mynaui },
                    { name: 'tabler', loader: () => iconify_tabler },
                ]);
            } catch (e) {
                console.error("Error registering Mermaid icon pack:", e);
            }
        }
    });
})();