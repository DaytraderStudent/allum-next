"use client";

import { useState } from "react";
import { Clock, ArrowUpRight, MessageSquare, GripVertical } from "lucide-react";
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
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-3 min-w-[1000px]">
        {PIPELINE_STAGES.map((stage) => {
          const stageTenders = tenders.filter((t) => t.status === stage);
          const color = STATUS_COLORS[stage];
          const stageValue = stageTenders.reduce(
            (sum, t) => sum + (t.valueLow + t.valueHigh) / 2,
            0
          );

          return (
            <div key={stage} className="flex-1 min-w-[160px]">
              {/* Column header */}
              <div className="mb-3 p-3 bg-white border border-gray-100 rounded-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[12px] font-semibold text-[#0f1a2e]">
                      {STATUS_LABELS[stage]}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">
                    {stageTenders.length}
                  </span>
                </div>
                {stageValue > 0 && (
                  <div className="text-[11px] text-gray-400 mt-1">
                    {(stageValue / 1_000_000).toFixed(1)}M NOK
                  </div>
                )}
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {stageTenders.map((t) => {
                  const daysLeft = Math.ceil(
                    (new Date(t.deadline).getTime() - Date.now()) /
                      (1000 * 60 * 60 * 24)
                  );

                  return (
                    <div
                      key={t.id}
                      className="bg-white border border-gray-100 rounded-sm hover:border-gray-200 transition-colors group"
                    >
                      {/* Color top bar */}
                      <div
                        className="h-[3px] rounded-t-sm"
                        style={{ backgroundColor: color }}
                      />

                      <div className="p-3">
                        {/* Title */}
                        <h4 className="text-[#0f1a2e] text-[12px] font-semibold leading-snug line-clamp-2">
                          {t.title}
                        </h4>

                        {/* Buyer */}
                        <p className="mt-1.5 text-[11px] text-gray-400">
                          {t.buyer}
                        </p>

                        {/* Value */}
                        <p className="mt-1 text-[12px] font-semibold text-[#0f1a2e]">
                          {t.value}
                        </p>

                        {/* Deadline */}
                        <div className="mt-2 flex items-center justify-between">
                          <div
                            className={`flex items-center gap-1 text-[10px] ${daysLeft <= 14 && daysLeft >= 0 ? "text-red-500 font-semibold" : "text-gray-400"}`}
                          >
                            <Clock className="w-3 h-3" />
                            {t.deadline}
                          </div>
                          {/* Relevance dot */}
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                            style={{
                              backgroundColor:
                                t.relevance >= 70
                                  ? "#16a34a"
                                  : t.relevance >= 40
                                    ? "#f59e0b"
                                    : "#dc2626",
                            }}
                          >
                            {t.relevance}
                          </div>
                        </div>

                        {/* Notes */}
                        {editingNotes === t.id ? (
                          <div className="mt-2">
                            <textarea
                              value={notesDraft}
                              onChange={(e) => setNotesDraft(e.target.value)}
                              className="w-full border border-gray-200 p-2 text-[11px] resize-none focus:border-[#0f1a2e] focus:outline-none rounded-sm"
                              rows={2}
                              placeholder="Notater..."
                              autoFocus
                            />
                            <div className="flex gap-1.5 mt-1">
                              <button
                                onClick={saveNotes}
                                className="text-[10px] font-semibold text-white bg-[#0f1a2e] px-2 py-0.5 rounded-sm cursor-pointer"
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
                          t.notes && (
                            <p className="mt-2 text-[10px] text-gray-400 italic bg-gray-50 px-2 py-1 rounded-sm line-clamp-2">
                              {t.notes}
                            </p>
                          )
                        )}

                        {/* Actions on hover */}
                        <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <select
                            value={t.status}
                            onChange={(e) =>
                              onStatusChange(
                                t.id,
                                e.target.value as TenderStatus
                              )
                            }
                            className="h-6 px-1.5 text-[10px] border border-gray-200 bg-white rounded-sm cursor-pointer appearance-none flex-1"
                          >
                            {PIPELINE_STAGES.map((s) => (
                              <option key={s} value={s}>
                                → {STATUS_LABELS[s]}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => startEditNotes(t)}
                            className="p-1 text-gray-300 hover:text-[#0f1a2e] cursor-pointer"
                          >
                            <MessageSquare className="w-3 h-3" />
                          </button>
                          <a
                            href={t.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-gray-300 hover:text-[#0f1a2e] cursor-pointer"
                          >
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {stageTenders.length === 0 && (
                  <div className="text-center py-8 text-[11px] text-gray-300 border border-dashed border-gray-100 rounded-sm bg-white">
                    Tom
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
