#!/bin/bash

echo "🔧 Fixing SCSS compilation issues..."
echo ""

# Step 1: Stop any running dev servers
echo "1️⃣ Stopping any running Angular dev servers..."
pkill -9 -f "ng serve" 2>/dev/null
pkill -9 -f "node.*angular" 2>/dev/null
sleep 1

# Step 2: Clear all caches
echo "2️⃣ Clearing all build caches..."
rm -rf .angular dist node_modules/.cache .angular/cache 2>/dev/null
npx ng cache clean 2>/dev/null
echo "✅ Caches cleared"

# Step 3: Verify styles.scss exists
echo "3️⃣ Verifying styles.scss file..."
if [ -f "src/styles.scss" ]; then
    echo "✅ src/styles.scss exists"
else
    echo "❌ ERROR: src/styles.scss not found!"
    exit 1
fi

# Step 4: Verify angular.json configuration
echo "4️⃣ Verifying angular.json configuration..."
if grep -q '"src/styles.scss"' angular.json; then
    echo "✅ angular.json correctly configured"
else
    echo "❌ ERROR: angular.json not configured correctly!"
    exit 1
fi

# Step 5: Test build
echo "5️⃣ Testing build..."
if npx ng build --configuration development 2>&1 | grep -q "Application bundle generation complete"; then
    echo "✅ Build successful!"
    echo ""
    echo "✨ All issues fixed! You can now run:"
    echo "   npx ng serve"
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi


