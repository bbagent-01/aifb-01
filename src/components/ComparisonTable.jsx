export default function ComparisonTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-border">
            {headers.map((header, i) => (
              <th
                key={i}
                className={`py-4 px-4 text-xs font-mono uppercase tracking-widest ${
                  i === 0 ? 'text-text-muted' : i === 1 ? 'text-accent font-semibold' : 'text-text-muted'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-light">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-4 px-4 text-sm ${
                    j === 0
                      ? 'font-medium text-text-primary'
                      : j === 1
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
