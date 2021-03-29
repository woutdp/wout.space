---
title: Git WIP
date: "2021-03-22T00:00:00.000Z"
tags:
    - git
    - workflow
excerpt: >
  How to 'stash' your files on a branch.
---
Sometimes I'm working on a branch and I won't finish what I'm working on for some reason.
Maybe there's a more urgent thing that needs to be done, or I'm just messing around and looking at different
ways to solve a problem, and I want to abandon this and work on something else.

In this case I want to stash my changes, for a long period of time, and I want to attach them to a specific branch.

I've been using a solution that works really well for my workflow:

```toml
; ~/.gitconfig

[alias]
  wip = !"git add .; git commit -nm 'WIP: This is a work in progress commit'"
  unwip = !"if git log -1 --pretty=%B | grep 'WIP'; then git reset HEAD~1; else echo 'No WIP commit was found'; fi"
```

Simply do `git wip` to add all your changes to branch under a _WIP_ commit.

To revert, do `git unwip`, which has a safeguard to prevent you from accidentally unwipping normal commits.
