import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div className="text-3xl">
      Home Page
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default HomePage
