---
title: A better git log
date: "2021-03-22T00:00:00.000Z"
tags:
    - git
excerpt: A more readable and concise way to display the git log.
---
The default `git log` is usually too verbose and long for my workflow.
In most situations I just want to see the latest 10 commits with each commit on one line of output.

The following alias will just do that:

```toml
; ~/.gitconfig

[alias]
  slog = "!f() { \
            git log \
              -${1-10} \
              --graph \
              --abbrev-commit \
              --decorate \
              --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(auto)%d%C(reset)'; \
          }; f"

```

Doing `git slog` returns the following

```bash
$ git slog
* 602c404 - (11 hours ago) Responsive homepage - Wout De Puysseleir (HEAD -> master, origin/master, origin/HEAD)
* 8f7e448 - (12 hours ago) Add blog navigation - Wout De Puysseleir
* b3b62be - (12 hours ago) Remove service worker - Wout De Puysseleir
* aa78405 - (12 hours ago) Remove unused css - Wout De Puysseleir
* 3edea7f - (12 hours ago) Set hello world to draft - Wout De Puysseleir
* f97f541 - (12 hours ago) Remove font family code - Wout De Puysseleir
* 38db232 - (12 hours ago) Fatten titles - Wout De Puysseleir
* 2f764e2 - (13 hours ago) Fix monospace - Wout De Puysseleir
* 2e4e25d - (13 hours ago) Big blog update - Wout De Puysseleir
* b652496 - (17 hours ago) Various blog improvements - Wout De Puysseleir
```


You can also do `git slog 20` if you want to see the latest 20 commits.
