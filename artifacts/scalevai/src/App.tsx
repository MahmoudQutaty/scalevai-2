import { Route, Switch, Router } from "wouter";
import Home from "./app/page";

export default function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <main className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold">404 — Page not found</h1>
            <a className="underline" href={import.meta.env.BASE_URL}>Go home</a>
          </main>
        </Route>
      </Switch>
    </Router>
  );
}
