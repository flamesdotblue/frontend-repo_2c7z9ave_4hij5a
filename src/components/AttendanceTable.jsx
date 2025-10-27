import { useMemo } from "react";

export default function AttendanceTable({ records, date }) {
  const sorted = useMemo(() => {
    return [...records].sort((a, b) => new Date(b.time) - new Date(a.time));
  }, [records]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">Attendance Logs</h3>
            <p className="text-sm text-slate-500">Date: {date}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Program</Th>
                <Th>Time</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {sorted.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-slate-500">
                    No records yet. Scan a QR to mark attendance.
                  </td>
                </tr>
              ) : (
                sorted.map((r) => (
                  <tr key={r._key} className="hover:bg-slate-50/60">
                    <Td>{r.id}</Td>
                    <Td>{r.name}</Td>
                    <Td>{r.program}</Td>
                    <Td>{new Date(r.time).toLocaleTimeString()}</Td>
                    <Td>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          r.status === "Late"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {r.status}
                      </span>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Th({ children }) {
  return (
    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
      {children}
    </th>
  );
}

function Td({ children }) {
  return <td className="px-5 py-3 text-sm text-slate-700">{children}</td>;
}
