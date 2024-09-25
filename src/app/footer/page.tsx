import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
       <footer className= "footer">
  <div className="footer-div">
    <p>&copy; {new Date().getFullYear()} Alishba Naveed. All Rights Reserved. </p>
    <div className="link-div">
      <Link href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/" target="_blank" rel="noopener noreferrer" className="link">
        LinkedIn
      </Link>
      <Link href="https://github.com/alishba241?tab=repositories" target="_blank" rel="noopener noreferrer" className="link">
        GitHub
      </Link>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

