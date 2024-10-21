#!/bin/bash

export $(grep -v '^#' .env | xargs)

if [ "$DISABLE_LINT_STAGING" = "true" ]; then
	echo "You disabled staging in .env"
  exit 0
else
  lint-staged
fi