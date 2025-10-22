#!/bin/bash

set -e

echo "🛠️  Building the package..."
npm run build

echo "📦 Publishing to npm..."
npm publish

echo "✅ Package published successfully! 🚀"

exit 0
