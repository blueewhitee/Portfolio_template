import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20">
      <div className="absolute inset-0">
        <Image
          src="/navbar-background.jpeg"
          alt="Header background"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6 h-full flex justify-between items-center border-b border-white/10">
        {/* Navbar content can be added here if needed later */}
      </div>
    </header>
  )
}