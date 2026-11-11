# Security policy

## Reporting a vulnerability

Please report security problems **privately**, not in a public issue:

1. Use GitHub's [private vulnerability reporting](https://github.com/DeusesPR/Sloth-Mod/security/advisories/new) for this repository.
2. Include what you found, the Sloth-Mod version, your Windows version, and steps to reproduce. Do not include real API keys.

We will acknowledge your report as soon as we can, work on a fix, and credit you in the release notes if you want. This is a volunteer project, so please be patient and give us time to fix a problem before you publish it.

Supported versions: the latest release.

## What the safety measures do, and do not do

Sloth-Mod runs code that an AI wrote. Mods are programs, and the AI's Java and `build.gradle` are built, tested and played with your normal Windows permissions. There is no operating-system sandbox. These measures reduce the risk:

- **Safety guard.** AI-written Java and `build.gradle` files are scanned before any Gradle run. The scan looks for things a mod should never do: launching programs, web connections, files outside the game folders, native code, class-loading tricks, scripting engines, clipboard, keyboard or screen spying, reading other apps' data, and thread floods. For `build.gradle` the AI may only add dependency lines, repositories from an allowlist of Maven hosts, allowlisted plugins and a few plain settings. Findings are logged in the project's `.sloth/guard.log`, and a blocked run tells you what was found. There is an override in Settings for people who know what they are doing.
- **Sandbox and review.** The AI writes into a `_sandbox/` copy of your project. Nothing is kept until you review the result and accept it, with an undo point and version history.
- **Untrusted text is marked.** Outside text that reaches the AI (for example a Modrinth description) is wrapped so the AI treats it as data.
- **Verified downloads.** Mod downloads are checked against Modrinth's SHA-512 checksums, and paths coming from the network are sanitized.
- **Secrets.** API keys and tokens are stored in Windows Credential Manager, never in files or logs. Your Microsoft account never touches Sloth-Mod: signing in and launching stay with Mojang's launcher.
- **Backups.** Before Sloth-Mod edits `launcher_profiles.json`, it saves `launcher_profiles.sloth-backup.json`.

The guard is a **guardrail against an AI that was tricked or confused, not a security boundary** against a determined attacker who can obfuscate code. Only play mods you trust, including mods the AI wrote from text you pasted from somewhere else.

## Known limits

- The Windows installer is not code-signed, so SmartScreen shows a warning. Check that you downloaded it from this repository's Releases page.
- The Grok sign-in uses xAI's public Grok-CLI client and is unofficial.
- The AI provider you choose receives your prompts and the parts of your project it needs. Choose a local model (LM Studio, Ollama) if that matters to you.
