const navBarList = document.getElementById('navbar__list');
const mainHeader = document.querySelector('.main__hero h1');
const sections = document.querySelectorAll('section');
const s1Links = document.querySelectorAll('#section1 div blockquote a');
const internalCauses = document.getElementById('internal-causes');
const externalCauses = document.getElementById('external-causes');
const seeGraph = document.getElementById('see-graph');
const effects = document.querySelectorAll('.effects');
const effectDetails = document.getElementById('effect-details');
const ways = document.querySelectorAll('.way');
const waysContainer = document.querySelector('.ways-container');

/**
 * Used to set multiple element attributes.
 */
function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

/**
 * Set initial color to white then change it when item is selected.
 */
function changeEffectsColor(elm) {
    effects.forEach(element => {
        element.style.color = "#fff";
    });
    elm.style.color = "#afeeee";
}

// Style the main header
mainHeader.innerHTML = mainHeader.innerHTML
    .replace('O', '<img src="img/global-warming.png" />')
    .replace('ET', '<span style="color: #afeeee;">ET</span>');

// Highlight links of section 1 on hover
for (let link of s1Links) {
    link.style.cssText = "color: #fff; text-decoration-color: #98fb98; opacity: 0.75";

    link.addEventListener('mouseenter', function() {
        link.style.opacity = "1";
    });
    link.addEventListener('mouseleave', function() {
        link.style.opacity = "0.75";
    });
}

/**
 * Called on internalCauses e-listener.
 */
function showICauses() {
    // Create list elements and add them to a fragment
    let fragment = document.createDocumentFragment();

    let elm1 = document.createElement('li');
    elm1.textContent = "Ocean-atmosphere variability";
    fragment.appendChild(elm1);

    let elm2 = document.createElement('li');
    elm2.textContent = "Oscillations and cycles";
    fragment.appendChild(elm2);

    let elm3 = document.createElement('li');
    elm3.textContent = "Ocean current changes";
    fragment.appendChild(elm3);

    let elm4 = document.createElement('li');
    elm4.textContent = "Earth's life";
    fragment.appendChild(elm4);

    let iList = document.getElementById('i-list');
    // Toggle
    if (iList.innerHTML === "") {
        // Add iList
        iList.appendChild(fragment);
    } else {
        // Remove iList
        iList.innerHTML = "";
    }
}

/**
 * Called on externalCauses e-listener.
 */
function showECauses() {
    // Create list elements and add them to a fragment
    let fragment = document.createDocumentFragment();

    let elm1 = document.createElement('li');
    elm1.textContent = "Greenhouse gases";
    fragment.appendChild(elm1);

    let elm2 = document.createElement('li');
    elm2.textContent = "Orbital variations";
    fragment.appendChild(elm2);

    let elm3 = document.createElement('li');
    elm3.textContent = "Solar output";
    fragment.appendChild(elm3);

    let elm4 = document.createElement('li');
    elm4.textContent = "Volcanism";
    fragment.appendChild(elm4);

    let elm5 = document.createElement('li');
    elm5.textContent = "Plate tectonics";
    fragment.appendChild(elm5);

    let elm6 = document.createElement('li');
    elm6.textContent = "Other mechanisms";
    fragment.appendChild(elm6);

    let eList = document.getElementById('e-list');
    // Toggle
    if (eList.innerHTML === "") {
        // Add eList
        eList.appendChild(fragment);
    } else {
        // Remove eList
        eList.innerHTML = "";
    }
}

/**
 * Called on seeGraph e-listener.
 */
function displayGraph() {
    let s2Container = document.querySelector('#section2 .landing__container');
    // Hide seeGraph message
    seeGraph.style.display = "none";
    // Create elements and add them to a container
    let container = document.createElement('figure');

    let graph = document.createElement('img');
    setAttributes(graph, { "id": "graph-img", "src": "img/co2-graph.jpg" });
    container.appendChild(graph);

    let caption = document.createElement('figcaption');
    caption.textContent = "This graph, based on the comparison of atmospheric samples contained in ice cores and more recent direct measurements, provides evidence that atmospheric CO2 has increased since the Industrial Revolution. (Credit NASA)";
    container.appendChild(caption);

    let hideGraph = document.createElement('span');
    hideGraph.textContent = "...hide graph";
    hideGraph.setAttribute("style", "color:#cc1;text-decoration:underline;cursor:pointer");
    container.appendChild(hideGraph);

    // Add container to section 2
    s2Container.appendChild(container);
    // Remove container child when "...hide graph" is clicked
    hideGraph.addEventListener('click', function() {
        s2Container.removeChild(container);
        // Show seeGraph message
        seeGraph.style.display = "block";
    });
}

