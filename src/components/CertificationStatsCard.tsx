import Link from "next/link";

interface Props {
  count: number;
}

export default function CertificationStatsCard({ count }: Props) {
  return (
    <Link href="#certifications">
      <div className="cursor-pointer rounded-lg border border-white/10 bg-background px-6 py-4 text-center hover:border-white/30 transition-all duration-300">
        <p className="text-xl font-bold text-pink-400">{count}+</p>
        <p className="text-sm text-muted-foreground">Certifications</p>
      </div>
    </Link>
  );
}
