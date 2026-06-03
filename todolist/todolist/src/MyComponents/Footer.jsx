

export default function Footer () {
  let footerStyle = {
    position: "relative",
    top: "90vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">© 2026 My Todo List. All rights reserved.</p>
    </footer>
  )
}
