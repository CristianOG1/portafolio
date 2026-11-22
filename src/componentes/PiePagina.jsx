import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { perfil, piePagina } from '../datos/datosPortafolio'
import { IconoGithub, IconoLinkedin } from './IconosMarca'
import { Revelar } from './Revelar'

function FilaContacto({ icono: Icono, etiqueta, valor, href, externo = false }) {
  const contenido = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-700 text-zinc-400 transition-colors duration-300 group-hover/contact:border-zinc-500 group-hover/contact:text-zinc-100 print:border-zinc-300">
        <Icono className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] text-zinc-500">{etiqueta}</span>
        <span className="block truncate text-sm text-zinc-300">{valor}</span>
      </span>
      {href ? (
        <ArrowUpRight
          className="ml-auto h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 group-hover/contact:text-zinc-100 print:hidden"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  if (!href) {
    return (
      <li>
        <div className="group/contact flex items-center gap-3 py-4">{contenido}</div>
      </li>
    )
  }

  return (
    <li>
      <a
        href={href}
        target={externo ? '_blank' : undefined}
        rel={externo ? 'noreferrer' : undefined}
        className="group/contact flex items-center gap-3 py-4 transition-colors"
      >
        {contenido}
      </a>
    </li>
  )
}

export default function PiePagina() {
  const { contacto } = perfil
  const manejoLinkedin = contacto.linkedin.replace(
    /^https?:\/\/(www\.)?linkedin\.com\//,
    '',
  )

  return (
    <footer
      id="contacto"
      className="relative scroll-mt-16 overflow-hidden bg-zinc-950 print:bg-white"
    >
      <div
        aria-hidden="true"
        className="puntos-cuadricula pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] print:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-zinc-50/[0.035] blur-3xl print:hidden"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-zinc-700 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 print:border-zinc-300 print:py-8">
          <Revelar>
            <p className="font-mono text-[11px] text-zinc-500">Contacto</p>
            <h2 className="mt-5 max-w-2xl text-balance font-sans text-5xl leading-[0.95] tracking-[-0.03em] text-zinc-50 sm:text-6xl md:text-7xl print:text-3xl">
              {piePagina.titulo}
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-sm leading-7 text-zinc-400 md:text-base">
              {piePagina.subtitulo}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
              <a
                href={piePagina.cta.href}
                className="group inline-flex items-center gap-2 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-white print:hidden"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {piePagina.cta.etiqueta}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={contacto.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border border-zinc-500 px-5 py-3 text-sm text-zinc-100 transition-colors duration-300 hover:bg-zinc-700 print:hidden"
              >
                <IconoGithub className="h-4 w-4" />
                GitHub
                <ArrowUpRight
                  className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-100"
                  aria-hidden="true"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="mt-6 inline-flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-300 hover:text-zinc-100 print:hidden"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Guardar como PDF
            </button>
          </Revelar>

          <Revelar delay={0.1} className="flex flex-col justify-end">
            <ul className="divide-y divide-zinc-700 border-y border-zinc-700 print:border-zinc-300">
              <FilaContacto
                icono={Mail}
                etiqueta="Correo"
                valor={contacto.correo}
                href={`mailto:${contacto.correo}`}
              />
              <FilaContacto
                icono={Phone}
                etiqueta="Teléfono"
                valor={contacto.telefono}
                href={`tel:${contacto.telefonoHref}`}
              />
              <FilaContacto
                icono={MapPin}
                etiqueta="Ubicación"
                valor={contacto.ubicacion}
              />
              <FilaContacto
                icono={IconoLinkedin}
                etiqueta="LinkedIn"
                valor={manejoLinkedin}
                href={contacto.linkedin}
                externo
              />
            </ul>

            <p className="mt-5 text-xs leading-6 text-zinc-500">
              Disponible para colaborar en equipos de producto, desarrollo web y
              proyectos independientes.
            </p>
          </Revelar>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between print:py-3">
          <p>{piePagina.derechos}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>{piePagina.credito}</p>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-zinc-100 print:hidden"
            >
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}