import sys
from PIL import Image

def get_dominant_colors(image_path, num_colors=5):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        
        # Resize constraint to speed up
        img.thumbnail((150, 150))
        
        # Get colors
        colors = img.getcolors(maxcolors=150*150)
        
        # Sort by pixel count
        colors.sort(key=lambda x: x[0], reverse=True)
        
        # Print top colors
        print("Top colors (Count, RGB -> Hex):")
        for count, rgb in colors[:15]:
            hex_color = "#{:02x}{:02x}{:02x}".format(rgb[0], rgb[1], rgb[2])
            print(f"- {hex_color} (RGB: {rgb}, Count: {count})")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        get_dominant_colors(sys.argv[1])
    else:
        print("Provide image path")
