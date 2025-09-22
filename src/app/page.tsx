import { DlInteractiveBackground } from "@/components/ui/DlInteractiveBackground/DlInteractiveBackground";
import { DlGeometricShapes } from "@/components/ui/DlGeometricShapes/DlGeometricShapes";

import { DlHeader } from "@/components/DlHedaer";
import { DlHero } from "@/components/DlHero";
import { DlSkills } from "@/components/DlSkills";
import { DlCertifications } from "@/components/DlCertifications";
import { DlContact } from "@/components/DlContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5 relative">
      <DlInteractiveBackground />
      <DlGeometricShapes />

      <div className="relative z-10">
        <DlHeader />
        <main>
          <DlHero />
          <DlSkills />
          <DlCertifications />
          <DlContact />
        </main>
      </div>
    </div>
  );
}
