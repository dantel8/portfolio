import { DlHeader } from "@/components/DlHedaer";
import { DlHero } from "@/components/DlHero";
import { DlSkills } from "@/components/DlSkills";
import { DlExperience } from "@/components/DlExperience";
import { DlProjects } from "@/components/DlProjects";
import { DlCertifications } from "@/components/DlCertifications";
import { DlContact } from "@/components/DlContact";
import { DlFooter } from "@/components/DlFooter";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <DlHeader />
      <div className="relative">
        <main className="overflow-x-hidden pb-28 md:pb-0">
          <DlHero />
          <DlSkills />
          <DlExperience />
          <DlProjects />
          <DlCertifications />
          <DlContact />
        </main>
        <DlFooter />
      </div>
    </div>
  );
}
