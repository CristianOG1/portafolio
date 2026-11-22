import BarraNavegacion from './componentes/BarraNavegacion'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import Estudios from './componentes/Estudios'
import Habilidades from './componentes/Habilidades'
import Proyectos from './componentes/Proyectos'
import { sitio } from './datos/datosPortafolio'

export default function Aplicacion() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        {sitio.etiquetas.saltarContenido}
      </a>

      <BarraNavegacion />

      <main id="contenido">
        <Presentacion />
        <Estudios />
        <Habilidades />
        <Proyectos />
      </main>

      <PiePagina />
    </div>
  )
}