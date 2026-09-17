#!/bin/bash
set -e
echo "=== Aktualizuji web z GitHubu (/home/GDweb) ==="
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

git config --global --add safe.directory "$SCRIPT_DIR" 2>/dev/null || true
git pull origin main

if [ -f /etc/nginx/sites-available/gdweb ]; then
    sudo sed -i 's/try_files $uri $uri\/ =404;/try_files $uri $uri\/ $uri.html =404;/g' /etc/nginx/sites-available/gdweb 2>/dev/null || true
fi

if command -v systemctl >/dev/null 2>&1; then
    sudo systemctl reload nginx 2>/dev/null || true
fi

echo "=== Hotovo! Web byl úspěšně aktualizován ==="
