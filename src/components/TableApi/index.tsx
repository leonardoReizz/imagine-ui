interface TableAPIProps {
  body: {
    id: string;
    name: string;
    type: string;
    default: string;
    description: string;
  }[];
}

export function TableAPI({ body }: TableAPIProps) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {body.map((t) => {
          return (
            <tr className="border-b h-12" key={t.id}>
              <td>{t.name}</td>
              <td>{t.type}</td>
              <td>{t.default}</td>
              <td>{t.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
