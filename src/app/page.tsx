import Link from "next/link";
import { AuthProvider, MyComponent } from "./components/ContextApi";
import { Parent } from "./components/Memo";
import { MyForm } from "./components/MyForm";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <MyComponent />
      </AuthProvider>
      <MyForm />
      <Parent />
      <Link className="text-blue-600 visited:text-purple-600" href="/html">
        Html
      </Link>
    </>
  );
}
