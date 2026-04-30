import { DlHeader } from "@/components/DlHedaer";
import { DlHero } from "@/components/DlHero";
import { DlSkills } from "@/components/DlSkills";
import { DlExperience } from "@/components/DlExperience";
import { DlProjects } from "@/components/DlProjects";
import { DlCertifications } from "@/components/DlCertifications";
import { DlContact } from "@/components/DlContact";
import { DlFooter } from "@/components/DlFooter";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <DlHeader />
      <div className="relative">
        <main className="pb-28 md:pb-0">
          <DlHero />
          <div className="relative">
            <BGPattern variant="grid" mask="fade-edges" size={40} fill="rgba(96, 206, 90, 0.1)" />
            <div className="relative z-10">
              <DlSkills />
              <DlExperience />
              <DlProjects />
              <DlCertifications />
              <DlContact />
            </div>
          </div>
        </main>
        <DlFooter />
      </div>
    </div>
  );
}
