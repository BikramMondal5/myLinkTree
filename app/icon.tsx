import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#FF8A00",
          border: "3px solid #111827",
          borderRadius: "50%",
          color: "#111827",
          display: "flex",
          fontSize: 14,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          lineHeight: 1,
          width: "100%",
        }}
      >
        BM
      </div>
    ),
    {
      ...size,
    },
  )
}
