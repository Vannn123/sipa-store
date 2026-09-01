import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs('src/assets/images', exist_ok=True)

# 1. Generate logo.png (512x512)
size = 512
img_logo = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img_logo)

# Outer glow / background circle
center = size // 2
radius = 230

# Background dark circle
for r in range(radius + 20, radius - 1, -1):
    alpha = int(120 * (1 - (r - radius) / 20)) if r > radius else 255
    color = (255, 77, 94, max(0, min(255, alpha))) if r > radius else (15, 15, 23, 255)
    draw.ellipse([center - r, center - r, center + r, center + r], fill=color if r > radius else None, outline=(255, 77, 94) if r <= radius else None, width=6 if r <= radius else 1)

# Inner metallic disc
draw.ellipse([center - 210, center - 210, center + 210, center + 210], fill=(20, 20, 32, 255), outline=(255, 133, 119), width=4)

# Glowing Ring
for r in range(180, 195):
    draw.ellipse([center - r, center - r, center + r, center + r], outline=(255, 77, 94, 80))

# Center emblem (Diamond / Gaming controller shape)
# Draw Diamond Lock icon shape
d_pts = [
    (center, center - 80),
    (center + 70, center - 10),
    (center, center + 70),
    (center - 70, center - 10)
]
draw.polygon(d_pts, fill=(255, 77, 94, 230), outline=(255, 255, 255, 200))
draw.polygon([(center, center - 60), (center + 45, center - 10), (center, center + 50), (center - 45, center - 10)], fill=(255, 133, 119, 255))

# Text "SIPA STORE"
try:
    font_lg = ImageFont.truetype("arial.ttf", 36)
    font_sm = ImageFont.truetype("arial.ttf", 20)
except:
    font_lg = ImageFont.load_default()
    font_sm = ImageFont.load_default()

# Text arc or centered text
draw.text((center, center + 120), "SIPA STORE", fill=(255, 255, 255), font=font_lg, anchor="mm")
draw.text((center, center + 155), "OFFICIAL GAME & TOPUP", fill=(255, 133, 119), font=font_sm, anchor="mm")

img_logo.save('src/assets/images/logo.png')

# 2. Generate why-choose-us.png (800x600)
w, h = 800, 600
img_why = Image.new('RGBA', (w, h), (18, 18, 26, 255))
draw_w = ImageDraw.Draw(img_why)

# Draw dark border & tech background
draw_w.rectangle([10, 10, w-10, h-10], outline=(255, 77, 94, 100), width=3)
draw_w.rectangle([20, 20, w-20, h-20], outline=(255, 255, 255, 20), width=1)

# Tech grid lines
for x in range(40, w, 60):
    draw_w.line([(x, 20), (x, h-20)], fill=(255, 255, 255, 8))
for y in range(40, h, 60):
    draw_w.line([(20, y), (w-20, y)], fill=(255, 255, 255, 8))

# Glowing central badge box
box_w, box_h = 480, 280
bx1, by1 = (w - box_w) // 2, (h - box_h) // 2
draw_w.rectangle([bx1, by1, bx1 + box_w, by1 + box_h], fill=(26, 26, 38, 240), outline=(255, 77, 94, 200), width=3)

# Glowing corners
corner_len = 30
for cx, cy in [(bx1, by1), (bx1 + box_w, by1), (bx1, by1 + box_h), (bx1 + box_w, by1 + box_h)]:
    dx = -corner_len if cx > w//2 else corner_len
    dy = -corner_len if cy > h//2 else corner_len
    draw_w.line([(cx, cy), (cx + dx, cy)], fill=(255, 133, 119), width=5)
    draw_w.line([(cx, cy), (cx, cy + dy)], fill=(255, 133, 119), width=5)

# Shield Graphic inside box
scx, scy = w // 2, h // 2 - 30
shield_pts = [
    (scx - 40, scy - 40),
    (scx + 40, scy - 40),
    (scx + 40, scy + 10),
    (scx, scy + 50),
    (scx - 40, scy + 10)
]
draw_w.polygon(shield_pts, fill=(255, 77, 94, 220), outline=(255, 255, 255, 255))
draw_w.line([(scx, scy - 30), (scx, scy + 35)], fill=(255, 255, 255, 200), width=3)

# Text inside why choose us box
try:
    font_title = ImageFont.truetype("arial.ttf", 32)
    font_sub = ImageFont.truetype("arial.ttf", 18)
except:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()

draw_w.text((w // 2, h // 2 + 45), "SIPA STORE GUARANTEE", fill=(255, 255, 255), font=font_title, anchor="mm")
draw_w.text((w // 2, h // 2 + 85), "100% Safe • Instant Delivery • 24/7 Support", fill=(255, 133, 119), font=font_sub, anchor="mm")

# Bottom stats bar
draw_w.rectangle([50, h - 80, w - 50, h - 35], fill=(30, 30, 45, 220), outline=(255, 255, 255, 30))
draw_w.text((150, h - 57), "⚡ Instant Process", fill=(255, 255, 255), font=font_sub, anchor="mm")
draw_w.text((400, h - 57), "🛡️ Anti-Scam Rekber", fill=(255, 255, 255), font=font_sub, anchor="mm")
draw_w.text((650, h - 57), "💎 Best Rates GT", fill=(255, 255, 255), font=font_sub, anchor="mm")

img_why.save('src/assets/images/why-choose-us.png')
print("Successfully generated logo.png and why-choose-us.png!")
