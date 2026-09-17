import PaycheckCalculator from "@/components/PaycheckCalculator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <PaycheckCalculator />
    </div>
  );
}
