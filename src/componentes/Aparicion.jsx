import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo } from '../lib/movimiento'

/**
 * Envoltorio de aparición al hacer scroll. Usa viewport once para que la
 * animación no se repita y respeta la preferencia de movimiento reducido.
 */
export function Aparicion({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      data-reveal
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: easeOutExpo, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
