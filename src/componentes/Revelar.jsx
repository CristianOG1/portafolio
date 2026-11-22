import { motion, useReducedMotion } from 'framer-motion'
import { suavizadoExponencial } from '../utilidades/movimiento'

export function Revelar({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
  ...props
}) {
  const movimientoReducido = useReducedMotion()
  const EtiquetaMovimiento = motion[as] ?? motion.div

  return (
    <EtiquetaMovimiento
      data-reveal
      className={className}
      initial={movimientoReducido ? false : { opacity: 0, y }}
      whileInView={movimientoReducido ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: suavizadoExponencial, delay }}
      {...props}
    >
      {children}
    </EtiquetaMovimiento>
  )
}