import config from "../../../config/particles.config";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function Particle({ children, className }) {

    async function loadParticles(engine) {
        await loadFull(engine);
    }
    return (
        <Particles className={className} options={config} init={loadParticles}>
            {children}
        </Particles>
    )
}