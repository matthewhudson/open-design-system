import React from "react"

export default {
  title: "Design Tokens",
  parameters: {
    layout: "padded",
  },
}

const ColorPalette = ({ colors, title }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Object.entries(colors).map(([shade, value]) => (
        <div key={shade} className="space-y-2">
          <div
            className="h-16 w-full rounded-md border border-gray-200"
            style={{ backgroundColor: value }}
          />
          <div className="text-sm">
            <div className="font-medium">{shade}</div>
            <div className="text-gray-500">{value}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Colors = () => {
  const colors = {
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Color Palette</h2>
      <ColorPalette colors={colors.gray} title="Gray" />
      <ColorPalette colors={colors.primary} title="Primary" />
    </div>
  )
}

export const Typography = () => {
  const fontSizes = [
    { name: "xs", class: "text-xs" },
    { name: "sm", class: "text-sm" },
    { name: "base", class: "text-base" },
    { name: "lg", class: "text-lg" },
    { name: "xl", class: "text-xl" },
    { name: "2xl", class: "text-2xl" },
    { name: "3xl", class: "text-3xl" },
    { name: "4xl", class: "text-4xl" },
    { name: "5xl", class: "text-5xl" },
    { name: "6xl", class: "text-6xl" },
  ]

  const fontWeights = [
    { name: "thin", value: "100" },
    { name: "extralight", value: "200" },
    { name: "light", value: "300" },
    { name: "normal", value: "400" },
    { name: "medium", value: "500" },
    { name: "semibold", value: "600" },
    { name: "bold", value: "700" },
    { name: "extrabold", value: "800" },
    { name: "black", value: "900" },
  ]

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Font Sizes</h2>
        <div className="space-y-4">
          {fontSizes.map(({ name, class: className }) => (
            <div key={name} className="flex items-center space-x-4">
              <div className="w-16 text-sm text-gray-500">{name}</div>
              <div className={className}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
        <div className="space-y-4">
          {fontWeights.map(({ name, value }) => (
            <div key={name} className="flex items-center space-x-4">
              <div className="w-24 text-sm text-gray-500">
                {name} ({value})
              </div>
              <div className={`font-${name}`}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export const Spacing = () => {
  const spaces = [
    "px",
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "8",
    "10",
    "12",
    "16",
    "20",
    "24",
    "32",
    "40",
    "48",
    "56",
    "64",
    "72",
    "80",
    "96",
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Spacing Scale</h2>
      <div className="space-y-4">
        {spaces.map((space) => (
          <div key={space} className="flex items-center space-x-4">
            <div className="w-16 text-sm text-gray-500">{space}</div>
            <div className="flex items-center space-x-2">
              <div
                className="h-4 bg-primary-400"
                style={{ width: `var(--spacing-${space})` }}
              />
              <span className="text-sm text-gray-500">{space}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