/**
 * Method used to control climate change effects list on click.
 */
function getEffectsDetails() {

    for (let effect of effects) {

        effect.addEventListener('click', function() {

            changeEffectsColor(this);

            // Get index
            let index = effect.dataset.indexNumber;

            switch (index) {
                case '1':
                    effectDetails.innerHTML = "";
                    let content1 = document.createElement('blockquote');
                    content1.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Vegetation";
                    content1.textContent = "A change in the type, distribution and coverage of vegetation may occur given a change in the climate. Some changes in climate may result in increased precipitation and warmth, resulting in improved plant growth and the subsequent sequestration of airborne CO2. The effects are expected to affect the rate of many natural cycles like plant litter decomposition rates. A gradual increase in warmth in a region will lead to earlier flowering and fruiting times, driving a change in the timing of life cycles of dependent organisms. Conversely, cold will cause plant bio-cycles to lag." +
                        "Larger, faster or more radical changes, however, may result in vegetation stress, rapid plant loss and desertification in certain circumstances. An example of this occurred during the Carboniferous Rainforest Collapse (CRC), an extinction event 300 million years ago. At this time vast rainforests covered the equatorial region of Europe and America. Climate change devastated these tropical rainforests, abruptly fragmenting the habitat into isolated 'islands' and causing the extinction of many plant and animal species.";
                    effectDetails.appendChild(content1);
                    break;
                case '2':
                    effectDetails.innerHTML = "";
                    let content2 = document.createElement('blockquote');
                    content2.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Wildlife";
                    content2.textContent = "One of the most important ways animals can deal with climatic change is migration to warmer or colder regions. On a longer timescale, evolution makes ecosystems including animals better adapted to a new climate. Rapid or large climate change can cause mass extinctions when creatures are stretched too far to be able to adapt.";
                    effectDetails.appendChild(content2);
                    break;
                case '3':
                    effectDetails.innerHTML = "";
                    let content3 = document.createElement('blockquote');
                    content3.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Humanity";
                    content3.textContent = "Collapses of past civilizations such as the Maya may be related to cycles of precipitation, especially drought, that in this example also correlates to the Western Hemisphere Warm Pool. Around 70 000 years ago the Toba supervolcano eruption created an especially cold period during the ice age, leading to a possible genetic bottleneck in human populations.";
                    effectDetails.appendChild(content3);
                    break;
                case '4':
                    effectDetails.innerHTML = "";
                    let content4 = document.createElement('blockquote');
                    content4.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Glaciers_and_ice_sheets";
                    content4.textContent = "Glaciers are considered among the most sensitive indicators of a changing climate. Their size is determined by a mass balance between snow input and melt output. As temperatures increase, glaciers retreat unless snow precipitation increases to make up for the additional melt. Glaciers grow and shrink due both to natural variability and external forcings. Variability in temperature, precipitation and hydrology can strongly determine the evolution of a glacier in a particular season." +
                        "The most significant climate processes since the middle to late Pliocene (approximately 3 million years ago) are the glacial and interglacial cycles. The present interglacial period (the Holocene) has lasted about 11,700 years. Shaped by orbital variations, responses such as the rise and fall of continental ice sheets and significant sea-level changes helped create the climate. Other changes, including Heinrich events, Dansgaard–Oeschger events and the Younger Dryas, however, illustrate how glacial variations may also influence climate without the orbital forcing.";
                    effectDetails.appendChild(content4);
                    break;
                case '5':
                    effectDetails.innerHTML = "";
                    let content5 = document.createElement('blockquote');
                    content5.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Sea_level_change";
                    content5.textContent = "During the Last Glacial Maximum, some 25,000 years ago, sea levels were roughly 130 m lower than today. The deglaciation afterwards was characterized by rapid sea level change. In the early Pliocene, global temperatures were 1–2˚C warmer than the present temperature, yet sea level was 15–25 meters higher than today.";
                    effectDetails.appendChild(content5);
                    break;
                case '6':
                    effectDetails.innerHTML = "";
                    let content6 = document.createElement('blockquote');
                    content6.cite = "https://en.wikipedia.org/wiki/Climate_variability_and_change#Sea_ice";
                    content6.textContent = "Sea ice plays an important role in Earth's climate as it affects the total amount of sunlight that is reflected away from the Earth. In the past, the Earth's oceans have been almost entirely covered by sea ice on a number of occasions, when the Earth was in a so-called Snowball Earth state, and completely ice-free in periods of warm climate. When there is a lot of sea ice present globally, especially in the tropics and subtropics, the climate is more sensitive to forcings as the ice–albedo feedback is very strong.";
                    effectDetails.appendChild(content6);
                    break;
                default:
                    effectDetails.innerHTML = "";
            }
        });
    }
}

