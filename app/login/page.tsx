"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    console.log({
      email,
      password
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">

      <Card className="w-87.5">

        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password
          </CardDescription>
        </CardHeader>

        <CardContent>

          <form onSubmit={handleLogin} className="space-y-4">

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full">
              Login
            </Button>

          </form>

        </CardContent>

      </Card>

    </div>
  )
}