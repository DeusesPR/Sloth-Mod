# Privacy

Sloth-Mod runs on your PC. This page says what it sends over the internet, and to whom.

## The short version

- There are **no accounts**. You never sign up for anything with Sloth-Mod.
- There is **no telemetry and no analytics**. Sloth-Mod does not report what you do, what you make, or that you use it. It has no server of its own.
- Your **API keys are stored in the Windows Credential Manager**, not in a file, and are sent only to the AI provider they belong to.
- When you ask the AI to make or change a mod, **your prompts, the files of that mod project, and any pictures the AI needs to look at are sent to the AI provider you chose**. That provider's privacy policy and terms apply to them.
- Downloads from Modrinth, Mojang, the mod loaders, Gradle and the Java download site contact those services. The update check contacts GitHub. If you turn them on in Settings (all are off by default), sound lookups contact OpenGameArt or Freesound and the optional art helper contacts PixelLab.
- **Your own sounds** (Use my own sound) stay on this computer: the file is read and converted here, kept in your project's `.sloth/sounds/` folder, and never uploaded anywhere. The AI is only told the file's short name, not its contents, and the finished sound is part of the mod you make.
- **Nothing else leaves your PC.**

## Where Sloth-Mod connects

Sloth-Mod only talks to the places below, and only for the reason given.

