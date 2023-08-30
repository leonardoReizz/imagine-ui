import { Typography } from "@imagine-ui/react";

interface TableAPIProps {
  body: {
    id: string;
    name: string;
    type: string;
    default: string;
    description: string;
    onClickType?: () => void;
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
              <td onClick={t.onClickType}>
                <Typography
                  variant="small"
                  className={
                    t.onClickType
                      ? "hover:text-green-500 cursor-pointer font-bold"
                      : ""
                  }
                >
                  {t.type}
                </Typography>
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
