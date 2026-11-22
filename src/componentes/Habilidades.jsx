import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Database, Layers, Wrench } from 'lucide-react'
import { gruposHabilidades } from '../datos/datosPortafolio'
import { Revelar } from './Revelar'
import EncabezadoSeccion from './EncabezadoSeccion'

const iconos = {
  codigo: Code2,
  capas: Layers,
  baseDatos: Database,
  herramientas: Wrench,
}

export default function Habilidades() {
  const movimientoReducido = useReducedMotion()

  return (
    <section
      id="habilidades"
      className="scroll-mt-16 border-b border-zinc-700 py-20 md:py-28 print:border-zinc-300 print:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <EncabezadoSeccion
          indice="02"
          titulo="Habilidades"
          descripcion="Tecnologías y herramientas que uso para construir productos de principio a fin, desde la interfaz hasta la base de datos y el despliegue."
          apartado={<span>{gruposHabilidades.length} áreas técnicas</span>}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {gruposHabilidades.map((grupo, indice) => {
            const Icono = iconos[grupo.icono] ?? Code2

            return (
              <Revelar key={grupo.id} delay={indice * 0.06} className="h-full">
                <motion.article
                  whileHover={movimientoReducido ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group flex h-full flex-col border border-zinc-700 bg-zinc-800/90 p-6 transition-colors duration-300 hover:border-zinc-400 sm:p-8 print:border-zinc-300 print:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-zinc-700 text-zinc-300 transition-colors duration-300 group-hover:border-zinc-500 group-hover:text-zinc-100 print:border-zinc-300">
                      <Icono className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] tracking-wide text-zinc-500"
                    >
                      {String(indice + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-medium text-zinc-50">{grupo.titulo}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {grupo.elementos.map((elemento) => (
                      <span
                        key={elemento}
                        className="border border-zinc-600 bg-zinc-700/70 px-2.5 py-1.5 font-mono text-[11px] leading-4 text-zinc-200 transition-colors duration-300 group-hover:border-zinc-500 print:border-zinc-300"
                      >
                        {elemento}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Revelar>
            )
          })}
        </div>
      </div>
    </section>
  )
}