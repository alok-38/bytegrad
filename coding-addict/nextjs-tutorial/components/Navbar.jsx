import Link from "next/link";

const links = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/prisma-example', label: 'prisma' },
    { href: '/tasks', label: 'tasks' },
];

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href='/' className='btn btn-primary'>Next.js</Link>
                <ul>
                    {links.map((link) => {
                        return (
                            <li key={link.href}>
                                <Link href={link.href} className='capitalize'>
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}