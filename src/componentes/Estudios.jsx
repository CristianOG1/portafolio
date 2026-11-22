import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Award, Check, GraduationCap, MapPin } from 'lucide-react'
import { estudios } from '../datos/datosPortafolio'
import { Revelar } from './Revelar'
import EncabezadoSeccion from './EncabezadoSeccion'

export default function Estudios() {
  const movimientoReducido = useReducedMotion()

  return (
    <section
      id="estudios"
      className="scroll-mt-16 border-b border-zinc-700 py-20 md:py-28 print:border-zinc-300 print:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <EncabezadoSeccion
          indice="01"
          titulo="Estudios"
          descripcion="Formación académica orientada al desarrollo de software, la arquitectura de sistemas y la gestión de proyectos tecnológicos."
          apartado={
            <span className="inline-flex items-center gap-2">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              {estudios.estado}
            </span>
          }
        />

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Revelar className="h-full">
            <motion.article
              whileHover={movimientoReducido ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex h-full flex-col border border-zinc-700 bg-zinc-800/90 p-6 transition-colors duration-300 hover:border-zinc-400 sm:p-8 md:p-10 print:border-zinc-300 print:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-zinc-700 text-zinc-300 transition-colors duration-300 group-hover:border-zinc-500 group-hover:text-zinc-100 print:border-zinc-300">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 print:border-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-100" aria-hidden="true" />
                  {estudios.estado}
                </span>
              </div>

              <h3 className="mt-8 max-w-2xl text-balance font-sans text-3xl leading-tight tracking-[-0.01em] text-zinc-50 sm:text-4xl print:text-2xl">
                {estudios.titulo}
              </h3>
              <p className="mt-3 text-sm font-medium text-zinc-300">
                {estudios.institucion}
              </p>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {estudios.ubicacion}
              </p>

              <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-zinc-400">
                {estudios.descripcion}
              </p>

              <div className="mt-auto grid gap-x-8 gap-y-3 border-t border-zinc-700 pt-6 sm:grid-cols-2 print:border-zinc-300">
                {estudios.areas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="h-1 w-1 shrink-0 bg-zinc-500" aria-hidden="true" />
                    {area}
                  </div>
                ))}
              </div>
            </motion.article>
          </Revelar>

          <Revelar delay={0.1} className="h-full">
            <motion.article
              whileHover={movimientoReducido ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative flex h-full flex-col border border-zinc-700 bg-zinc-800/60 p-6 transition-colors duration-300 hover:border-zinc-400 sm:p-8 print:border-zinc-300 print:bg-white"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-500">{estudios.proyectoIntegrador.etiqueta}</span>
                <span className="font-mono text-[11px] tracking-wide text-zinc-500">
                  {estudios.proyectoIntegrador.codigo}
                </span>
              </div>

              <h3 className="mt-8 font-sans text-3xl tracking-[-0.01em] text-zinc-50 print:text-2xl">
                {estudios.proyectoIntegrador.nombre}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {estudios.proyectoIntegrador.descripcion}
              </p>

              <ul className="mt-6 space-y-3">
                {estudios.proyectoIntegrador.destacados.map((destacado) => (
                  <li
                    key={destacado}
                    className="flex gap-2.5 text-xs leading-5 text-zinc-300"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden="true" />
                    {destacado}
                  </li>
                ))}
              </ul>

              <a
                href={estudios.proyectoIntegrador.enlace}
                className="group/enlace mt-auto inline-flex items-center gap-2 pt-8 text-sm text-zinc-50 transition-colors hover:text-zinc-300 print:hidden"
              >
                Ver proyecto
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/enlace:-translate-y-0.5 group-hover/enlace:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.article>
          </Revelar>
        </div>
      </div>
    </section>
  )
}