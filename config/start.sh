#!/bin/bash

git submodule add -f https://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@github.com/byinit/next-modules.git src/features/modules

git reset .

cp $(pwd)/.env.example $(pwd)/.env

npm i

