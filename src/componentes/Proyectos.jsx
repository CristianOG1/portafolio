import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Briefcase,
  Eye,
  Gamepad2,
  Scissors,
  ShoppingBag,
  Smartphone,
  Wallet,
} from 'lucide-react'
import { perfil, proyectos } from '../datos/datosPortafolio'
import { IconoGithub } from './IconosMarca'
import ModalVistaPrevia, { MarcoProyecto } from './ModalVistaPrevia'
import { Revelar } from './Revelar'
import EncabezadoSeccion from './EncabezadoSeccion'

const iconos = {
  tijeras: Scissors,
  tienda: ShoppingBag,
  mando: Gamepad2,
  telefono: Smartphone,
  cartera: Wallet,
}

function EnlacesProyecto({ enlaces, className = '' }) {
  if (!enlaces?.length) return null

  return (
    <div className={`flex flex-wrap items-center gap-2 print:hidden ${className}`}>
      {enlaces.map((enlace) => {
        const esMarcador = !enlace.href || enlace.href === '#'
        const IconoEnlace = enlace.tipo === 'repositorio' ? IconoGithub : ArrowUpRight

        if (esMarcador) {
          return (
            <span
              key={enlace.etiqueta}
              aria-disabled="true"
              title="Enlace disponible próximamente"
              className="inline-flex cursor-not-allowed items-center gap-2 border border-zinc-700 px-3.5 py-2 text-xs text-zinc-500 print:hidden"
            >
              <IconoEnlace className="h-3.5 w-3.5" aria-hidden="true" />
              {enlace.etiqueta}
              <span className="sr-only">, disponible próximamente</span>
            </span>
          )
        }

        return (
          <a
            key={enlace.etiqueta}
            href={enlace.href}
            target={enlace.externo ? '_blank' : undefined}
            rel={enlace.externo ? 'noreferrer' : undefined}
            className="group/enlace inline-flex items-center gap-2 border border-zinc-500 px-3.5 py-2 text-xs text-zinc-100 transition-colors duration-300 hover:bg-zinc-700 print:hidden"
          >
            <IconoEnlace className="h-3.5 w-3.5" aria-hidden="true" />
            {enlace.etiqueta}
            <ArrowUpRight
              className="h-3 w-3 transition-transform duration-300 group-hover/enlace:-translate-y-0.5 group-hover/enlace:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        )
      })}
    </div>
  )
}

function EtiquetasTecnologia({ tecnologias }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tecnologias.map((tecnologia) => (
        <span
          key={tecnologia}
          className="border border-zinc-600 bg-zinc-700/70 px-2 py-1 font-mono text-[10px] leading-4 text-zinc-200 transition-colors duration-300 group-hover:border-zinc-500 print:border-zinc-300"
        >
          {tecnologia}
        </span>
      ))}
    </div>
  )
}

