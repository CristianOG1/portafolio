import { Revelar } from './Revelar'

export default function EncabezadoSeccion({ indice, titulo, descripcion, apartado }) {
  return (
    <Revelar className="mb-10 md:mb-14">
      <div className="flex flex-col gap-6 border-b border-zinc-700 pb-6 md:flex-row md:items-end md:justify-between print:border-zinc-300">
        <div className="flex items-start gap-4 md:gap-6">
          <span
            aria-hidden="true"
            className="mt-1.5 font-mono text-[11px] tracking-[0.18em] text-zinc-500"
          >
            {indice}
          </span>
          <div>
            <h2 className="text-balance font-sans text-4xl leading-none tracking-[-0.02em] text-zinc-50 sm:text-5xl md:text-6xl print:text-3xl">
              {titulo}
            </h2>
            {descripcion ? (
              <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-zinc-400 md:text-base">
                {descripcion}
              </p>
            ) : null}
          </div>
        </div>
        {apartado ? (
          <div className="shrink-0 text-sm text-zinc-500 md:pb-1">{apartado}</div>
        ) : null}
      </div>
    </Revelar>
  )
}