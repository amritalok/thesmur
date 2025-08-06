#!/bin/bash

# This script optimizes images in the public directory for web use.
# It resizes them to a max width of 1200px and strips metadata.

# Directory containing the images
IMAGE_DIR="./public"

# Find and process each image
find "$IMAGE_DIR" \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | while IFS= read -r -d $'\0' img; do
    echo "Processing $img..."
    # Use 'magick' to resize and strip metadata, overwriting the original
    magick "$img" -resize 1200x -strip "$img"
done

echo "Image optimization complete."
