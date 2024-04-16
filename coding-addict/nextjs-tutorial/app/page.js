import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Next.js Tutorial</h1>
      <Link href='/client' className="btn btn-accent mt-5">
        Get started
      </Link>
    </div>
  )
}