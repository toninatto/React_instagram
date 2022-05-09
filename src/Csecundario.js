import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copy from "./Copy";

export default function Csecundario () {
    return (
        <div class="container-secundario">
            <div class="sidebar">
                <Usuario />
                <Sugestoes />
                <Links />
                <Copy />
            </div>
        </div>
    )
}