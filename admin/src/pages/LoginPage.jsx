import { SignIn } from "@clerk/clerk-react";

function LoginPage() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hidden flex-col justify-between bg-neutral p-10 text-neutral-content lg:flex">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-content/70">
              Admin Access
            </p>
            <h1 className="mt-4 max-w-md text-4xl font-black leading-tight">
              Manage your store from one focused dashboard.
            </h1>
            <p className="mt-4 max-w-md text-base text-neutral-content/75">
              Review orders, update products, and keep customers moving without leaving the panel.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-content/80">
            Secure Clerk sign-in keeps admin access isolated from the storefront.
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="/login"
            afterSignInUrl="/dashboard"
            appearance={{
              elements: {
                card: "shadow-none border-0",
                headerTitle: "text-2xl font-bold",
                headerSubtitle: "text-sm text-base-content/70",
                socialButtonsBlockButton: "border-base-300",
                formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-content",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
