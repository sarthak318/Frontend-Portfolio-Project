export default function Footer() {
    return (
      <footer className="border-t bg-black py-4">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-sm text-white md:flex-row">
          <div>© 2025 Blintfly, Inc. - All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="https://drive.google.com/file/d/1CSbCkUDR86SV7i7oWzC7uv9a0b0WqEsB/view?usp=sharing" target="_blank" className="hover:text-gray-300">
              Terms of use
            </a>
            <a href="https://drive.google.com/file/d/1QMRat4HVUXjN4u4U2-b7nOH7r-WdbC2d/view?usp=sharing" target="_blank" className="hover:text-gray-300">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  