import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle -bg-subtle bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/white-cube-pattern-4k-bu.jpg)' }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            CartGuppy Demo
          </Heading>
          <Heading level="h2" className="text-3xl leading-10 text-ui-fg-subtle font-normal">
           
           
          
            Powered by Medusa and Next.js
          </Heading>
        </span>
         {/* Link Button */}
         <a href="/store">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to store
          </Button>
        </a>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
