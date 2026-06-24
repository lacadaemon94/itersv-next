# Agent Instructions

## WSL2 Local Development

This repository lives in WSL2 at:

```bash
/home/zjavier/projectx/itersv-next
```

Treat WSL2 as the source of truth for all local project work. Do not run repo
tooling through Windows paths when a WSL path is available.

### Required Command Pattern

- Run project commands inside Ubuntu with `wsl`.
- Prefer the Linux path with `--cd`, not the UNC path:

```powershell
wsl --% -d Ubuntu --cd /home/zjavier/projectx/itersv-next bash -lc "git status --short"
```

- For nested apps, set `--cd` to the app folder:

```powershell
wsl --% -d Ubuntu --cd /home/zjavier/projectx/itersv-next/itersv_revamp bash -lc "npm run lint"
```

### Tooling Rules

- Use WSL Git, not Windows Git on `\\wsl.localhost\...`, to avoid dubious
  ownership and filesystem edge cases.
- Use Linux filesystem tools from WSL: `rg`, `find`, `sed`, `ls`, `grep`,
  `git`, `npm`, and `node`.
- `ripgrep` is installed in Ubuntu and should resolve as `/usr/bin/rg`.
- Node is managed by `nvm` in Ubuntu. Fresh login shells should resolve:
  `/home/zjavier/.nvm/versions/node/v24.13.1/bin/node`.
- If `node` or `npm` is missing, run:

```bash
source ~/.nvm/nvm.sh
```

### Shell Quoting

- The Codex shell is usually PowerShell, so Linux pipes and operators can be
  misread before reaching WSL.
- Use `wsl --%` for commands with pipes, `&&`, `||`, `$PATH`, parentheses, or
  complex quoting.
- Keep commands simple and run them in WSL rather than composing Windows and
  Linux shell syntax together.

### Known Fixes Already Applied

- Added `/home/zjavier/.bash_profile` so non-interactive WSL login shells load
  `.profile` and `nvm`.
- Installed Ubuntu `ripgrep` so `rg` no longer resolves to the Windows Codex
  bundled binary under `/mnt/c/Program Files/WindowsApps/...`.

