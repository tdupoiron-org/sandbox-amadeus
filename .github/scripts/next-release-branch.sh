#!/usr/bin/env bash
set -eu
current_branch=`git rev-parse --abbrev-ref HEAD`
echo "::set-output name=current::${current_branch}"
release_trunk=`echo "${current_branch}" | cut -d '/' -f 2`
echo "::set-output name=trunk::${release_trunk}"
major=`echo "${release_trunk}" | cut -d '.' -f 1`
minor=`echo "${release_trunk}" | cut -d '.' -f 2`
if [[ "${minor}" = "12" ]]
then
    next_major="$(expr $major + 1)"
    next_minor="1"
else
    next_major="${major}"
    next_minor="$(expr $minor + 1)"
fi
next_minor=`printf '%02d' ${next_minor}`
echo "::set-output name=next_major::${next_major}"
echo "::set-output name=next_minor::${next_minor}"
next_branch="release/${next_major}.${next_minor}"
echo "::set-output name=next::${next_branch}"
