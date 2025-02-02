import React from "react"
import type { ReactNode } from "react"
import { Unstyled } from "@storybook/blocks"
import LinkTo from "@storybook/addon-links/react"

type Variant =
  | "neutral"
  | "stable"
  | "under-review"
  | "experimental"
  | "legacy"
  | "deprecated"
  | "internal"

interface StatusProps {
  /**
   * Choose the style variant. Default: 'neutral'.
   */
  variant?: Variant
  children?: ReactNode
}

//export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {

const variantMap: Record<
  Variant,
  { variant: StatusProps["variant"]; label: string }
> = {
  neutral: { variant: "neutral", label: "Neutral" },
  stable: { variant: "stable", label: "Stable" },
  experimental: { variant: "experimental", label: "Experimental" },
  "under-review": { variant: "under-review", label: "Under Review" },
  legacy: { variant: "legacy", label: "Legacy" },
  deprecated: { variant: "deprecated", label: "Deprecated" },
  internal: { variant: "internal", label: "Internal" },
}

export function Status({
  variant: status = "stable",
  children,
  ...props
}: StatusProps) {
  const { variant, label } = variantMap[status]

  const kind = "Introduction/Component-Lifecycle"
  const name = "Docs"

  return (
    <>
      <Unstyled {...props}>
        <LinkTo {...props} kind={kind} name={name}>
          {/**  <Badge variant={variant}>{label}</Badge>*/}
          {label}
          {children}
        </LinkTo>
        {/**  {children && (
        <Body size="s" as="span" className={classes.description} color="subtle">
          {children}
        </Body>
      )}*/}
      </Unstyled>
    </>
  )
}
