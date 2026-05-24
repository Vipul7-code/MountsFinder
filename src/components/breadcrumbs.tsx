import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-lime-100/80">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isLast ? (
                  <span className="text-lime-100">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-lime-200">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
