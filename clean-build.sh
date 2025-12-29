#!/bin/bash
# Clean build script for BigBridz project

echo "🧹 Cleaning build caches..."
rm -rf .angular dist node_modules/.cache .angular/cache 2>/dev/null

echo "✅ Caches cleared!"
echo ""
echo "📦 Building project..."
npx ng build

echo ""
echo "✨ Done! If you're running 'ng serve', please restart it."


