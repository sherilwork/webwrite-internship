import { DesktopHero } from "./DesktopHero"
import { MobileHero } from "./MobileHero"

/**
 * Hero component that switches between Desktop and Mobile versions
 * based on the breakpoint. The internals of each version are
 * completely isolated from one another.
 */
export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </>
  )
}