| Destination | Why | When |
| --- | --- | --- |
| The AI provider you picked (for example `api.anthropic.com`, `api.openai.com`, `generativelanguage.googleapis.com`, `api.x.ai`, `api.deepseek.com`, `openrouter.ai`, or the address of a model on your own PC or network) | Sends your request and receives the AI's answer. Also lists the provider's models and runs "Test connection". "Translate my mod" sends the mod's English names and texts, and "Explain" sends the one file you ask about. | Whenever you use the AI, press Test connection or Load available models. A second provider is contacted only if you set one as the "vision helper". |
| `auth.x.ai` and `api.x.ai` | Only for the experimental "Sign in with Grok" option, after you turned it on and accepted its warning. | Only if you use that option. |
| `openrouter.ai` (the public model price list, no key and no account) | Keeps the "about how much did this cost" figure up to date. Nothing about you or your mod is sent, only the normal request details every website visit includes (your IP address and a "Sloth-Mod" user agent). | At most once a day when an AI run starts, and when you press "Refresh prices". This happens even if you use a different provider. |
| `api.modrinth.com` and `cdn.modrinth.com` | Discover, the Modpack builder's searches and downloads, mod and modpack search, installing mods, update checks, project pictures, publishing a mod when you press Publish, and `api.modrinth.com/maven` (Modrinth's Maven, read by the Gradle build of a mod that uses one of the open libraries the app can install, for example GeckoLib, Trinkets or a quest book, to fetch that library; the files come from `cdn.modrinth.com`) (that uses your Modrinth token, which is also kept in the Credential Manager). | When you browse Discover or My Mods, install, update or publish. |
| `api.github.com` | Only when you turn on "Also back up to a private GitHub repository" in Settings (Back up my projects) and paste your own GitHub token: Sloth-Mod checks the token, creates a PRIVATE repository in your account if it does not exist, uploads your mod's source files (never build files, the game's run folder, downloaded libraries or anything that looks like a password or key), and, when you ask, downloads them back. The token is kept in the Credential Manager and sent only to api.github.com. Public repositories are refused. | When you press "Back up now", after each kept change if you turned on automatic backups, and when you restore from GitHub. |
| `maven.parchmentmc.org`, `maven.architectury.dev`, `maven.shedaniel.me`, `maven.terraformersmc.com`, `maven.ladysnake.org`, `cursemaven.com`, `repo.maven.apache.org`, `repo1.maven.org`, `libraries.minecraft.net` | Maven repositories the safety guard lets a mod build use for a library or tool the AI adds (mappings, common mod libraries, Minecraft's own libraries). Only these hosts are accepted; any other repository line is refused. | Only when a mod build needs a library from one of them. |
| `github.com`, `raw.githubusercontent.com`, `gitlab.com` | Only files that a modpack you import lists as downloads. `raw.githubusercontent.com` is also read for the current Fabric build settings when a new project is created. | When you import a modpack or create a project. |
| `meta.fabricmc.net`, `maven.fabricmc.net`, `meta.quiltmc.org`, `maven.neoforged.net`, `files.minecraftforge.net`, `maven.minecraftforge.net` | Mod loader versions and installers, for game profiles and mod projects. | When you create or update profiles and projects. |
| `opengameart.org` | Only if you turned on "Look for sounds on OpenGameArt" in Settings (off by default): the AI searches the site for a sound effect and downloads the one it uses. Only the few search words and a normal page request are sent; no key, no account. | Only when the AI looks for a sound and the setting is on. |
| `en.wikipedia.org` and `minecraft.wiki` | Only if "Let the AI look things up online" is on in Settings (on by default): while clarifying or planning, the AI may read a short summary of a thing it does not know (a rare animal, a real-world object, a game mechanic). Only the few search words and a normal request with a "Sloth-Mod" user agent are sent; no key, no account, no pictures are downloaded. At most 2 lookups per request, answers are kept on your PC for up to 30 days. With Kid-safe mode on, only `minecraft.wiki` is used. Wikipedia text is CC BY-SA; it is used only as a reference for the AI and is never put in your mod. | Only when the AI looks something up and the setting is on. |
| `freesound.org` and `cdn.freesound.org` | Only if you turned on "Look for sounds on Freesound" in Settings (off by default) and pasted your own free Freesound API key: the AI searches for a public-domain (CC0) sound and downloads its preview. Your key is sent to Freesound (it is stored in the Windows Credential Manager, never in a file) together with the few search words. | Only when the AI looks for a sound and the setting is on. |
| `api.pixellab.ai` | Only if you turned on "Use PixelLab for art" in Settings (off by default) and saved your own PixelLab key (kept in the Windows Credential Manager): the art engine's picture and a short description of the texture are sent to PixelLab to be redrawn. Pictures it returns are yours under PixelLab's terms. | Only when the AI makes textures and the setting is on. |
| `github.com` (release files, including `latest.json`, and their download addresses) | The update check: Sloth-Mod asks the project's GitHub Releases page whether a newer version exists and, if you press "Update now", downloads the signed installer. Only normal request details are sent (your IP address and the app's user agent). You can switch it off with "Check for updates automatically" in Settings. | At startup (at most every 6 hours), when you press "Check for updates", and when you install an update. |
| `aka.ms` (Microsoft's OpenJDK download) | The private copy of Java that Sloth-Mod uses. | The first time you need a Java version. |
| `services.gradle.org`, `downloads.gradle.org`, `plugins.gradle.org`, `repo.maven.apache.org` | The Gradle build tool and the libraries a mod build needs. | When Java and Gradle are installed or a mod is built. |
| Mojang servers (`piston-meta.mojang.com`, `libraries.minecraft.net`, `resources.download.minecraft.net` and similar) | Minecraft's own files, which the build tools download so your mod can be compiled and tested. This is done by Gradle and the loader tools, not by Sloth-Mod's own code. | When a mod is built or tested. |
| `www.minecraft.net`, `modrinth.com`, `grok.com`, `buymeacoffee.com` (the support page, only when you click "Support Sloth-Mod"), `github.com` (bug report, suggestion and idea forms, and the page where you make a backup token), `kenney.nl`, `pixellab.ai`, API-key pages of AI providers | Only opened in **your browser** when you click a link or button. Bug reports and suggestions are prefilled in the link; nothing is sent until you submit the form on GitHub yourself. | When you click them. |

A quick check when the app starts also tries to reach Modrinth, Gradle, the Maven servers above and your AI provider's address (without your key) to tell you if your internet or a firewall is in the way. It sends nothing about you or your mods.

Starting Minecraft ("Test it in Minecraft", the Minecraft Launcher) is done by the game itself and its tools, which have their own connections and privacy rules. Sloth-Mod does not control them.

**Art check.** Every new picture is checked on your PC by Sloth-Mod itself; nothing leaves your PC for that. Only if you switch on "Ask an AI whether the art matches" in Settings (off by default) is one small preview sheet (at most 832 px wide: the picture enlarged, or a model seen from a few sides) sent, per asset and only for pictures that passed the built-in checks, to the AI provider you chose or to your vision helper, and only when that model can read images. No other host is contacted.

**Your own pictures.** "Use my own picture" turns a drawing or photo into a texture on your PC; the original is read only by Sloth-Mod and is not uploaded anywhere. A picture you attach to a chat message is copied into your mod's `.sloth/pictures` folder, and only the file's name and that path go to your AI provider (the AI does not receive the picture itself unless it looks at the finished texture preview, like any other art).

**Talking instead of typing.** The microphone button only puts the cursor in the box and tells you about your computer's own voice typing (on Windows 11: Win + H). Sloth-Mod does not record or listen, and it does not use the browser speech service (which could send audio to a cloud service). If you use Windows voice typing, Windows may send your voice to Microsoft to turn it into text; that is Windows' own feature, with its own privacy settings.

## This website

This page covers the app. The project website (deusespr.github.io/Sloth-Mod) is a static GitHub Pages site with no cookies, no analytics and no accounts. Its "release chest" asks `api.github.com` for the latest release number from your browser, so GitHub sees your IP address as it would on any visit; GitHub Pages and GitHub have their own privacy policies.

## Mods you make with AI characters

The app itself still sends nothing beyond the table above. But a mod made with the AI character recipes (`ai_npc`, `ai_companion`) contains a small, engine-written AI client that runs inside Minecraft. When the player (or the owner of a server) turns it on by pasting their own AI key into the mod's config file (`config/<mod id>-ai.json`, never inside the mod itself), the game sends the character's description, the recent chat with it and a few facts about what is near it to the AI provider they chose (a fixed list such as OpenAI, Anthropic, Google, DeepSeek, OpenRouter, Groq, Mistral, xAI, or Ollama / LM Studio on the same computer). Paid providers charge the key's owner, and the provider's own content rules apply. Nothing is sent until the switch is turned on and the plain-words notice is accepted (and, except for the programs on the same computer, a key is set). The character also keeps its last few chat lines with each player in the world folder (`sloth_ai/`). The key is never sent to other players or logged, and the mod checks the address again before every request, so no other address can be reached. Sloth-Mod's own safety scan blocks every other web connection in generated code.

## What stays on your PC

Your settings, your mod projects, the version history, run logs, the AI's knowledge base and caches, and your usage and cost counters are all files on your computer. Run logs can contain your prompts and the AI's answers; "Copy run log" only copies them to your clipboard. Nothing is uploaded unless you choose to share it yourself.

**Files inside a built mod.** When Sloth-Mod builds a `.jar` file for your mod, it stores a copy of that mod's source files and Studio settings inside the `.jar` (`META-INF/sloth-project.json`) so you—or anyone you give the `.jar` to—can reopen the mod in Sloth-Mod later even if the original project folder is gone. Your computer's folder paths, game profile IDs, chat history, run logs, and saved keys are never put into the `.jar`.

## Your choices

- Choose an AI provider whose policy you are happy with, or a model on your own PC (for example Ollama or LM Studio) so that nothing about your mods leaves your computer.
- Delete a saved key in Settings, or remove it in the Windows Credential Manager.
- Turn off "AI-picked ideas" in Settings to stop the small daily idea request.

## Changes

If this ever changes, this file and the About screen will say so in the release notes. Versions up to 1.1.1 are open source; from 1.1.2 on the source is not published, and this file is the promise we keep.
