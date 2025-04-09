// Workaround to tsparticles work with Astro
// Check in the future for the v3 of tsparticles
// Right now we are using v2 just for compatibility

export { };

declare global {
    interface Window {
        particlesInit: any;
        particlesLoaded: any;
    }
}
