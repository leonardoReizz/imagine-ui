import { Typography } from "@/utils/imagine-ui";
import Link from "next/link";

interface TableAPIProps {
  body: {
    id: string;
    name: string;
    type: string;
    default: string;
    description: string;
    href?: string;
  }[];
}

export function TableAPI({ body }: TableAPIProps) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b h-12 dark:border-zinc-700">
          <th>
            <Typography variant="small">Name</Typography>
          </th>
          <th>
            <Typography variant="small">Type</Typography>
          </th>
          <th>
            <Typography variant="small">Default</Typography>
          </th>
          <th>
            <Typography variant="small">Description</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {body.map((t) => {
          return (
            <tr className="border-b h-12  dark:border-zinc-700" key={t.id}>
              <td>
                <Typography variant="small">{t.name}</Typography>
              </td>
              <td>
                {t.href && (
                  <Link href={t.href}>
                    <Typography
                      variant="small"
                      className={
                        t.href
                          ? "hover:text-green-500 cursor-pointer font-bold"
                          : ""
                      }
                    >
                      {t.type}
                    </Typography>
                  </Link>
                )}
                {!t.href && (
                  <Typography
                    variant="small"
                    className={
                      t.href
                        ? "hover:text-green-500 cursor-pointer font-bold"
                        : ""
                    }
                  >
                    {t.type}
                  </Typography>
                )}
              </td>
              <td>
                <Typography variant="small">{t.default}</Typography>
              </td>
              <td>
                <Typography variant="small">{t.description}</Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
