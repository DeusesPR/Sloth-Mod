# Changelog

All notable changes to Sloth-Mod are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [semantic versioning](https://semver.org/).

## 1.2.1

You can now remove a saved AI key (Settings, "Forget key" next to Save key), so a key you stopped using no longer warns you on every start. Each note in the "Before you build" panel also has a "Don't show again" button; a note comes back if it changes or gets worse.

## 1.2.0

The biggest update so far: far more things you can ask for, mods that are tried out before you see them, and a lot of safety work.

New building blocks, effects and the checks that go with them are made for Minecraft 26.3 (Fabric) only. Older game versions keep what they had and say so in plain words when something is not available there.

### New things you can ask for
- **Block families and furniture.** Stairs, slabs, walls, doors and fences from one block, shaped blocks whose hit box matches how they look, and furniture.
- **Hands-on stations and gestures.** Cutting boards, stacking tables, pans, stirring pots and other things you use with the mouse.
- **Windows, storage and backpacks.** Chests and machines with their own window, backpacks and trade screens.
- **Crops, feasts and animals.** Crops, meals, and tameable, breedable creatures with different looks.
- **Wearable gadgets.** A jetpack with a fuel bar, a glider, a double jump, an item that pulls things to you, and goggles.
- **Nightly invasions.** Waves of mobs that walk toward the players each night, with a boss bar, a mini boss and a night counter.
- **Dragons that match their element.** A fire dragon is red and orange, an ice dragon pale blue, and its spawn egg matches.
- **New recipe types and trades.** Smoking, campfire, stonecutting and smithing recipes, fuel items, and villager trades.
- **Picture to pixel art.** Turn your own picture into game art. A button next to the idea box shows how to use Windows voice typing (Win + H).
- **Characters that talk back.** Experimental: switch it on in Settings first (it is off by default). Characters inside your mod answer using your own AI key.
- **Open libraries.** Mods can use well-known libraries; the app installs them next to your mod and tells you which ones.
- **Add a mod to another pack.** Copy a mod you made into a different game profile.
- **How players get things in survival.** New mods get extra ways to obtain what you make (a crafting recipe, loot, ore in the world, a trade) and the guide lists them. You can switch each one off. Mods made with an older version are not changed unless you switch something on in the mod's guide or Edit panel.

### Better looking and moving creatures, items and effects
- Creatures have real bodies, new walk, fly and swim motions, better faces and cleaner colours.
- Item and block art is cleaner, items can have 3D models, and swords, staffs and guns get hit, trail, charge and glow effects. Guns shoot bullets you can see.
- Behaviour tuning: change how a creature acts in the Edit panel without asking the AI.

### Your mod is tried out before you see it
- Each mod is started in a real Minecraft server before you see it, and what you asked for is tried out there: items are used, blocks are placed and clicked, and creatures are spawned and hit. Recipes that do not load are caught. Problems are fixed first or told to you plainly.
- Generated files get a quick compile check and loot tables are written in the exact shape the newest game version expects, so fewer repair rounds are needed.
- The guide says only what the mod really does, and results say plainly what was "Not built".

### Big projects
- **Fixed: earlier steps keep their files.** A repair in a later step of a Big project could delete files written by steps that were already finished. That no longer happens, and the "class exists" check accepts full class names.

### Safer, more private
- **Your AI key is never put into a shared modpack.** Exports leave out secrets by name and by content.
- **Safer test runs.** Before every test run the build files are checked. For a build that is waiting for your test they are put back to what Sloth-Mod wrote, again after the game closes, even when you cancel; for a saved mod a changed build file stops the run.
- A stricter check of the code the AI writes, and clearer privacy and licence texts: every online address the app uses is listed, and the open libraries it installs are credited.

### Also
- Translation of your mod into other languages and "explain this file" in plain words.
- Faster feedback while the AI works, smaller prompts that suit smaller AI models, and a per-mod theme.

### Still being polished
- Some new parts were built and started on a test server but have not been played by many people yet: spells and tool tiers, kingdoms and quests, seats, "Check it in the game for me", test with a friend, live reload, backups to your own GitHub, datapack and resource pack export, and the modpack builder. If something acts up, use **Report a problem**.
- New building blocks and in-game checks are for Minecraft 26.3 on Fabric first; NeoForge and Forge follow.
- Dragons walk and look right; flying, riding and fire breath are coming next.
- The installer is not code-signed yet: Windows SmartScreen shows a warning ("More info", then "Run anyway").

### Coming in later updates (a small sneak peek)
- Dragons you can ride, that fly and breathe fire.
- Changing anything in your mod yourself, card by card, without asking the AI.

### Update
Already on 1.1.3: Sloth-Mod offers the update on start (Settings, Updates, Check for updates). Press **Update now**. Your projects, settings and keys stay.

## 1.1.3

Guns now shoot bullets you can see, and the setup questions fit what you typed.

### New
- **Guns shoot visible bullets** from the barrel, with a small muzzle flash. The Edit panel can switch between real bullets, a tracer line or an instant hit, and set the flash to off, small or big. To update a gun you already made: open it in the Edit panel, change a value and press Apply.
- **Setup questions fit your idea.** For creatures: Friendly, Leaves you alone unless attacked, Attacks players or Just scenery, plus where it lives, how often you see one and whether they look different.

## 1.1.2

A small update: drops on the newest Minecraft version, and a few fixes to how the AI makes things.

### Fixed
- **Drops work on Minecraft 26.3.** Custom mobs and custom loot give the amounts and chances you asked for; the newest game version changed how drops are written.
- **Fewer wasted AI repair rounds** (recipes that equal one of the game's own, small slips while painting, more colour words, free sound descriptions).
- **About window** shows the new terms and the open-source notices.

### Terms
- Sloth-Mod stays free to use. From 1.1.2 the source code is no longer published; see LICENSE. Versions up to 1.1.1 keep their MIT license.

## 1.1.1

Fixes for what showed up when 1.1.0 was played for real: staffs that did nothing on a quick click, custom keys on Forge 1.20.1, ideas that kept shuffling, and a Simple view that showed items twice and had no guide.

### Fixed
- **Quick click works on charge items.** A staff or wand that uses "hold to charge" now does its normal action on a quick right-click and its stronger version when you hold longer. While you hold, you see the charge build (more particles, a rising chime, a ready ring) and the ability fires with a small burst on release.
- **Ability items** (staffs, wands) can be set to charge or not, and the Edit panel has the sliders for it.
- **Custom keys on Forge 1.20.1** now respond in the game window.
- **Damage kinds** show up as one tidy "Damage kinds" row in the guide with their own symbol, instead of as separate picture cards with a bare letter, and without commands that do not apply.
- **Simple view:** each item shows one picture card in the chat (not two), labelled with its name; the guide ("How to play with it") is open in the review card and in the sidebar, and clicking an item under "Your blocks & items" shows its guide entry.
- **Home:** the idea cards stay as they were when you come back to the home screen and change only when you press Shuffle; the app asks the AI for new ideas at most once a day. Your mod list is short, with a search box.
- **Pack compatibility card:** the wording is clearer when a pack has no Fabric API ("Fabric API was added to the test").

## 1.1.0

Faster builds, better-looking art, a new sound engine, a stronger safety check, and a lot more the app can make without asking the AI. Everything new was tested by building mods for real and starting test servers, and the game window was opened on Fabric 26.3, NeoForge 1.21.1 and Forge 1.20.1 with a test mod; most of the new art, sounds and behaviour has not been played by a person yet (see the release notes for the list).

### Faster
- A small mod (one item or block with a behaviour) now takes about two AI turns. The app writes the plan itself, skips research it does not need, attaches the usual sounds on its own, and tells the AI which files it already wrote so the AI does not re-read them.
- Fewer wasted builds: Gradle is kept warm between steps, started ahead of time, works offline when everything is already downloaded, and the test-server check is skipped when nothing that could break it has changed since the last pass.
- Every new mod used to download the build-tool wrapper again. The app now keeps a checked copy for each Gradle version and reuses it. On the test PC this took the "project setup" step from 16.4 s to 0.12 s.
- Each result card now shows where the time went (AI, writing files, building, safety scan, test server, waiting for you).
- New setting "Quick try" (off by default): the slow checks wait until you press Keep. If they fail, the mod is not kept and you can choose "Keep it anyway".
- Anthropic requests use prompt caching, and old tool output in long runs is shortened, so long runs cost less.

### Looks
- New hand-drawn 16x16 item pictures: several original designs for each shape, so "other versions" in the art picker are really different designs, not recolours. Four sword designs that looked bad were dropped.
- 39 more item shapes (lanterns, thrown and swung weapons, tools, gadgets, bags, wearables).
- Block faces look more like real blocks: chipped rock, ore clusters, brushed metal.
- New mob faces: small natural eyes like the game's own mobs, angry narrowed eyes for hostile ones, no smile or blush unless you ask for a cute mob.
- Mobs: calmer skins, muzzles, ears with lighter insides, horns or beaks, tails, darker feet. Box sizes snap to whole pixels.
- Things that are not an object (a "healing charm", a status effect) get a proper symbol icon instead of a random shape: 24 symbols.
- Vehicles get their own pictures (five car designs plus boat, plane, helicopter, hoverboard) instead of one shared car.
- The mod icon is a composed 128x128 tile. Spawn eggs get different colours per mob.
- The art quality check is stricter: it also rejects sprites with no outline and visible tile-grid rings, and a test checks that every built-in recipe has a real, distinct picture.

### Sounds
- **Minecraft's own sounds.** When you ask for a sound the game already has (a door, the ender dragon, a chest, a wolf, footsteps, glass, an anvil, thunder...), the mod plays the game's own recording instead of a made-up one. Sounds that only roughly fit are never matched, so a squeaky chicken still gets a squeak.
- **"Use my own sound".** Attach a sound file of your own (wav, ogg, mp3 or flac) from the chat box or the Edit panel: trim it, fade it, set the volume, and it is made mono and loudness-safe for blocks, items and mobs. A credit line is kept with the mod.
- The sound maker was rebuilt. It now has 614 kinds of sound (creatures, weapons, magic, materials, machines, interface, ambience, music), each made from layers instead of one of about 20 presets. Old preset names still work.
- Every sound is checked before it is used (clicks, silence, clipping, bad loops, takes that are all the same) and rebuilt if it fails.
- Loudness is now set to a vanilla-like level for each kind of sound. A review measured real vanilla sounds and found explosions, thunder, dragons and looping sounds too quiet; they were raised.
- Sounds are described by the thing named ("dragon", "cannon", "coin"): bigger things sound deeper. Laser, heartbeat and thunder words are routed by meaning.
- Every vanilla mob sound for each Minecraft version can be used by name.
- Edit panel: change a sound's kind, size, feeling, pitch, length, volume and number of takes without the AI, or roll a new version.
- Music discs: a small composer writes a short tune (seven moods) for a disc.

### Safer
Independent security review of the code guard; the reviewer tried 76 new ways around it.
- The guard now judges the whole `build.gradle`, not only the lines the AI added, and also `settings.gradle` and `gradle.properties`. Init scripts, `buildSrc` and `.kts` build files stop the build.
- Build files are locked while a mod is being made: if code changes a build file or the Gradle wrapper, the change is put back and reported, and links (shortcuts) planted in place of those files are removed.
- Only source files, `build.gradle` and the README can be added to your project by a kept run. Loose files, `mods/`, `config/` and `exports/` are never added, changed or deleted by a promotion any more.
- The Gradle wrapper address must be Gradle's own download server.
- More Java patterns are caught: writing files outside the game folders (including through method references and static imports), climbing out of a folder, reading private members through reflection, and Minecraft's own web helpers, database and compiler classes.
- The check that blocked requests to harm other people's computers has more patterns (for example uploading a person's documents folder) and 28 new everyday requests that must stay allowed.
- Text the app reads from Wikipedia and the Minecraft wiki is wrapped as untrusted data before the AI sees it.
- Not covered (see release notes): this is a guardrail, not a wall. Code that passes still runs with your Windows rights.

### New
- **Edit panel.** Change what the app made, with no AI: sizes, colours, numbers, choices and sounds, with a live preview. Pictures you painted or models you imported are kept.
- **Pixel editor.** Draw on your mod's own textures in the app, with tips in plain words.
- **Blockbench.** Export blocks, items and mobs as `.bbmodel` and import your edited model back.
- **Update my mod to a new Minecraft version** (a newer version of the same loader, or Forge to NeoForge) in one run, keeping your art, sounds and hand edits.
- **Creatures from a description:** any body (quadruped, dragon, serpent, blob, humanoid, bird) with parts, walking, flying, swimming, climbing, riding.
- **Guns** (hitscan, magazine, reload, recoil, scope), **vehicles**, **wearables** (hats, capes, wings, backpacks) and **data-driven content** (enchantments, damage types, music discs, armor trims).
- **Overhaul building blocks** (player stats, HUD bars, key actions, world events, custom effects, NPCs with dialogue, bosses, ability items, armor sets, structures) and **Big projects** with genre templates and up to 150 steps.
- **13 playbooks** the AI can open (commands, config, networking, inventory windows, trees, dimensions and more).
- **Look-up tool:** while clarifying or planning, the AI may read a short summary from Wikipedia or the Minecraft wiki (on by default, switch in Settings).
- **Stronger-model suggestion** after a failure, and an opt-in "Help fix this: send a report" that shows exactly what would be sent.

### Fixes
- Add-ons for Fabric mods built with a newer Loom now load on Minecraft 1.21.1 and 1.20.1, and new NeoForge 26.1 mods use the stable NeoForge release (carried over from 1.0.4).
- Enchantments and armor trims now work on Minecraft 26.1 and 26.2. Each of 26.1, 26.2 and 26.3 reads these data files in a slightly different shape; each now gets its own. A real server loaded them on all five 26.x targets.
- Following mobs on 26.x no longer lack their "tempt range", and several key actions in one mod no longer crash 26.x by registering the same Controls group twice.
- After Keep, Windows sometimes left the work folder locked. The app now stops its own Gradle helpers and tries again.
- Gradle wrapper downloads: an intermittent "Test of distribution url failed" no longer stops a build, and the wrapper's own 5xx/429 errors are retried instead of being sent to the AI.
- Blocks with a window (machines, inventory blocks) are no longer invisible on 1.20.1 and 1.21.1, and the windows use the game's own chest and furnace pictures.
- Forge 1.20.1 builds keep the Gradle helper off, as its template needs.
- Guns made for Forge 1.20.1 now fire. Their client-side hooks never ran on that version; they are now registered by hand. Seen working in the game by the camera test.

### Removed
- **Ready-made mods are gone.** The "Try a ready-made mod" section on the home screen no longer exists, and neither do the five sample mods (squeaky duck toy, chime block, honey cookie, ruby tools, glow lamp). Sloth-Mod makes mods from your own words; for finished mods use the **Discover** tab, which installs them from Modrinth.
- With no AI set up yet, the home screen now shows three plain first steps: get an API key, test your AI, or open Discover.
- The old sound presets as separate code are replaced by the new engine (their names still work).

## 1.0.4

### Fixed
- Add-ons for Fabric mods on Minecraft 1.21.1 and 1.20.1 now work with mods that were built with newer tools. Before, some of those mods could not be read when you made an add-on for them. Sloth-Mod now converts them so they load.
- New NeoForge mods for Minecraft 26.1 now use the stable NeoForge release instead of an early test build. They still load in any 26.1 game.

### Changed
- Newer, safe versions of the build tools: Gradle 8.14.6 for Fabric 1.21.1 and 1.20.1, Fabric API 0.116.18 for 1.21.1, and Forge 47.4.29 for 1.20.1.

## 1.0.3

### Fixed
- The safety check that starts a test server no longer leaves a hidden Minecraft server running in the background after it finishes. On some setups (Forge especially) the server did not hear the "stop" message and kept using memory until you restarted your PC. Sloth-Mod now also asks the server to stop another way and, if it still does not, ends it and everything it started.
- The same protection now covers the test server of the modpack compatibility check, and a cancelled check no longer leaves a server behind.

## 1.0.2

### Fixed
- Share: "Show the folder" now opens Explorer at your saved mod file. Before, the button did nothing.
- Blocks that remember things (a counter or storage block made with the saved-data recipe) were invisible in the game on Minecraft 1.20.1 and 1.21.1. They now show up as normal blocks.
- Downloading Gradle is more reliable. If Gradle's download server answers with a timeout or "too many requests", Sloth-Mod now waits and tries again (and tries Gradle's second official address) instead of failing the build. Gradle's own address check no longer stops a build on a shaky connection, and a download hiccup is no longer sent to the AI as if it were a mistake in your mod.