/**
 * Method used to expand every grid cell with tips on how to fight climate change.
 */
function getWayContent() {

    for (let way of ways) {

        way.addEventListener('click', function() {

            let wayContent = document.createElement('div');
            wayContent.id = "way-content";

            let backBtn = document.createElement('img');
            setAttributes(backBtn, { "id": "nav-back", "src": "img/back_button.png" });
            wayContent.appendChild(backBtn);

            let paragraph = document.createElement('p');
            wayContent.appendChild(paragraph);

            waysContainer.prepend(wayContent);

            let entry = way.dataset.entry;

            switch (entry) {
                case 'a':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "What’s the single biggest way you can make an impact on global climate change? Talk to your friends and family, and make sure your representatives are making good decisions. By voicing your concerns—via social media or, better yet, directly to your elected officials—you send a message that you care about the warming world. Encourage Congress to enact new laws that limit carbon emissions and require polluters to pay for the emissions they produce. The main reason elected officials do anything difficult is because their constituents make them.";
                    break;
                case 'b':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Choose a utility company that generates at least half its power from wind or solar and has been certified by Green-e Energy, an organization that vets renewable energy options. If that isn’t possible for you, take a look at your electric bill; many utilities now list other ways to support renewable sources on their monthly statements and websites.";
                    break;
                case 'c':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Building heating and cooling are among the biggest uses of energy. Indeed, heating and air-conditioning account for almost half of home energy use. You can make your space more energy efficient by sealing drafts and ensuring it’s adequately insulated. You can also claim federal tax credits for many energy-efficiency home improvements.";
                    break;
                case 'd':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Since they were first implemented nationally in 1987, efficiency standards for dozens of appliances and products have kept 2.3 billion tons of carbon dioxide out of the air. That’s about the same amount as the annual carbon pollution coughed up by nearly 440 million cars. Energy efficiency is the lowest-cost way to reduce emissions. When shopping for refrigerators, washing machines, and other appliances, look for the Energy Star label. It will tell you which are the most efficient.";
                    break;
                case 'e':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Saving water reduces carbon pollution, too. That's because it takes a lot of energy to pump, heat, and treat your water. So take shorter showers, turn off the tap while brushing your teeth, and switch to WaterSense-labeled fixtures and appliances. The EPA estimates that if just one out of every 100 American homes were retrofitted with water-efficient fixtures, about 100 million kilowatt-hours of electricity per year would be saved—avoiding 80,000 tons of global warming pollution.";
                    break;
                case 'f':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Approximately 10 percent of U.S. energy use goes into growing, processing, packaging, and shipping food—about 40 percent of which just winds up in the landfill. If you’re wasting less food, you’re likely cutting down on energy consumption. And since livestock products are among the most resource-intensive to produce, eating meat-free meals can make a big difference, too.";
                    break;
                case 'g':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "LED lightbulbs use up to 80 percent less energy than conventional incandescents. They’re also cheaper in the long run: A 10-watt LED that replaces your traditional 60-watt bulb will save you $125 over the lightbulb’s life.";
                    break;
                case 'h':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Taken together, the outlets in your home are likely powering about 65 different devices—an average load for a home in the U.S. Audio and video devices, cordless vacuums and power tools, and other electronics use energy even when they're not charging. This 'idle load' across all U.S. households adds up to the output of 50 large power plants in the U.S. So don't leave fully charged devices plugged into your home's outlets, unplug rarely used devices or plug them into power strips and timers, and adjust your computers and monitors to automatically power down to the lowest power mode when not in use.";
                    break;
                case 'i':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Gas-smart cars, such as hybrids and fully electric vehicles, save fuel and money. And once all cars and light trucks meet 2025’s clean car standards, which means averaging 54.5 miles per gallon, they’ll be a mainstay. For good reason: Relative to a national fleet of vehicles that averaged only 28.3 miles per gallon in 2011, Americans will spend $80 billion less at the pump each year and cut their automotive emissions by half.";
                    break;
                case 'j':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "If all Americans kept their tires properly inflated, we could save 1.2 billion gallons of gas each year. A simple tune-up can boost miles per gallon anywhere from 4 percent to 40 percent, and a new air filter can get you a 10 percent boost.";
                    break;
                case 'k':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "Choosing to live in walkable smart-growth cities and towns with quality public transportation leads to less driving, less money spent on fuel, and less pollution in the air. Less frequent flying can make a big difference, too. Air transport is a major source of climate pollution. If you can take a train instead, do that.";
                    break;
                case 'l':
                    paragraph.innerHTML = "";
                    paragraph.textContent = "You can offset the carbon you produce by purchasing carbon offsets, which represent clean power that you can add to the nation’s energy grid in place of power from fossil fuels. But not all carbon offset companies are alike. Do your homework to find the best supplier.";
                    break;
                default:
                    paragraph.innerHTML = "";
            }

            backBtn.addEventListener('click', function() { waysContainer.removeChild(wayContent) });
        });
    }
}

