import React from "react"
import type { CSSProperties } from "react"
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

type BadgeConfig = {
  style: CSSProperties
  label: string
}

const badges = {
  // 'status:stable' is excluded to reduce visual clutter
  "status:experimental": {
    label: "Experimental",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
      display: "inline-block",
      padding: "2px 6px",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "center",
      borderRadius: "999999px",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  "status:under-review": {
    label: "Under Review",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
      display: "inline-block",
      padding: "2px 6px",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "center",
      borderRadius: "999999px",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  "status:legacy": {
    label: "Legacy",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
      display: "inline-block",
      padding: "2px 6px",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "center",
      borderRadius: "999999px",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  "status:deprecated": {
    label: "Deprecated",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
      display: "inline-block",
      padding: "2px 6px",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "center",
      borderRadius: "999999px",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  "status:internal": {
    label: "Internal",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
      display: "inline-block",
      padding: "2px 6px",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "center",
      borderRadius: "999999px",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
} satisfies Record<string, BadgeConfig>

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
