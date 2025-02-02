import React from "react"

export function Intro({ children, ...props }: { children: any }) {
  return <div {...props}>{children}</div>
}
