"use client";

import { useState } from "react";
import { Clock, ArrowUpRight, MessageSquare, X } from "lucide-react";
import {
  STATUS_LABELS,
  STATUS_COLORS,
  type Tender,
  type TenderStatus,
} from "./data";

const PIPELINE_STAGES: TenderStatus[] = [
  "new",
  "evaluating",
  "writing",
  "submitted",
  "won",
  "lost",
];

interface Props {
  tenders: Tender[];
  onStatusChange: (id: string, status: TenderStatus) => void;
  onNotesChange: (id: string, notes: string) => void;
}

export default function PipelineBoard({
  tenders,
  onStatusChange,
  onNotesChange,
}: Props) {
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState("");

  const startEditNotes = (t: Tender) => {
    setEditingNotes(t.id);
    setNotesDraft(t.notes);
  };

  const saveNotes = () => {
    if (editingNotes) {
      onNotesChange(editingNotes, notesDraft);
      setEditingNotes(null);
    }
  };

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-[1100px]">
        {PIPELINE_STAGES.map((stage) => {
          const stageTenders = tenders.filter((t) => t.status === stage);
          const color = STATUS_COLORS[stage];

          return (
            <div key={stage} className="flex-1 min-w-[200px]">
              {/* Column header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[13px] font-semibold text-[#0f1a2e]">
                    {STATUS_LABELS[stage]}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                  {stageTenders.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {stageTenders.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white border border-gray-200 p-4 hover:border-gray-300 transition-colors group"
                  >
                    {/* Title */}
                    <h4 className="text-[#0f1a2e] text-[13px] font-semibold leading-snug line-clamp-2">
                      {t.title}
                    </h4>

                    {/* Buyer & value */}
                    <div className="mt-2 text-[11px] text-gray-500">
                      {t.buyer}
                    </div>
                    <div className="mt-1 text-[12px] font-semibold text-[#0f1a2e]">
                      {t.value}
                    </div>

                    {/* Deadline */}
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      {t.deadline}
                    </div>

                    {/* Relevance */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${t.relevance}%`,
                            backgroundColor:
                              t.relevance >= 70
                                ? "#16a34a"
                                : t.relevance >= 40
                                  ? "#f59e0b"
                                  : "#dc2626",
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {t.relevance}%
                      </span>
                    </div>

                    {/* Notes */}
                    {editingNotes === t.id ? (
                      <div className="mt-3">
                        <textarea
                          value={notesDraft}
                          onChange={(e) => setNotesDraft(e.target.value)}
                          className="w-full border border-gray-200 p-2 text-[11px] resize-none focus:border-[#0f1a2e] focus:outline-none"
                          rows={3}
                          placeholder="Skriv notater..."
                          autoFocus
                        />
                        <div className="flex gap-2 mt-1">
                          <button
                            onClick={saveNotes}
                            className="text-[10px] font-semibold text-white bg-[#0f1a2e] px-2 py-1 cursor-pointer"
                          >
                            Lagre
                          </button>
                          <button
                            onClick={() => setEditingNotes(null)}
                            className="text-[10px] text-gray-400 cursor-pointer"
                          >
                            Avbryt
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {t.notes && (
                          <p className="mt-2 text-[11px] text-gray-400 italic line-clamp-2">
                            {t.notes}
                          </p>
                        )}
                      </>
                    )}

                    {/* Actions */}
                    <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* Move buttons */}
                      {stage !== "won" && stage !== "lost" && (
                        <select
                          value={t.status}
                          onChange={(e) =>
                            onStatusChange(
                              t.id,
                              e.target.value as TenderStatus
                            )
                          }
                          className="h-6 px-1 text-[10px] border border-gray-200 bg-white cursor-pointer appearance-none"
                        >
                          {PIPELINE_STAGES.map((s) => (
                            <option key={s} value={s}>
                              → {STATUS_LABELS[s]}
                            </option>
                          ))}
                        </select>
                      )}
                      <button
                        onClick={() => startEditNotes(t)}
                        className="p-1 text-gray-400 hover:text-[#0f1a2e] cursor-pointer"
                        title="Notater"
                      >
                        <MessageSquare className="w-3 h-3" />
                      </button>
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-[#0f1a2e] cursor-pointer"
                        title="Åpne"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}

                {stageTenders.length === 0 && (
                  <div className="text-center py-8 text-[12px] text-gray-300 border border-dashed border-gray-200">
                    Ingen anbud
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
