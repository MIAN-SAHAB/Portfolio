export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 glass mt-20">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mian Muhammad Hamza Daniyal. All Rights Reserved.</p>
        <p className="mt-2 text-xs">Crafted with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