## 1.0.1

### Fixed
- Guns now look and sound like guns. Asking for an AK-47, rifle, pistol, revolver, shotgun, sniper rifle, SMG, bullet or magazine gives a real gun picture (dark metal with a wooden stock) instead of an unrelated shape. Laser and blaster weapons keep their own look.
- Gun sounds: new built-in gunshot (pistol, rifle and shotgun sound different), reload, empty click and brass casing sounds. Asking the AI for a gun sound no longer offers laser zaps first; lasers and blasters still get laser sounds.
- A quick edit such as "make the gunshot louder" works.
- Numbers are easy to read again. The pixel font drew 2, 5 and 7 so they looked like Z, S and a hook; numbers now use a clearer pixel font in the app and on the website.
- The AI no longer leaves try-out items in your mod (for example a "Probe Chime" it made while trying the sound tool). Before you are asked to test, new items, blocks, mobs or sounds named like try-outs are removed, unless your own request used that word.

### Added
- A Community button in Settings (and links on the website and in the README) that opens Sloth-Mod Discussions on GitHub: share what you built, ask questions, see what others made.

## 1.0.0 — first public release

The first public release of Sloth-Mod, a Windows app (Tauri 2, Rust, React) that builds Minecraft mods from plain English with any AI and manages your mods.

