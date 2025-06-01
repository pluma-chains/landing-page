export const FloatingParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        width: `${Math.random() * 8 + 4}px`,
        height: `${Math.random() * 8 + 4}px`,
      }}
    />
  ))
  return <div className="particles-container">{particles}</div>
}
