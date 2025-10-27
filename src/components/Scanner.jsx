import { useState } from "react";
import { QrCode, ScanLine, CheckCircle2 } from "lucide-react";

export default function Scanner({ onMarkPresent }) {
  const [manualId, setManualId] = useState("");
  const [message, setMessage] = useState("");

  const simulateScan = () => {
    const id = manualId.trim() || `STD-${Math.floor(Math.random() * 9000 + 1000)}`;
    onMarkPresent({ id });
    setMessage(`Marked present: ${id}`);
    setManualId("");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-2">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">QR Scanner</h2>
          <QrCode className="h-5 w-5 text-slate-500" />
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-slate-50">
          <div className="absolute inset-0 grid place-items-center">
            <ScanLine className="h-24 w-24 text-indigo-500" />
          </div>
          <div className="absolute inset-x-6 top-6 rounded-md border border-dashed p-3 text-center text-sm text-slate-500">
            Camera preview would appear here. This demo simulates scans.
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={manualId}
            onChange={(e) => setManualId(e.target.value)}
            placeholder="Enter ID manually (e.g., STD-1023)"
            className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={simulateScan}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <QrCode className="h-4 w-4" />
            Start Scan
          </button>
        </div>
        {message && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            {message}
          </div>
        )}
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="mb-2 text-base font-semibold">How it works</h3>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600">
          <li>Point the device camera at a valid student QR code.</li>
          <li>On detection, the system records time and marks attendance.</li>
          <li>Use manual entry if a QR code is unreadable.</li>
        </ol>
        <p className="mt-4 text-sm text-slate-500">
          Tip: Integrate with your preferred hardware scanner or webcam library for
          production use.
        </p>
      </div>
    </section>
  );
}
