import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Printer } from 'lucide-react'
import { perfil, sitio } from '../datos/datosPortafolio'
import { suavizadoExponencial } from '../utilidades/movimiento'
import { IconoGithub, IconoLinkedin } from './IconosMarca'

function Retrato() {
  const [imagenFallida, setImagenFallida] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[370px] lg:max-w-[400px] print:max-w-[160px]">
      <div
        aria-hidden="true"
        className="absolute -inset-3 border border-zinc-800/80 print:hidden"
      />

      <div className="relative aspect-[4/5] overflow-hidden border border-zinc-700 bg-zinc-800 print:border-zinc-300">
        {imagenFallida ? (
          <div className="respaldo-retrato flex h-full w-full flex-col items-center justify-center print:bg-white">
            <span className="font-sans text-[7.5rem] leading-none text-zinc-50/90 print:text-black">
              {perfil.iniciales}
            </span>
            <span className="mt-4 text-[11px] tracking-[0.18em] text-zinc-500 print:text-zinc-500">
              Cristian Olmos
            </span>
          </div>
        ) : (
          <img
            src={perfil.foto}
            alt={`Fotografía profesional de ${perfil.nombre}`}
            onError={() => setImagenFallida(true)}
            className="foto-impresion h-full w-full object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
            loading="eager"
          />
        )}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-zinc-50/50"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-zinc-50/50"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 text-xs text-zinc-500 print:hidden">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Estado de México
        </span>
        <span className="font-mono text-[10px] tracking-wide text-zinc-500">MX</span>
      </div>
    </div>
  )
}

export default function Presentacion() {
  const movimientoReducido = useReducedMotion()

  const contenedor = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.08 },
    },
  }

  const elemento = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: suavizadoExponencial },
    },
  }

  const lineasNombre = [perfil.nombre.split(' ')[0], ...perfil.nombre.split(' ').slice(1)]

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-zinc-700 pt-16 print:border-zinc-300 print:pt-0"
    >
      <div
        aria-hidden="true"
        className="cuadricula-lineas pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)] print:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-[540px] w-[540px] rounded-full bg-zinc-50/[0.035] blur-3xl print:hidden"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-14 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:py-20 print:min-h-0 print:grid-cols-[1fr_170px] print:items-start print:gap-10 print:py-4">
          <motion.div
            variants={movimientoReducido ? undefined : contenedor}
            initial={movimientoReducido ? false : 'hidden'}
            animate={movimientoReducido ? false : 'show'}
          >
            <motion.div
              variants={movimientoReducido ? undefined : elemento}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs text-zinc-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-50 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-50" />
                </span>
                {perfil.disponibilidad}
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {sitio.edicion}
              </span>
            </motion.div>

            <motion.h1
              variants={movimientoReducido ? undefined : elemento}
              className="mt-8 font-sans text-[clamp(3.5rem,9.5vw,8.5rem)] leading-[0.85] tracking-[-0.035em] text-zinc-50 print:text-4xl print:leading-tight"
            >
              {lineasNombre.map((linea) => (
                <span key={linea} className="block">
                  {linea}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={movimientoReducido ? undefined : elemento}
              className="mt-7 max-w-xl text-base font-medium leading-7 text-zinc-200 md:text-lg"
            >
              {perfil.rol}
            </motion.p>

            <motion.p
              variants={movimientoReducido ? undefined : elemento}
              className="mt-4 max-w-xl text-pretty text-sm leading-7 text-zinc-400 md:text-base md:leading-8"
            >
              {perfil.resumen}
            </motion.p>

            <motion.div
              variants={movimientoReducido ? undefined : elemento}
              className="mt-8 flex flex-wrap items-center gap-3 print:hidden"
            >
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-white print:hidden"
              >
                Ver proyectos
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="group inline-flex items-center gap-2 border border-zinc-500 px-5 py-3 text-sm text-zinc-100 transition-colors duration-300 hover:bg-zinc-700 print:hidden"
              >
                <Printer
                  className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-100"
                  aria-hidden="true"
                />
                Imprimir CV
              </button>
            </motion.div>

            <motion.div
              variants={movimientoReducido ? undefined : elemento}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-700 pt-6 text-sm print:border-zinc-300"
            >
              <a
                href={`mailto:${perfil.contacto.correo}`}
                className="group inline-flex min-w-0 items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-zinc-50"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{perfil.contacto.correo}</span>
              </a>
              <a
                href={perfil.contacto.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-zinc-50"
              >
                <IconoGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={perfil.contacto.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-zinc-50"
              >
                <IconoLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={movimientoReducido ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: suavizadoExponencial, delay: movimientoReducido ? 0 : 0.3 }}
            className="relative"
          >
            <Retrato />

            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="h-px w-10 bg-zinc-700" aria-hidden="true" />
              <span className="text-xs text-zinc-500">
                {sitio.leyendaPresentacion}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative grid border-t border-zinc-700 sm:grid-cols-3 print:border-zinc-300">
          {perfil.datos.map((dato, indice) => (
            <div
              key={dato.etiqueta}
              className={`py-5 sm:px-6 ${
                indice > 0
                  ? 'border-t border-zinc-700 sm:border-l sm:border-t-0'
                  : 'sm:pl-0'
              } print:border-zinc-300`}
            >
              <p className="font-mono text-[10px] tracking-wide text-zinc-500">
                {dato.etiqueta}
              </p>
              <p className="mt-1.5 text-sm text-zinc-300">{dato.valor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}