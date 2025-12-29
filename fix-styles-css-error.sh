#!/bin/bash

echo "🔧 Fixing 'Could not resolve src/styles.css' Error"
echo "=================================================="
echo ""

# Step 1: Kill all Angular processes
echo "1️⃣ Stopping all Angular processes..."
pkill -9 -f "ng serve" 2>/dev/null
pkill -9 -f "ng build" 2>/dev/null
pkill -9 -f "node.*angular" 2>/dev/null
sleep 2
echo "✅ All processes stopped"
echo ""

# Step 2: Remove all caches
echo "2️⃣ Clearing all build caches..."
rm -rf .angular dist node_modules/.cache .angular/cache 2>/dev/null
npx ng cache clean 2>/dev/null
echo "✅ All caches cleared"
echo ""

# Step 3: Verify styles.scss exists
echo "3️⃣ Verifying styles.scss file..."
if [ -f "src/styles.scss" ]; then
    echo "✅ src/styles.scss exists ($(wc -c < src/styles.scss | xargs) bytes)"
else
    echo "❌ ERROR: src/styles.scss not found!"
    exit 1
fi
echo ""

# Step 4: Remove any leftover styles.css
echo "4️⃣ Removing any leftover styles.css files..."
find src -name "styles.css" -type f -delete 2>/dev/null
echo "✅ Cleaned up"
echo ""

# Step 5: Verify angular.json
echo "5️⃣ Verifying angular.json configuration..."
BUILD_STYLES=$(grep -A 1 '"styles"' angular.json | grep "styles.scss" | head -1)
TEST_STYLES=$(grep -A 1 '"styles"' angular.json | grep "styles.scss" | tail -1)

if [ -n "$BUILD_STYLES" ] && [ -n "$TEST_STYLES" ]; then
    echo "✅ angular.json correctly configured with styles.scss"
else
    echo "❌ ERROR: angular.json not configured correctly!"
    echo "   Build styles: $BUILD_STYLES"
    echo "   Test styles: $TEST_STYLES"
    exit 1
fi
echo ""

# Step 6: Test build
echo "6️⃣ Testing build..."
if npx ng build --configuration development 2>&1 | grep -q "Application bundle generation complete"; then
    echo "✅ Build successful!"
    echo ""
    echo "✨ All issues fixed!"
    echo ""
    echo "📝 Next steps:"
    echo "   1. If you were running 'ng serve', restart it:"
    echo "      npx ng serve"
    echo ""
    echo "   2. If errors persist in your IDE, restart VS Code"
    echo ""
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi


