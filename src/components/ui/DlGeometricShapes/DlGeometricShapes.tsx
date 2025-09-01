"use client";

export function DlGeometricShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-32 h-32 border border-v1-primary-500/20 rotate-45 animate-float"
        style={{ animationDelay: "0s" }}
      />

      <div
        className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-v1-primary-500/10 to-transparent rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-v1-primary-600/30 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-20 h-20 bg-v1-primary-500/5 rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-20 right-1/3 w-28 h-28 border border-v1-primary-500/15 rotate-[30deg] animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-v1-primary-500/20 via-v1-primary-500/5 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "0s", animationDuration: "4s" }}
      />

      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-v1-primary-600/15 via-v1-primary-600/5 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "6s" }}
      />
    </div>
  );
}
