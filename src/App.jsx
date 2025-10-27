import { useMemo, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Scanner from "./components/Scanner";
import AttendanceTable from "./components/AttendanceTable";

// Simple demo roster (in production connect to your backend/database)
const ROSTER = [
  { id: "STD-1001", name: "Ava Patel", program: "Computer Science" },
  { id: "STD-1002", name: "Liam Johnson", program: "Electrical Eng." },
  { id: "STD-1003", name: "Noah Kim", program: "Business" },
  { id: "STD-1004", name: "Sophia Garcia", program: "Design" },
  { id: "STD-1005", name: "Ethan Wang", program: "Mathematics" },
];

export default function App() {
  const todayStr = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(todayStr);
  const [records, setRecords] = useState([]);

  const onMarkPresent = ({ id }) => {
    const student = ROSTER.find((s) => s.id === id) || {
      id,
      name: "Guest",
      program: "Unknown",
    };

    const checkInTime = new Date();
    // Consider late if after 09:15 on selected date
    const cutoff = new Date(`${date}T09:15:00`);
    const status = checkInTime > cutoff ? "Late" : "Present";

    setRecords((prev) => [
      ...prev,
      {
        _key: `${id}-${checkInTime.getTime()}`,
        id: student.id,
        name: student.name,
        program: student.program,
        time: checkInTime.toISOString(),
        status,
      },
    ]);
  };

  const stats = useMemo(() => {
    const uniquePresent = new Set(records.map((r) => r.id)).size;
    const late = records.filter((r) => r.status === "Late").length;
    return { total: ROSTER.length, present: uniquePresent, late };
  }, [records]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header date={date} onDateChange={setDate} />
      <main>
        <Stats total={stats.total} present={stats.present} late={stats.late} />
        <Scanner onMarkPresent={onMarkPresent} />
        <AttendanceTable records={records} date={date} />
      </main>
      <footer className="border-t bg-white/70 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Smart Attendance Portal
      </footer>
    </div>
  );
}
