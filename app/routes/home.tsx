import { Button } from "~/components/ui/button"

import type { Route } from "./+types/home"
import { LoginForm } from "~/components/login-form"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <LoginForm/>
    </div>
  )
}