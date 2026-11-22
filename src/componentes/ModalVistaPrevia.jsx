import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Briefcase,
  ExternalLink,
  Gamepad2,
  Scissors,
  ShoppingBag,
  Smartphone,
  Wallet,
  X,
} from 'lucide-react'

const iconos = {
  tijeras: Scissors,
  tienda: ShoppingBag,
  mando: Gamepad2,
  telefono: Smartphone,
  cartera: Wallet,
}

export function MarcoProyecto({ proyecto, grande = false }) {
  const [imagenFallida, setImagenFallida] = useState(false)
  const Icono = iconos[proyecto.icono] ?? Scissors
  const esMovil = proyecto.tipoDispositivo === 'movil'

  if (esMovil) {
    return (
      <div className={`mx-auto ${grande ? 'w-[200px] sm:w-[230px]' : 'w-[150px]'}`}>
        <div className="rounded-[2rem] border border-zinc-700 bg-zinc-800 p-2 shadow-xl shadow-black/30">
          <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-zinc-900">
            {imagenFallida || !proyecto.imagenPrevia ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
                <span className="flex h-14 w-14 items-center justify-center border border-zinc-700 text-zinc-300">
                  <Icono className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-zinc-100">
                  {proyecto.titulo}
                </span>
                <span className="text-[11px] text-zinc-500">
                  {proyecto.subtitulo}
                </span>
              </div>
            ) : (
              <img
                src={proyecto.imagenPrevia}
                alt={`Vista previa de ${proyecto.titulo}`}
                onError={() => setImagenFallida(true)}
                className="h-full w-full object-cover object-top"
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800">
        <div className="flex items-center gap-1.5 border-b border-zinc-700 bg-zinc-800 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="ml-3 h-2 w-40 rounded-full bg-zinc-700" />
        </div>
        <div className="relative aspect-[16/10] bg-zinc-900">
          {imagenFallida || !proyecto.imagenPrevia ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center border border-zinc-700 text-zinc-300">
                <Icono className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-zinc-100">
                {proyecto.titulo}
              </span>
              <span className="text-[11px] text-zinc-500">
                {proyecto.subtitulo}
              </span>
            </div>
          ) : (
            <img
              src={proyecto.imagenPrevia}
              alt={`Vista previa de ${proyecto.titulo}`}
              onError={() => setImagenFallida(true)}
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default function ModalVistaPrevia({ proyecto, alCerrar }) {
  const movimientoReducido = useReducedMotion()
  const tieneEnVivo =
    Boolean(proyecto.urlEnVivo) &&
    proyecto.urlEnVivo !== '#' &&
    proyecto.soportaIframe === true

  const [pestana, setPestana] = useState(tieneEnVivo ? 'vivo' : 'captura')

  useEffect(() => {
    const desbordamientoAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const alPresionar = (evento) => {
      if (evento.key === 'Escape') alCerrar()
    }
    window.addEventListener('keydown', alPresionar)

    return () => {
      document.body.style.overflow = desbordamientoAnterior
      window.removeEventListener('keydown', alPresionar)
    }
  }, [alCerrar])

  return (
    <motion.div
      className="print:hidden fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
      initial={movimientoReducido ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={movimientoReducido ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={alCerrar}
        initial={movimientoReducido ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={movimientoReducido ? undefined : { opacity: 0 }}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-vista-previa"
        className="relative z-10 my-8 w-full max-w-5xl overflow-hidden border border-zinc-700 bg-zinc-800/95 shadow-2xl shadow-black/40"
        initial={movimientoReducido ? false : { opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={movimientoReducido ? undefined : { opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-700 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="font-mono text-[11px] tracking-wide text-zinc-500">
              Vista Previa
            </p>
            <h2
              id="titulo-vista-previa"
              className="mt-2 font-sans text-3xl leading-none tracking-[-0.02em] text-zinc-50 sm:text-4xl"
            >
              {proyecto.titulo}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{proyecto.subtitulo}</p>
          </div>

          <button
            type="button"
            onClick={alCerrar}
            aria-label="Cerrar vista previa"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-700 text-zinc-300 transition-colors duration-300 hover:border-zinc-400 hover:text-zinc-100"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {tieneEnVivo ? (
          <div className="flex flex-wrap items-center gap-2 border-b border-zinc-700 px-5 py-4 sm:px-6">
            <div className="inline-flex border border-zinc-700">
              <button
                type="button"
                onClick={() => setPestana('vivo')}
                className={`px-4 py-2 text-xs transition-colors duration-300 ${
                  pestana === 'vivo'
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                Vista en Vivo
              </button>
              <button
                type="button"
                onClick={() => setPestana('captura')}
                className={`px-4 py-2 text-xs transition-colors duration-300 ${
                  pestana === 'captura'
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                Captura
              </button>
            </div>

            <a
              href={proyecto.urlEnVivo}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 border border-zinc-500 px-4 py-2 text-xs text-zinc-100 transition-colors duration-300 hover:bg-zinc-700"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Abrir en nueva pestaña
            </a>
          </div>
        ) : null}

        <div className="p-5 sm:p-6">
          {tieneEnVivo && pestana === 'vivo' ? (
            <div className="overflow-hidden border border-zinc-700 bg-zinc-900">
              <div className="flex items-center gap-1.5 border-b border-zinc-700 bg-zinc-800 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="ml-3 truncate text-xs text-zinc-500">
                  {proyecto.urlEnVivo}
                </span>
              </div>
              <iframe
                src={proyecto.urlEnVivo}
                title={`Vista en vivo de ${proyecto.titulo}`}
                className="h-[60vh] w-full bg-white"
                loading="lazy"
              />
            </div>
          ) : (
            <MarcoProyecto proyecto={proyecto} grande />
          )}

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-pretty text-sm leading-7 text-zinc-400">
                {proyecto.descripcion}
              </p>

              <div className="mt-5 flex items-start gap-2.5 border-t border-zinc-700 pt-5 text-xs leading-5 text-zinc-400">
                <Briefcase className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden="true" />
                <span>
                  <span className="text-zinc-500">Rol: </span>
                  {proyecto.rol}
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-wide text-zinc-500">
                Stack técnico
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {proyecto.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="border border-zinc-600 bg-zinc-700/70 px-2 py-1 font-mono text-[10px] leading-4 text-zinc-200"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>

              {proyecto.enlaces?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {proyecto.enlaces.map((enlace) => {
                    const esMarcador = !enlace.href || enlace.href === '#'
                    if (esMarcador) return null
                    return (
                      <a
                        key={enlace.etiqueta}
                        href={enlace.href}
                        target={enlace.externo ? '_blank' : undefined}
                        rel={enlace.externo ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-2 border border-zinc-500 px-3.5 py-2 text-xs text-zinc-100 transition-colors duration-300 hover:bg-zinc-700"
                      >
                        {enlace.etiqueta}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}