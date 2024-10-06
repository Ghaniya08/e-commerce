"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Eyes",
    href: "/eyes",
    description:
      "Enhance your eyes with our eye makeup collection.",
  },
  {
    title: "Face",
    href: "/face",
    description:
      "Get a flawless base with our face makeup.",
  } ,
  {
    title: "Lips",
    href: "/lips",
    description:
      "Discover bold and vibrant lip colors.",
  } ,
  {
    title: "Nails",
    href: "/nails",
    description:
      "Nail polishes and treatments for beautiful nails",
  } ,
  {
    title: "Accessories",
    href: "/accessories",
    description:
      "Tools and accessories for a perfect look.",
  } ,
  {
    title: "Hair Care",
    href: "/hair",
    description:
      "Nourish and style your hair.",
  } ,
  {
    title: "Skin Care",
    href: "skincare",
    description:
      "Keep your skin glowing with our skincare range.",
  }
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Makeup</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" bg-myWhite  grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link 
                key={component.title}
                
                href={component.href}
                
                legacyBehavior 
                
                passHref
                >
                <ListItem title={component.title}>{component.description}</ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground   focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:text-mynormalpink duration-300">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
