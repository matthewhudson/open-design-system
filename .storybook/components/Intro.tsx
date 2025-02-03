import React from "react"
import classes from "./Intro.module.css"

export function Intro({ children, ...props }: { children: any }) {
  return (
    <div className={classes.base} {...props}>
      {children}
    </div>
  )
}