import { Calendar, Settings, User } from "lucide-react";

export default function Header({ date, onDateChange }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-600 text-white font-bold">
            SA
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Smart Attendance</h1>
            <p className="text-sm text-slate-500">Fast, reliable, and touch-free check-ins</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
            <Calendar className="h-4 w-4 text-slate-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className="outline-none bg-transparent"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-slate-50">
            <User className="h-4 w-4" />
            Admin
          </button>
        </div>
      </div>
    </header>
  );
}
