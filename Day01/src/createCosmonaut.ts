
export interface Cosmonaut {
    name: string;
    mission: string;
    country: string;
}
function createCosmonaut(Name: string, Mission: string, Country: string): Cosmonaut {
    const titi = {name: "Amstrong", mission: "Moon", country: "United-State"};
    titi.name = Name;
    titi.mission = Mission;
    titi.country = Country;
    return titi;
}
export default createCosmonaut;