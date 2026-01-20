#!/bin/bash

FILE="readme2.md"
START_DATE="2026-01-17"
DAYS=3

for ((i=0; i<$DAYS; i++)); do
  DATE=$(date -d "$START_DATE + $i day" +"%Y-%m-%d 12:00:00")

  echo "Backfill commit for $DATE" >> $FILE
  git add $FILE

  GIT_AUTHOR_DATE="$DATE" \
  GIT_COMMITTER_DATE="$DATE" \
  git commit -m "Backfilled commit for $(date -d "$DATE" +"%Y-%m-%d")"
done