### Making mods
- Describe a mod in plain English. A clickable form or one short question clarifies the idea, an approved plan guides the build, and the AI writes the mod in a sandbox.
- Builds with Gradle and repairs build errors automatically (up to five attempts), validates assets, generates missing textures and runs headless GameTests and a server start check.
- The run ends at "Ready for you to test": start Minecraft from the unsaved build, then keep the changes, ask for a fix or undo. A diff view, undo point, version history and Continue / Start over after a stop or restart are included.
- Built-in recipes for blocks, items, food, tools, armor, sound blocks, saved-data blocks, crafting recipes, creative tabs, loot and complete mobs, so simple mods take only a few AI round trips, also on cheap models.
- Quick edits: short changes such as "make the squeak louder" skip questions and planning.
- Big project mode: an approved design, an editable 20 to 50 step roadmap, a project map and per-step feature checks, built one tested step at a time with "Keep going".
- Modpack target: link a mod to a game profile so the AI knows the pack's mods, and check compatibility on a throwaway server before the mod is added.
- Add-ons: make a mod that depends on a Modrinth mod, with the base mod's public API indexed for the AI.

### Art, sound and guides
- Built-in texture engine: Minecraft-style 16x16 items, tools, gems, food, blocks and mob skins drawn on the fly from dozens of materials and shapes, plus a library of about 190 ready-made sprites. A quality check replaces flat, blurry or noisy art before you see it.
- Optional PixelLab add-on: if you have a PixelLab account, item and block art can be redrawn by it (your own key, off by default).
- Art picker: several versions of every texture, model and mob, chosen in one card with a 3D viewer; other versions are kept and can be swapped later.
- Works with models that cannot see images through text art analysis and an optional vision helper model.
- Sound maker: procedural squeaks, chimes, zaps, growls and more, written as real Ogg Vorbis sounds with registration code for every loader.
- Sound library: about 100 free sound effects by Kenney (CC0) built in, plus optional OpenGameArt and Freesound searches with automatic credits. Pick your favourite of three, like the art picker.
- Sounds stay pleasant: volume matched to the game, small pitch changes, rare ambient sounds, and a check that stops sounds from playing every game tick.
- How-to-play guide for every mod with crafting, furnace and smithing panels drawn like the game, drops and spawn info, a generated mod icon and mod metadata.

