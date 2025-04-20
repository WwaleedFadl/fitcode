import { SignOutButton, SignUp } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div className="text-3xl">
      <SignUp />
      <SignOutButton />
    </div>
  )
}

export default HomePage