/**
 * Highlight section when it's in viewport.
 */
function changeSectionState() {

    setTimeout(function() {

        for (let section of sections) {

            if (section.getBoundingClientRect().top + 200 < window.innerHeight &&
                section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
                section.classList.add('active-class');
            } else {
                section.classList.remove('active-class');
            }
        }
    }, 250);
}

// On scroll add active-class to each section
window.addEventListener('scroll', changeSectionState);

// On click expand/shrink 'Internal variability' list
internalCauses.addEventListener('click', showICauses);

// On click expand/shrink 'External climate forcing' list
externalCauses.addEventListener('click', showECauses);

// On click show statistics chart
seeGraph.addEventListener('click', displayGraph);

getEffectsDetails();
getWayContent();

// Building the navigation menu
let climateS = document.createElement('li');
let climateLink = document.createElement('a');
climateLink.textContent = "Climate";
climateLink.dataset.nav = "climate";
climateS.appendChild(climateLink);

let evidenceS = document.createElement('li');
let evidenceLink = document.createElement('a');
evidenceLink.textContent = "Evidence";
evidenceLink.dataset.nav = "evidence";
evidenceS.appendChild(evidenceLink);

let impactS = document.createElement('li');
let impactLink = document.createElement('a');
impactLink.textContent = "Impact";
impactLink.dataset.nav = "impact";
impactS.appendChild(impactLink);

let mitigationS = document.createElement('li');
let mitigationLink = document.createElement('a');
mitigationLink.textContent = "Mitigation";
mitigationLink.dataset.nav = "mitigation";
mitigationS.appendChild(mitigationLink);

navBarList.append(climateS, evidenceS, impactS, mitigationS);

document.querySelectorAll('#navbar__list li a').forEach(elm => {
    // Add class and data attributes
    elm.className = "menu__link";
    let nav = elm.dataset.nav;

    // Scroll to section on link click
    elm.addEventListener('click', function(evt) {
        evt.preventDefault();

        switch (nav) {
            case "climate":
                sections[0].scrollIntoView({ behavior: "smooth" });
                break;
            case "evidence":
                sections[1].scrollIntoView({ behavior: "smooth" });
                break;
            case "impact":
                sections[2].scrollIntoView({ behavior: "smooth" });
                break;
            case "mitigation":
                sections[3].scrollIntoView({ behavior: "smooth" });
                break;
            default:
                mainHeader.scrollIntoView({ behavior: "smooth" });
        }
    });
});