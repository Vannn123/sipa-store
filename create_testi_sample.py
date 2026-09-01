import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('src/assets/images', exist_ok=True)

# Generate a high quality composite testimonial card image (800x800)
w, h = 800, 800
img = Image.new('RGBA', (w, h), (180, 10, 20, 255))
draw = ImageDraw.Draw(img)

# Outer glow & border
draw.rectangle([10, 10, w-10, h-10], outline=(255, 77, 94), width=6)

# Header Red Gradient Banner
draw.rectangle([20, 20, w-20, 120], fill=(220, 20, 35), outline=(255, 255, 255, 100), width=2)

try:
    font_header = ImageFont.truetype("arial.ttf", 34)
    font_sub = ImageFont.truetype("arial.ttf", 42)
    font_label = ImageFont.truetype("arial.ttf", 26)
    font_amount = ImageFont.truetype("arial.ttf", 46)
except:
    font_header = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_label = ImageFont.load_default()
    font_amount = ImageFont.load_default()

draw.text((w // 2, 45), "THANKYOU FOR TRUSTING US!", fill=(255, 255, 255), font=font_header, anchor="mm")
draw.text((w // 2, 90), "@sipastore.gt", fill=(255, 255, 255), font=font_sub, anchor="mm")

# Content columns box (Left: Bukti Transfer, Right: Bukti Drop)
# Bukti Transfer (Left)
draw.rectangle([35, 145, 385, 195], fill=(255, 255, 255), outline=(150, 0, 0), width=2)
draw.text((210, 170), "Bukti Transfer", fill=(180, 10, 20), font=font_label, anchor="mm")

draw.rectangle([35, 210, 385, 760], fill=(40, 40, 50), outline=(255, 255, 255, 60), width=3)
# Transfer inner mockup receipt
draw.rectangle([65, 260, 355, 710], fill=(255, 255, 255), outline=(200, 200, 200), width=2)
draw.text((210, 300), "m-Transfer : BERHASIL", fill=(0, 100, 180), font=font_label, anchor="mm")
draw.text((210, 360), "Ke: SIPA STORE", fill=(30, 30, 30), font=font_label, anchor="mm")
draw.text((210, 420), "Rp 2.400.000,00", fill=(10, 10, 10), font=font_header, anchor="mm")
draw.text((210, 480), "BCA 27/03/2026", fill=(100, 100, 100), font=font_label, anchor="mm")

# Bukti Drop (Right)
draw.rectangle([415, 145, 765, 195], fill=(255, 255, 255), outline=(150, 0, 0), width=2)
draw.text((590, 170), "Bukti Drop", fill=(180, 10, 20), font=font_label, anchor="mm")

draw.rectangle([415, 210, 765, 640], fill=(20, 50, 30), outline=(255, 255, 255, 60), width=3)
# Drop GT world mockup
draw.text((590, 300), "World: SIPABGL", fill=(100, 255, 150), font=font_label, anchor="mm")
draw.text((590, 380), "laces 10 Blue Gem lock", fill=(255, 255, 255), font=font_label, anchor="mm")
draw.text((590, 440), "into the Display Box", fill=(255, 255, 255), font=font_label, anchor="mm")

# Bottom Right: Testi Amount Badge
draw.rectangle([415, 660, 765, 760], fill=(255, 255, 255), outline=(180, 10, 20), width=4)
draw.text((590, 685), "TESTI AMOUNT", fill=(180, 10, 20), font=font_label, anchor="mm")
draw.text((590, 725), "💎 1000 DL / BGL", fill=(180, 10, 20), font=font_amount, anchor="mm")

img.save('src/assets/images/testimonial-sample.png')
print("Successfully generated composite testimonial-sample.png!")