### Any AI, including free and local
- Providers: Claude, OpenAI, Gemini, Grok (API key; SuperGrok sign-in is experimental and off by default), DeepSeek, Qwen, OpenRouter, Mistral, Groq, Kimi, GLM, MiniMax, Together, Fireworks, Cerebras, NVIDIA NIM, Hugging Face, plus LM Studio, Ollama and any OpenAI-compatible server. Endpoints can be overridden.
- "Get an API key" help with a cost note for every provider, and a "Test this AI" check with an optional real mini build.
- API keys are stored in Windows Credential Manager.
- Spending limit: ask before one mod passes an amount, a daily cap, token limits for unpriced models, and an optional PIN. Cost is shown for every run.

### First run
- Ready-made mods that need no AI key: squeaky duck toy, chime block, honey cookie, ruby tools and glow lamp.
- Setup wizard, a short tour, and a startup health check for the Minecraft Launcher, Java, disk space, network and AI key, with a fix button for each problem.
- Private Java 25, 21 and 17 and Gradle are downloaded by the app; your system Java is never touched.

### Safety
- Game-safety checks (client code in common code, expensive per-tick work, missing assets, recipe clashes with vanilla).
- A guard that scans AI-written code before it is built, tested or played and blocks anything that could harm your PC or your information (running programs, network access, reading other apps' files and more), and a crash explainer that turns crash reports into plain English.
- You decide the themes of your mods. The app only refuses code meant to harm computers or steal information, and sexual content involving minors. An optional kid-safe mode keeps everything family friendly.

### Mod manager
- Discover mods, modpacks, resource packs and shaders on Modrinth with Modrinth-style filters, dependency installs and SHA-512 checks.
- My Mods: game profiles for Fabric, Quilt, Forge, NeoForge and vanilla, on/off switches, updates, adding files, mod details, `.mrpack` modpack import and export, "Tweak with AI" for pack tweaks, and Play through the official Minecraft Launcher (a backup of `launcher_profiles.json` is kept).

### Sharing
- Export a jar with a friendly readme, copy a message for a friend, or publish a draft project to Modrinth.

### Updates, help and privacy
- Automatic updates: the app checks for a new version on start and installs it when you say so (never in the middle of a build or a game).
- Report a problem: one button fills in a GitHub issue with your log attached and keys and your Windows name removed. Suggest an idea opens the idea form.
- About Sloth-Mod: license, third-party licenses, privacy note and disclaimer inside the app. No telemetry, no analytics, no accounts.

### Versions
- Minecraft 26.x on Fabric and NeoForge, 1.21.1 on Fabric and NeoForge, and 1.20.1 on Fabric and Forge.

### Known limits
- The installer is not code-signed, so Windows SmartScreen shows a warning ("More info", then "Run anyway").
- Not yet verified on a real machine: launching Minecraft from "Test it in Minecraft", the NeoForge and Forge headless installers, and a full end-to-end run with every AI provider.
- Grok sign-in is unofficial and experimental, off by default, and may be against xAI's terms; it shows a warning before you can use it.
- Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB and Microsoft Corporation.
