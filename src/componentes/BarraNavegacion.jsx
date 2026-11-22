import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Printer, X } from 'lucide-react'
import { enlacesNavegacion, perfil } from '../datos/datosPortafolio'
import { suavizadoExponencial } from '../utilidades/movimiento'

export default function BarraNavegacion() {
  const [abierto, setAbierto] = useState(false)
  const [desplazado, setDesplazado] = useState(false)
  const [activo, setActivo] = useState('#inicio')
  const movimientoReducido = useReducedMotion()

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 16)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  useEffect(() => {
    const secciones = enlacesNavegacion
      .map((enlace) => document.querySelector(enlace.href))
      .filter(Boolean)

    if (!secciones.length) return undefined

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setActivo(`#${entrada.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    secciones.forEach((seccion) => observador.observe(seccion))
    return () => observador.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  const cerrarMenu = () => setAbierto(false)
  const manejarImpresion = () => window.print()

  return (
    <motion.header
      initial={movimientoReducido ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: suavizadoExponencial }}
      className={`no-print fixed inset-x-0 top-0 z-50 border-b border-zinc-700 bg-zinc-900/85 backdrop-blur-md transition-colors duration-500 print:hidden ${
        desplazado || abierto ? 'bg-zinc-900/95' : 'bg-zinc-900/85'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          onClick={cerrarMenu}
          aria-label={`${perfil.logo}, ir al inicio`}
          className="group inline-flex items-baseline font-sans text-2xl leading-none tracking-[-0.02em] text-zinc-50"
        >
          Cristian
          <span className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-50">
            OG
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {enlacesNavegacion.map((enlace) => {
            const esActivo = activo === enlace.href
            return (
              <a
                key={enlace.href}
                href={enlace.href}
                aria-current={esActivo ? 'location' : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  esActivo ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-50'
                }`}
              >
                {enlace.etiqueta}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-zinc-50 transition-transform duration-300 ${
                    esActivo ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={manejarImpresion}
            className="hidden items-center gap-2 bg-zinc-100 px-4 py-2.5 text-xs font-medium text-zinc-900 transition-colors duration-300 hover:bg-white sm:inline-flex"
          >
            <Printer className="h-3.5 w-3.5" aria-hidden="true" />
            Imprimir CV
          </button>

          <button
            type="button"
            onClick={() => setAbierto((valor) => !valor)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50 md:hidden"
          >
            {abierto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {abierto ? (
          <motion.div
            id="menu-movil"
            key="menu-movil"
            initial={movimientoReducido ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={movimientoReducido ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: suavizadoExponencial }}
            className="overflow-hidden border-t border-zinc-700 bg-zinc-900 md:hidden"
          >
            <nav aria-label="Navegación móvil" className="flex flex-col px-5 py-5">
              {enlacesNavegacion.map((enlace, indice) => (
                <motion.a
                  key={enlace.href}
                  href={enlace.href}
                  onClick={cerrarMenu}
                  initial={movimientoReducido ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * indice }}
                  className="flex items-baseline gap-3 border-b border-zinc-800 py-4 text-lg text-zinc-200 transition-colors hover:text-zinc-50"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] text-zinc-500"
                  >
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                  {enlace.etiqueta}
                </motion.a>
              ))}

              <button
                type="button"
                onClick={manejarImpresion}
                className="mt-5 inline-flex items-center justify-center gap-2 bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Imprimir CV
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}