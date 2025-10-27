import { CheckCircle2, Users, Clock } from "lucide-react";

export default function Stats({ total, present, late }) {
  const cards = [
    {
      title: "Registered",
      value: total,
      icon: Users,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Present",
      value: present,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
    },
    { title: "Late", value: late, icon: Clock, color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3">
      {cards.map(({ title, value, icon: Icon, color }) => (
        <div key={title} className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
            </div>
            <div className={`grid h-12 w-12 place-items-center rounded-lg ${color}`}>
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
