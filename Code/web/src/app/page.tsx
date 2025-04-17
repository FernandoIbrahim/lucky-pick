import AuthTabs from "@/components/auth-tabs";

export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <header className="row-start-1 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">LuckPick</h1>
        <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
          Challenge your mind in real time
        </p>
      </header>

      <main className="row-start-2 flex flex-col items-center justify-center gap-8 w-full">
        <AuthTabs/>
      </main>

      <footer className="row-start-3 text-sm text-gray-400 dark:text-gray-600">
        © 2025 LuckPick
      </footer>
    </div>
  );
}