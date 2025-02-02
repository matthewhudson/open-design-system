import React from "react"
//import "@sumup-oss/design-tokens/dynamic.css"

import type { CSSProperties } from "react"
import { addons, types } from "@storybook/manager-api"

import { dark, light, listenToColorScheme } from "./themes.js"

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
    },
  },
  "status:deprecated": {
    label: "Deprecated",
    style: {
      color: "#e27900",
      backgroundColor: "#fdf4db",
      borderColor: "#e87c00",
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
      //border-style: solid;
    },
  },
} satisfies Record<string, BadgeConfig>

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  showToolbar: true,
  panelPosition: "bottom",
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.tags?.includes("hidden")
      },
    },
    renderLabel(item) {
      console.log(item)
      if (item.type !== "story") {
        return item.name
      }

      let badge: BadgeConfig | undefined

      for (const tag of item.tags) {
        badge = badges[tag]
        if (badge) {
          break
        }
      }

      if (!badge) {
        return item.name
      }

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flex: 1,
          }}
        >
          <span>{item.name}</span>
          <span
            style={{
              ...badge.style,
            }}
          >
            {badge.label}
          </span>
        </div>
      )
    },
  },
})

/**
 * Switch color scheme based on the global types or system preferences
 */
addons.register("color-scheme", (api) => {
  const setTheme = (colorScheme: "dark" | "light") => {
    api.setOptions({ theme: colorScheme === "dark" ? dark : light })
    document.documentElement.dataset.colorScheme = colorScheme
  }

  listenToColorScheme(api, setTheme)
})

/**
 * Switch to older version of the documentation
 */
// import { PARAM_KEY as VERSIONS_PARAM_KEY, Versions } from './addons/versions';
// addons.register("version-switcher", () => {
//   addons.add(VERSIONS_PARAM_KEY, {
//     type: types.TOOL,
//     title: "Versions",
//     match: ({ viewMode }) =>
//       viewMode ? /^(story|docs)$/.test(viewMode) : false,
//     render: Versions,
//   })
// })
