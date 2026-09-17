import PaycheckCalculator from "@/components/PaycheckCalculator";
import PaycheckGuide from "@/components/PaycheckGuide";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <PaycheckCalculator />
      <PaycheckGuide />
    </div>
  );
}