function ProyectoDestacado({ proyecto, alVistaPrevia }) {
  const movimientoReducido = useReducedMotion()
  const Icono = iconos[proyecto.icono] ?? Scissors

  return (
    <Revelar className="h-full">
      <motion.article
        whileHover={movimientoReducido ? undefined : { y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group grid overflow-hidden border border-zinc-700 bg-zinc-800/90 transition-colors duration-300 hover:border-zinc-400 lg:grid-cols-[1.08fr_0.92fr] print:break-inside-avoid print:border-zinc-300 print:bg-white"
      >
        <div className="flex flex-col p-6 sm:p-8 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-1.5 text-[11px] text-zinc-400 print:border-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-100" aria-hidden="true" />
              Proyecto destacado
            </span>
            <span className="font-mono text-[11px] tracking-wide text-zinc-500">
              {proyecto.indice} / 05
            </span>
          </div>

          <div className="mt-8 flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-700 text-zinc-300 transition-colors duration-300 group-hover:border-zinc-500 group-hover:text-zinc-100 print:hidden">
              <Icono className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-sans text-4xl leading-none tracking-[-0.02em] text-zinc-50 sm:text-5xl print:text-3xl">
                {proyecto.titulo}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{proyecto.subtitulo}</p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-zinc-400">
            {proyecto.descripcion}
          </p>

          <div className="mt-6 flex items-start gap-2.5 border-t border-zinc-700 pt-5 text-xs leading-5 text-zinc-400 print:border-zinc-300">
            <Briefcase className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden="true" />
            <span>
              <span className="text-zinc-500">Rol: </span>
              {proyecto.rol}
            </span>
          </div>

          {proyecto.destacados?.length ? (
            <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {proyecto.destacados.map((destacado) => (
                <li key={destacado} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <span className="h-1 w-1 shrink-0 bg-zinc-500" aria-hidden="true" />
                  {destacado}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6">
            <EtiquetasTecnologia tecnologias={proyecto.tecnologias} />
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-7 print:hidden">
            <button
              type="button"
              onClick={() => alVistaPrevia(proyecto)}
              className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors duration-300 hover:bg-white"
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              Vista Previa
            </button>
            <EnlacesProyecto enlaces={proyecto.enlaces} />
          </div>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-zinc-700 bg-zinc-900/40 p-6 sm:p-8 lg:border-l lg:border-t-0 print:hidden">
          <MarcoProyecto proyecto={proyecto} />
        </div>
      </motion.article>
    </Revelar>
  )
}

function TarjetaProyecto({ proyecto, delay, alVistaPrevia }) {
  const movimientoReducido = useReducedMotion()
  const Icono = iconos[proyecto.icono] ?? Scissors

  return (
    <Revelar delay={delay} className="h-full">
      <motion.article
        whileHover={movimientoReducido ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="group flex h-full flex-col overflow-hidden border border-zinc-700 bg-zinc-800/90 transition-colors duration-300 hover:border-zinc-400 print:break-inside-avoid print:border-zinc-300 print:bg-white"
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-zinc-700 bg-zinc-900/40 p-5 print:hidden">
          <MarcoProyecto proyecto={proyecto} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="flex h-9 w-9 items-center justify-center border border-zinc-700 text-zinc-400 transition-colors duration-300 group-hover:border-zinc-500 group-hover:text-zinc-100 print:hidden">
              <Icono className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] text-zinc-500">{proyecto.indice} / 05</span>
          </div>

          <h3 className="mt-5 font-sans text-2xl leading-tight tracking-[-0.01em] text-zinc-50 print:text-xl">
            {proyecto.titulo}
          </h3>
          <p className="mt-1 text-xs text-zinc-500">{proyecto.subtitulo}</p>

          <p className="mt-4 text-pretty text-sm leading-6 text-zinc-400">
            {proyecto.descripcion}
          </p>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            <span className="text-zinc-500">Rol: </span>
            {proyecto.rol}
          </p>

          <div className="mt-4">
            <EtiquetasTecnologia tecnologias={proyecto.tecnologias} />
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6 print:hidden">
            <button
              type="button"
              onClick={() => alVistaPrevia(proyecto)}
              className="inline-flex items-center gap-2 bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-900 transition-colors duration-300 hover:bg-white"
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              Vista Previa
            </button>
            <EnlacesProyecto enlaces={proyecto.enlaces} />
          </div>
        </div>
      </motion.article>
    </Revelar>
  )
}

export default function Proyectos() {
  const [destacado, ...resto] = proyectos
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

  return (
    <section
      id="proyectos"
      className="scroll-mt-16 border-b border-zinc-700 py-20 md:py-28 print:border-zinc-300 print:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <EncabezadoSeccion
          indice="03"
          titulo="Proyectos"
          descripcion="Evidencias de trabajo en aplicaciones web, comercio electrónico, videojuegos y aplicaciones móviles. Cada proyecto documenta el contexto, el stack y mi participación."
          apartado={
            <span>
              {String(proyectos.length).padStart(2, '0')} proyectos
            </span>
          }
        />

        <div className="space-y-5">
          <ProyectoDestacado
            proyecto={destacado}
            alVistaPrevia={setProyectoSeleccionado}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {resto.map((proyecto, indice) => (
              <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
                delay={indice * 0.06}
                alVistaPrevia={setProyectoSeleccionado}
              />
            ))}
          </div>
        </div>

        <Revelar className="mt-10 flex justify-center print:hidden">
          <a
            href={perfil.contacto.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-zinc-500 px-5 py-3 text-sm text-zinc-100 transition-colors duration-300 hover:bg-zinc-700 print:hidden"
          >
            <IconoGithub className="h-4 w-4" />
            Más proyectos en GitHub
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Revelar>
      </div>

      <AnimatePresence>
        {proyectoSeleccionado ? (
          <ModalVistaPrevia
            proyecto={proyectoSeleccionado}
            alCerrar={() => setProyectoSeleccionado(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}

