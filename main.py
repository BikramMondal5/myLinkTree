import qrcode

# Your website URL
URL = "https://mylinktree.vercel.app"

# Create QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=4,
)

qr.add_data(URL)
qr.make(fit=True)

# Generate image with custom colors
img = qr.make_image(
    fill_color="#F97316",  # Primary Orange
    back_color="#FDF3B1"  # Cream Background
)

# Save QR Code
img.save("mylinktree_qr.png")

print("✅ QR Code generated successfully!")
print("📁 Saved as: mylinktree_qr.png")