"use client";

import { useState, useEffect } from "react";
import { Lock } from "lucide-react";

const PASS_HASH = "allum2026"; // In production: env var + bcrypt

interface Props {
  children: React.ReactNode;
}

export default function AuthGate({ children }: Props) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("allum-dash-auth");
    if (stored === PASS_HASH) setAuthed(true);
    setChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASS_HASH) {
      localStorage.setItem("allum-dash-auth", PASS_HASH);
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) return null;

  if (!authed) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="w-full max-w-[380px]">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#0f1a2e] rounded-sm flex items-center justify-center mx-auto mb-5">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#0f1a2e] text-[24px] font-semibold">
              Dashboard
            </h1>
            <p className="text-gray-500 text-[14px] mt-1">
              Kun for Allum Engineering ansatte
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                Passord
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full h-12 border px-4 text-[15px] focus:outline-none transition-colors ${
                  error
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-300 focus:border-[#0f1a2e]"
                }`}
                placeholder="Skriv inn passord"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[12px] mt-1.5">
                  Feil passord. Prøv igjen.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-[#0f1a2e] text-white text-[14px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer"
            >
              Logg inn
            </button>
          </form>

          <p className="text-center text-gray-400 text-[12px] mt-6">
            Kontakt admin for tilgang
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
