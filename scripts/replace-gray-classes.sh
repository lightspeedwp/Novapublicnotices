#!/bin/bash

# Script to replace generic Tailwind gray classes with semantic CSS variables
# Usage: ./scripts/replace-gray-classes.sh <file-path>

FILE="$1"

if [ -z "$FILE" ]; then
  echo "Usage: $0 <file-path>"
  exit 1
fi

if [ ! -f "$FILE" ]; then
  echo "Error: File not found: $FILE"
  exit 1
fi

echo "Replacing gray classes in: $FILE"

# Create backup
cp "$FILE" "$FILE.backup"

# Replace text colors
sed -i 's/text-gray-300/text-muted-foreground\/70/g' "$FILE"
sed -i 's/text-gray-400/text-muted-foreground\/80/g' "$FILE"
sed -i 's/text-gray-500/text-muted-foreground/g' "$FILE"
sed -i 's/text-gray-600/text-muted-foreground/g' "$FILE"
sed -i 's/text-gray-700/text-foreground/g' "$FILE"
sed -i 's/text-gray-800/text-foreground/g' "$FILE"
sed -i 's/text-gray-900/text-foreground/g' "$FILE"

# Replace background colors
sed -i 's/bg-gray-50/bg-muted/g' "$FILE"
sed -i 's/bg-gray-100/bg-muted/g' "$FILE"

# Replace border colors
sed -i 's/border-gray-200/border-border/g' "$FILE"
sed -i 's/border-gray-300/border-border/g' "$FILE"
sed -i 's/border-gray-400/border-muted-foreground/g' "$FILE"
sed -i 's/border-gray-500/border-muted-foreground/g' "$FILE"

echo "✅ Replacements complete!"
echo "Backup saved to: $FILE.backup"
echo ""
echo "Summary of replacements:"
grep -o "text-muted-foreground\|bg-muted\|border-border\|border-muted-foreground" "$FILE" | sort | uniq -c
